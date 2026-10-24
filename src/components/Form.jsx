import { useCallback, useEffect, useState } from 'react';
import './Form.css';

const API = (import.meta.env.VITE_API_URL || 'https://fallingsun-api.onrender.com').replace(/\/$/, '');
const TOKEN_KEY = 'fs_token';
const SKILL_PICKS = 4;
const MAX_MEMBERS = 3;

const CATEGORY_NOTES = {
  game: 'Ship a playable build.',
  web: 'Frontend, backend and a real problem to solve.',
  robotics: 'Starts with an ideation round. The top 20 teams get the components.',
};

async function request(path, { method = 'GET', body, token } = {}) {
  let res;
  try {
    res = await fetch(API + path, {
      method,
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("Can't reach the server. Check your connection and try again.");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Something went wrong (${res.status}).`);
    err.status = res.status;
    throw err;
  }
  return data;
}

// The API runs on a free host that sleeps, so the first request can take a while.
function useSlowHint(active, ms = 4000) {
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    if (!active) {
      setSlow(false);
      return undefined;
    }
    const t = setTimeout(() => setSlow(true), ms);
    return () => clearTimeout(t);
  }, [active, ms]);
  return slow;
}

function SlowHint({ show }) {
  if (!show) return null;
  return <p className="fsf-hand fsf-hand--dark" role="status">Waking the server up. This can take up to 30 seconds.</p>;
}

function Alert({ children }) {
  if (!children) return null;
  return <div className="fsf-alert" role="alert">{children}</div>;
}

/* ---------- Log in / first-time setup ---------- */

function AuthCard({ onToken }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invite, setInvite] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const slow = useSlowHint(busy);
  const first = mode === 'register';

  async function submit(e) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      const body = first
        ? { email: email.trim(), password, invite_code: invite.trim() }
        : { email: email.trim(), password };
      const data = await request(first ? '/api/auth/register' : '/api/auth/login', { method: 'POST', body });
      localStorage.setItem(TOKEN_KEY, data.token);
      onToken(data.token);
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <section className="fsf-card" aria-labelledby="fsf-auth-title">
      <span className="fsf-sticker">Leaders only</span>
      <h2 id="fsf-auth-title">{first ? 'Create your account' : 'Log in to continue'}</h2>
      <p className="fsf-lede">
        {first
          ? 'Use the email the organisers have for you, pick a password (8+ characters) and enter the invite code they sent you.'
          : 'Use the email and password for your team leader account.'}
      </p>

      <div className="fsf-switch" role="group" aria-label="Account">
        <button type="button" aria-pressed={!first} onClick={() => { setMode('login'); setError(''); }}>Log in</button>
        <button type="button" aria-pressed={first} onClick={() => { setMode('register'); setError(''); }}>First time here</button>
      </div>

      <form onSubmit={submit} noValidate>
        <div className="fsf-field">
          <label htmlFor="fsf-email">Email</label>
          <input id="fsf-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="fsf-field">
          <label htmlFor="fsf-password">Password</label>
          <input
            id="fsf-password" type="password" value={password}
            autoComplete={first ? 'new-password' : 'current-password'}
            onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        {first && (
          <div className="fsf-field">
            <label htmlFor="fsf-invite">Invite code</label>
            <input id="fsf-invite" value={invite} autoComplete="off" onChange={(e) => setInvite(e.target.value)} required />
          </div>
        )}
        <Alert>{error}</Alert>
        <SlowHint show={slow} />
        <button className="fsf-btn" type="submit" disabled={busy || !email || !password || (first && !invite)}>
          {busy ? 'Please wait…' : first ? 'Create account' : 'Log in'}
        </button>
      </form>
    </section>
  );
}

/* ---------- Team registration form ---------- */

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter a team name.';
  else if (v.name.trim().length > 60) e.name = 'Team name can be 60 characters at most.';
  if (!v.category) e.category = 'Pick a category.';
  if (!v.title.trim()) e.title = 'Enter the project title.';
  else if (v.title.trim().length > 100) e.title = 'Project title can be 100 characters at most.';
  if (!v.description.trim()) e.description = 'Describe your project.';
  else if (v.description.trim().length > 2000) e.description = 'Description can be 2000 characters at most.';
  if (v.link.trim() && !/^https?:\/\//i.test(v.link.trim())) e.link = 'The link must start with http:// or https://.';
  if (v.members.some((m) => m.trim().length > 80)) e.members = 'Member names can be 80 characters at most.';
  if (v.skills.length !== SKILL_PICKS) e.skills = `Pick exactly ${SKILL_PICKS} skill tracks.`;
  if (!v.tool) e.tool = 'Pick a tool track.';
  return e;
}

function FieldError({ id, children }) {
  if (!children) return null;
  return <p className="fsf-field-error" id={id}>{children}</p>;
}

function TeamForm({ config, token, onCreated, onUnauthorized }) {
  const [v, setV] = useState({
    name: '', category: '', title: '', description: '', link: '', members: [''], skills: [], tool: '',
  });
  const [showErrors, setShowErrors] = useState(false);
  const [serverError, setServerError] = useState('');
  const [busy, setBusy] = useState(false);
  const slow = useSlowHint(busy);

  const errors = validate(v);
  const err = (k) => (showErrors ? errors[k] : undefined);
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));

  const toggleSkill = (key) =>
    setV((s) => {
      if (s.skills.includes(key)) return { ...s, skills: s.skills.filter((k) => k !== key) };
      if (s.skills.length >= SKILL_PICKS) return s;
      return { ...s, skills: [...s.skills, key] };
    });

  const setMember = (i, value) => setV((s) => ({ ...s, members: s.members.map((m, j) => (j === i ? value : m)) }));
  const addMember = () => setV((s) => (s.members.length >= MAX_MEMBERS ? s : { ...s, members: [...s.members, ''] }));
  const removeMember = (i) =>
    setV((s) => ({ ...s, members: s.members.length === 1 ? [''] : s.members.filter((_, j) => j !== i) }));

  async function submit(e) {
    e.preventDefault();
    setServerError('');
    if (Object.keys(errors).length) {
      setShowErrors(true);
      return;
    }
    setBusy(true);
    try {
      const data = await request('/api/teams', {
        method: 'POST',
        token,
        body: {
          name: v.name.trim(),
          category: v.category,
          project_title: v.title.trim(),
          description: v.description.trim(),
          ...(v.link.trim() ? { link: v.link.trim() } : {}),
          members: v.members.map((m) => m.trim()).filter(Boolean).map((name) => ({ name })),
          skill_tracks: v.skills,
          tool: v.tool,
        },
      });
      onCreated(data, { name: v.name.trim(), category: v.category });
    } catch (e2) {
      if (e2.status === 401) onUnauthorized();
      else setServerError(e2.message);
      setBusy(false);
    }
  }

  const categories = config.CATEGORIES || ['game', 'web', 'robotics'];
  const categoryTitle = { game: 'Game dev', web: 'Web dev', robotics: 'Robotics' };

  return (
    <form className="fsf-card" onSubmit={submit} noValidate aria-labelledby="fsf-form-title">
      <h2 id="fsf-form-title">Your team and project</h2>
      <p className="fsf-lede">You can register one team. Your team gets a page and a QR code once you submit.</p>

      <div className="fsf-field">
        <label htmlFor="fsf-name">Team name</label>
        <input id="fsf-name" value={v.name} onChange={set('name')} maxLength={80} aria-invalid={!!err('name')} aria-describedby="fsf-name-e" />
        <FieldError id="fsf-name-e">{err('name')}</FieldError>
      </div>

      <fieldset className="fsf-set">
        <legend>Category</legend>
        <div className="fsf-choices">
          {categories.map((c) => (
            <label key={c} className="fsf-choice">
              <input type="radio" name="category" value={c} checked={v.category === c} onChange={set('category')} />
              <span className="fsf-choice-title">{categoryTitle[c] || c}</span>
              <span className="fsf-choice-note">{CATEGORY_NOTES[c]}</span>
            </label>
          ))}
        </div>
        <FieldError>{err('category')}</FieldError>
      </fieldset>

      <div className="fsf-field">
        <label htmlFor="fsf-title">Project title</label>
        <input id="fsf-title" value={v.title} onChange={set('title')} maxLength={120} aria-invalid={!!err('title')} aria-describedby="fsf-title-e" />
        <FieldError id="fsf-title-e">{err('title')}</FieldError>
      </div>

      <div className="fsf-field">
        <label htmlFor="fsf-desc">What are you building?</label>
        <textarea id="fsf-desc" rows={5} value={v.description} onChange={set('description')} aria-invalid={!!err('description')} aria-describedby="fsf-desc-e" />
        <div className="fsf-meta">
          <FieldError id="fsf-desc-e">{err('description')}</FieldError>
          <span className="fsf-count" aria-live="polite">{v.description.trim().length}/2000</span>
        </div>
      </div>

      <div className="fsf-field">
        <label htmlFor="fsf-link">Project link <span className="fsf-opt">(optional)</span></label>
        <input id="fsf-link" type="url" inputMode="url" placeholder="https://" value={v.link} onChange={set('link')} aria-invalid={!!err('link')} aria-describedby="fsf-link-e" />
        <FieldError id="fsf-link-e">{err('link')}</FieldError>
      </div>

      <fieldset className="fsf-set">
        <legend>Other members</legend>
        <p className="fsf-hint">Names only, up to {MAX_MEMBERS}. You are added as the leader.</p>
        {v.members.map((m, i) => (
          <div className="fsf-member" key={i}>
            <input aria-label={`Member ${i + 1} name`} value={m} onChange={(e) => setMember(i, e.target.value)} maxLength={90} />
            <button type="button" className="fsf-btn fsf-btn--small fsf-btn--ghost" onClick={() => removeMember(i)} aria-label={`Remove member ${i + 1}`}>Remove</button>
          </div>
        ))}
        <FieldError>{err('members')}</FieldError>
        {v.members.length < MAX_MEMBERS && (
          <button type="button" className="fsf-btn fsf-btn--small fsf-btn--ghost" onClick={addMember}>Add a member</button>
        )}
      </fieldset>

      <fieldset className="fsf-set">
        <legend>Skill tracks</legend>
        <p className="fsf-hint">
          Pick exactly {SKILL_PICKS}. Each one is worth 5 points.{' '}
          <strong aria-live="polite">{v.skills.length} of {SKILL_PICKS} picked</strong>
        </p>
        <div className="fsf-chips">
          {Object.entries(config.SKILL_TRACKS || {}).map(([key, label]) => {
            const on = v.skills.includes(key);
            const locked = !on && v.skills.length >= SKILL_PICKS;
            return (
              <label key={key} className="fsf-chip" data-locked={locked}>
                <input type="checkbox" checked={on} disabled={locked} onChange={() => toggleSkill(key)} />
                <span>{label}</span>
              </label>
            );
          })}
        </div>
        <FieldError>{err('skills')}</FieldError>
      </fieldset>

      <fieldset className="fsf-set">
        <legend>Tool track</legend>
        <p className="fsf-hint">Pick 1. Worth 5 points.</p>
        <div className="fsf-chips">
          {Object.entries(config.TOOLS || {}).map(([key, label]) => (
            <label key={key} className="fsf-chip">
              <input type="radio" name="tool" value={key} checked={v.tool === key} onChange={set('tool')} />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <FieldError>{err('tool')}</FieldError>
      </fieldset>

      {showErrors && Object.keys(errors).length > 0 && (
        <Alert>Some answers need fixing. Check the messages above.</Alert>
      )}
      <Alert>{serverError}</Alert>
      <SlowHint show={slow} />
      <button className="fsf-btn" type="submit" disabled={busy}>{busy ? 'Registering…' : 'Register team'}</button>
    </form>
  );
}

/* ---------- Result and existing-team views ---------- */

function QrBlock({ teamId }) {
  const src = `${API}/api/teams/${teamId}/qr.png`;
  return (
    <div className="fsf-qr">
      <img src={src} width="200" height="200" alt="QR code that opens your team page" />
      <a href={src} target="_blank" rel="noreferrer">Open QR image</a>
    </div>
  );
}

function Created({ data, team, config }) {
  const [copied, setCopied] = useState(false);
  const link = data.team_url;
  const min = config?.MIN_VOTES?.[team.category];

  async function copy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the link is shown as text anyway */
    }
  }

  return (
    <section className="fsf-card" aria-labelledby="fsf-done-title">
      <h2 id="fsf-done-title">{team.name} is registered</h2>
      <p className="fsf-lede">Keep this QR code. Scanning it opens your team page.</p>
      <QrBlock teamId={data.team_id} />
      {link && (
        <div className="fsf-linkrow">
          <code>{link}</code>
          <button type="button" className="fsf-btn fsf-btn--small fsf-btn--ghost" onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button>
        </div>
      )}
      {min ? (
        <p className="fsf-note">
          Next: as team leader you rate other {team.category} projects. Rate at least {min} of them, or your team is disqualified.
        </p>
      ) : null}
    </section>
  );
}

function Existing({ team }) {
  return (
    <section className="fsf-card" aria-labelledby="fsf-have-title">
      <h2 id="fsf-have-title">Your team is already registered</h2>
      <p className="fsf-lede">{team.name} ({team.category}). Each leader can register one team.</p>
      <QrBlock teamId={team.id} />
    </section>
  );
}

/* ---------- Page ---------- */

export default function Form() {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [config, setConfig] = useState(null);
  const [user, setUser] = useState(null);
  const [created, setCreated] = useState(null);
  const [phase, setPhase] = useState('loading');
  const [bootError, setBootError] = useState('');
  const slow = useSlowHint(phase === 'loading');

  const boot = useCallback(async () => {
    setPhase('loading');
    setBootError('');
    try {
      const cfg = config || (await request('/api/config'));
      setConfig(cfg);
      if (!token) {
        setPhase('auth');
        return;
      }
      try {
        const { user: me } = await request('/api/auth/me', { token });
        setUser(me);
        setPhase('ready');
      } catch (e) {
        if (e.status !== 401) throw e;
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setPhase('auth');
      }
    } catch (e) {
      setBootError(e.message);
      setPhase('error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => { boot(); }, [boot]);

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
    setCreated(null);
  }

  let body;
  if (phase === 'loading') {
    body = (
      <section className="fsf-card" aria-busy="true">
        <p className="fsf-lede">Loading…</p>
        <SlowHint show={slow} />
      </section>
    );
  } else if (phase === 'error') {
    body = (
      <section className="fsf-card">
        <h2>We couldn't load the form</h2>
        <Alert>{bootError}</Alert>
        <button className="fsf-btn" type="button" onClick={boot}>Try again</button>
      </section>
    );
  } else if (phase === 'auth') {
    body = <AuthCard onToken={setToken} />;
  } else if (user && user.role !== 'leader') {
    body = (
      <section className="fsf-card">
        <h2>This form is for team leaders</h2>
        <p className="fsf-lede">You are logged in as {user.name} (jury). Jury members rate projects and do not register teams.</p>
      </section>
    );
  } else if (created) {
    body = <Created data={created.data} team={created.team} config={config} />;
  } else if (user?.team) {
    body = <Existing team={user.team} />;
  } else {
    body = (
      <TeamForm
        config={config}
        token={token}
        onCreated={(data, team) => setCreated({ data, team })}
        onUnauthorized={logout}
      />
    );
  }

  return (
    <div className="fsf">
      <header className="fsf-head">
        <p className="fsf-brand">Falling Sun 2026</p>
        <h1 className="fsf-title">Register your team</h1>
        <p className="fsf-hand">One leader, one form.</p>
      </header>
      {body}
      {user && (
        <p className="fsf-foot">
          Logged in as {user.name}. <button type="button" className="fsf-linkbtn" onClick={logout}>Log out</button>
        </p>
      )}
    </div>
  );
}