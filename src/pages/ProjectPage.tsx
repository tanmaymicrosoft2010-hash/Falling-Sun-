import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API = (import.meta.env.VITE_API_URL || 'https://fallingsun-api.onrender.com').replace(/\/$/, '');

type Team = {
  id: string;
  name: string;
  category: string;
  project_title: string;
  description: string;
  link: string | null;
  github_url: string | null;
  members: { name: string; role: string }[];
  tracks: { kind: string; track: string }[];
};

type ApiConfig = {
  SKILL_TRACKS: Record<string, string>;
  TOOLS: Record<string, string>;
  CRITERIA: Record<string, string[]>;
};

type Voter = { id: string; name: string; role: string };

const TOKEN_KEY = 'fs_token';
const EMPTY_SCORES = [0, 0, 0, 0, 0];

const categoryLabels: Record<string, string> = {
  game: 'Game Development',
  web: 'Web Development',
  robotics: 'Robotics',
};

function trackLabel(track: Team['tracks'][number], config: ApiConfig | null) {
  const labels = track.kind === 'tool' ? config?.TOOLS : config?.SKILL_TRACKS;
  return labels?.[track.track] || track.track.replace(/_/g, ' ');
}

export const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<Team | null>(null);
  const [config, setConfig] = useState<ApiConfig | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [showVote, setShowVote] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [voter, setVoter] = useState<Voter | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [voteError, setVoteError] = useState('');
  const [voteMessage, setVoteMessage] = useState('');
  const [voteBusy, setVoteBusy] = useState(false);

  async function apiRequest(path: string, options: { method?: string; body?: unknown; authToken?: string } = {}) {
    const response = await fetch(`${API}${path}`, {
      method: options.method || 'GET',
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...(options.authToken ? { Authorization: `Bearer ${options.authToken}` } : {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `Request failed (${response.status}).`);
    return data;
  }

  async function loadVoter(authToken: string, projectId: string) {
    const { user } = await apiRequest('/api/auth/me', { authToken });
    if (!['leader', 'jury'].includes(user.role)) throw new Error('Only team leaders and jury members can vote.');
    setVoter(user);
    const { votes } = await apiRequest('/api/votes/mine', { authToken });
    const existingVote = votes.find((vote: { team_id: string; scores: number[] }) => vote.team_id === projectId);
    setScores(existingVote ? existingVote.scores : EMPTY_SCORES);
  }

  async function openVoteForm() {
    setShowVote((open) => !open);
    setVoteError('');
    setVoteMessage('');
    if (!showVote && token && team) {
      setVoteBusy(true);
      try {
        await loadVoter(token, team.id);
      } catch (err) {
        setVoteError(err instanceof Error ? err.message : 'Could not check your voting account.');
        if (err instanceof Error && /token|login|required|expired/i.test(err.message)) {
          localStorage.removeItem(TOKEN_KEY);
          setToken(null);
          setVoter(null);
        }
      } finally {
        setVoteBusy(false);
      }
    }
  }

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!team) return;
    setVoteBusy(true);
    setVoteError('');
    setVoteMessage('');
    try {
      const data = await apiRequest('/api/auth/login', { method: 'POST', body: { email: email.trim(), password } });
      localStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      await loadVoter(data.token, team.id);
    } catch (err) {
      setVoteError(err instanceof Error ? err.message : 'Could not log in.');
    } finally {
      setVoteBusy(false);
    }
  }

  async function submitVote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token || !team) return;
    setVoteBusy(true);
    setVoteError('');
    setVoteMessage('');
    try {
      await apiRequest('/api/votes', {
        method: 'POST',
        authToken: token,
        body: { team_id: team.id, scores },
      });
      setVoteMessage('Your project vote has been recorded.');
    } catch (err) {
      setVoteError(err instanceof Error ? err.message : 'Could not submit your vote.');
    } finally {
      setVoteBusy(false);
    }
  }

  useEffect(() => {
    if (!id) {
      setError('This project link is invalid.');
      setLoading(false);
      return undefined;
    }

    let active = true;
    setLoading(true);
    setError('');

    Promise.all([
      fetch(`${API}/api/teams/${encodeURIComponent(id)}`),
      fetch(`${API}/api/config`).catch(() => null),
    ])
      .then(async ([teamResponse, configResponse]) => {
        const teamData = await teamResponse.json();
        if (!teamResponse.ok) {
          throw new Error(teamData.error || `Could not load project (${teamResponse.status}).`);
        }

        const configData = configResponse?.ok ? await configResponse.json().catch(() => null) : null;
        if (active) {
          setTeam(teamData);
          setConfig(configData);
        }
      })
      .catch((err: unknown) => {
        if (!active) return;
        setError(err instanceof Error ? err.message : 'Could not load this project. Please try again.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-[60vh] px-6 pt-36 pb-24 text-center text-cream">
        <p className="font-mono text-sm uppercase tracking-widest">Loading project…</p>
      </section>
    );
  }

  if (error || !team) {
    return (
      <section className="min-h-[60vh] px-6 pt-36 pb-24 text-center text-cream">
        <div className="mx-auto max-w-2xl border-2 border-ink bg-cream p-8 text-ink shadow-card">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-reddark">Project unavailable</p>
          <h1 className="mt-3 font-display text-4xl font-black">We couldn’t load this project</h1>
          <p className="mt-4">{error || 'This team could not be found.'}</p>
          <Link className="mt-6 inline-block font-bold underline" to="/">Back to Falling Sun</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-bg px-6 pb-24 pt-36 text-cream md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="font-mono text-xs font-bold uppercase tracking-widest text-cream/80 hover:text-yellow">
          ← Falling Sun 2026
        </Link>

        <header className="mt-8 border-2 border-ink bg-cream p-7 text-ink shadow-card sm:p-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-reddark">
            {categoryLabels[team.category] || team.category} project
          </p>
          <h1 className="mt-4 break-words font-display text-5xl font-black leading-none sm:text-7xl">
            {team.project_title}
          </h1>
          <p className="mt-5 font-mono text-sm font-bold uppercase tracking-wider text-ink-muted">
            Built by {team.name}
          </p>
        </header>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(240px,1fr)]">
          <section className="border-2 border-ink bg-cream p-6 text-ink shadow-card sm:p-8">
            <h2 className="font-display text-3xl font-black uppercase">About the project</h2>
            <p className="mt-5 whitespace-pre-wrap text-base leading-relaxed">{team.description}</p>
            {team.link && (
              <a
                className="mt-7 inline-flex border-2 border-ink bg-yellow px-5 py-3 font-display text-lg font-black uppercase shadow-[4px_4px_0_#1d1210] transition-transform hover:-translate-y-0.5"
                href={team.link}
                target="_blank"
                rel="noreferrer"
              >
                Visit project ↗
              </a>
            )}
            {team.github_url && (
              <a
                className="mt-3 inline-flex border-2 border-ink bg-white px-5 py-3 font-display text-lg font-black uppercase shadow-[4px_4px_0_#1d1210] transition-transform hover:-translate-y-0.5"
                href={team.github_url}
                target="_blank"
                rel="noreferrer"
              >
                View public GitHub repo ↗
              </a>
            )}
          </section>

          <aside className="space-y-6">
            <section className="border-2 border-ink bg-yellow p-6 text-ink shadow-card">
              <h2 className="font-display text-2xl font-black uppercase">The team</h2>
              <ul className="mt-4 space-y-3">
                {team.members.map((member, index) => (
                  <li className="border-t border-ink/25 pt-3" key={`${member.role}-${member.name}-${index}`}>
                    <p className="font-bold">{member.name}</p>
                    <p className="font-mono text-xs uppercase tracking-wider">{member.role}</p>
                  </li>
                ))}
              </ul>
            </section>

            {team.tracks.length > 0 && (
              <section className="border-2 border-ink bg-cream p-6 text-ink shadow-card">
                <h2 className="font-display text-2xl font-black uppercase">Tracks & tools</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {team.tracks.map((track, index) => (
                    <li
                      className="border border-ink bg-white px-3 py-2 font-mono text-xs font-bold"
                      key={`${track.kind}-${track.track}-${index}`}
                    >
                      {trackLabel(track, config)}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>

        <section className="mt-8 border-2 border-ink bg-yellow p-6 text-ink shadow-card sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-black uppercase">Support this project</h2>
              <p className="mt-2">Eligible team leaders and jury members can submit a project rating.</p>
            </div>
            <button
              className="border-2 border-ink bg-bg px-6 py-3 font-display text-xl font-black uppercase text-cream shadow-[4px_4px_0_#1d1210] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              type="button"
              onClick={openVoteForm}
              disabled={voteBusy}
            >
              {showVote ? 'Close voting' : 'Vote for this project'}
            </button>
          </div>

          {showVote && (
            <div className="mt-6 border-t-2 border-ink/20 pt-6">
              {voteBusy && <p role="status">Checking your voting account…</p>}
              {voteError && <p className="mb-4 border-2 border-reddark bg-white p-3 font-bold text-reddark" role="alert">{voteError}</p>}
              {voteMessage && <p className="mb-4 border-2 border-ink bg-white p-3 font-bold" role="status">{voteMessage}</p>}
              {!voter && !voteBusy && (
                <form className="grid gap-4 sm:grid-cols-2" onSubmit={login}>
                  <p className="sm:col-span-2">Log in with your team leader or jury account to vote. <a className="font-bold underline" href="/form">First-time account setup</a></p>
                  <label className="grid gap-1 font-bold" htmlFor="project-vote-email">
                    Email
                    <input className="border-2 border-ink bg-white px-3 py-2 font-normal" id="project-vote-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                  </label>
                  <label className="grid gap-1 font-bold" htmlFor="project-vote-password">
                    Password
                    <input className="border-2 border-ink bg-white px-3 py-2 font-normal" id="project-vote-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                  </label>
                  <button className="w-fit border-2 border-ink bg-cream px-5 py-3 font-display text-lg font-black uppercase shadow-[3px_3px_0_#1d1210] disabled:opacity-60 sm:col-span-2" type="submit" disabled={voteBusy || !email || !password}>
                    {voteBusy ? 'Please wait…' : 'Log in to vote'}
                  </button>
                </form>
              )}
              {voter && config?.CRITERIA?.[team.category] && (
                <form className="space-y-4" onSubmit={submitVote}>
                  <p className="font-bold">Voting as {voter.name} ({voter.role}). Choose a score from 0 to 5 for each criterion.</p>
                  {config.CRITERIA[team.category].map((criterion, index) => (
                    <label className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center" key={criterion}>
                      <span className="font-bold">{criterion}</span>
                      <span className="flex items-center gap-3">
                        <input
                          aria-label={`${criterion} score`}
                          className="accent-reddark"
                          type="range"
                          min="0"
                          max="5"
                          step="1"
                          value={scores[index]}
                          onChange={(event) => setScores((current) => current.map((score, scoreIndex) => scoreIndex === index ? Number(event.target.value) : score))}
                        />
                        <output className="w-5 text-center font-mono font-bold">{scores[index]}</output>
                      </span>
                    </label>
                  ))}
                  <button className="border-2 border-ink bg-bg px-5 py-3 font-display text-lg font-black uppercase text-cream shadow-[3px_3px_0_#1d1210] disabled:opacity-60" type="submit" disabled={voteBusy}>
                    {voteBusy ? 'Submitting…' : 'Submit vote'}
                  </button>
                </form>
              )}
              {voter && !config?.CRITERIA?.[team.category] && (
                <p role="alert">Voting criteria could not be loaded. Please close this panel and try again.</p>
              )}
            </div>
          )}
        </section>
      </div>
    </article>
  );
};
