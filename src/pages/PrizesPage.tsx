import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { PrizeGrid } from '../components/prizes/PrizeGrid';
import { Target, Wrench, Gavel, Cpu, Plus } from 'lucide-react';

const rayGame = [
  { label: 'Looks', pts: 5 },
  { label: 'Replayability', pts: 5 },
  { label: 'Audio', pts: 5 },
  { label: 'Fun', pts: 5 },
];

const rayWeb = [
  { label: 'UX', pts: 5 },
  { label: 'Frontend', pts: 5 },
  { label: 'Backend', pts: 5 },
  { label: 'Ideation', pts: 5 },
];

const skillTrials = [
  { name: 'Robotics', detail: 'ESP32 chip integration or simulation' },
  { name: 'Video Editing', detail: 'Real editing-software product video — no effortless AI clips' },
  { name: '3D Design', detail: 'Usable Blender 3D asset + timelapse (tutorial on FALLINGSUN channel)' },
  { name: 'Graphic Design', detail: 'Poster made in GIMP/Photoshop without AI + timelapse' },
  { name: 'Pixel Art', detail: 'Animated pixel art assets for the game + timelapse' },
  { name: 'AI/ML', detail: 'Integrate AI into your product' },
];

const toolTrials = ['Ziva', 'Render deployment', 'Cloudflare backend', 'GitHub best practices', 'Mini Micro'];

export const PrizesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-bg min-h-screen space-y-24 text-cream">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <SectionHeader
          number="04"
          category="RECOGNITION & REWARDS"
          title="THE REWARD ARCHITECTURE"
          subtitle="Honoring exceptional technical depth, uncompromised design execution, and raw ingenuity across all three competition disciplines."
        />

        {/* HOW SCORING WORKS */}
        <section className="space-y-8">
          <div className="font-mono text-xs text-cream/70 tracking-widest uppercase font-bold">
            // HOW SCORING WORKS
          </div>

          {/* Formula Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 bg-cream text-ink border-2 border-ink shadow-card text-center space-y-2"
          >
            <span className="font-mono text-[11px] text-reddark uppercase tracking-widest font-bold">
              TOTAL SCORE =
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-display text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
              <span className="px-2 py-0.5 bg-yellow border-2 border-ink -rotate-1">Ray Score</span>
              <Plus className="w-5 h-5 text-reddark shrink-0" />
              <span className="px-2 py-0.5 bg-cream text-bg border-2 border-ink rotate-1">Trial Points</span>
              <Plus className="w-5 h-5 text-reddark shrink-0" />
              <span className="px-2 py-0.5 bg-bg text-cream border-2 border-ink -rotate-1">Judges Points</span>
            </div>
          </motion.div>

          {/* Three Scoring Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Ray Score */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 bg-cream border-2 border-ink shadow-card space-y-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-xs text-ink uppercase tracking-widest font-bold">
                  <Target className="w-4 h-4 text-reddark" />
                  Ray Score
                </span>
                <span className="px-2.5 py-1 bg-yellow border-2 border-ink font-mono text-[11px] text-ink font-bold">
                  MAX 20
                </span>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-[11px] text-reddark uppercase tracking-widest font-bold">
                  Game
                </div>
                <ul className="space-y-1.5">
                  {rayGame.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-3 text-sm text-ink font-sans font-medium border-b border-ink/10 pb-1.5"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-ink-muted font-bold">{item.pts} pts</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-1">
                <div className="font-mono text-[11px] text-reddark uppercase tracking-widest font-bold">
                  Web / Native Software
                </div>
                <ul className="space-y-1.5">
                  {rayWeb.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-3 text-sm text-ink font-sans font-medium border-b border-ink/10 pb-1.5"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-ink-muted font-bold">{item.pts} pts</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 2. Trials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 bg-cream border-2 border-ink shadow-card space-y-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-xs text-ink uppercase tracking-widest font-bold">
                  <Wrench className="w-4 h-4 text-reddark" />
                  Trials
                </span>
                <span className="px-2.5 py-1 bg-yellow border-2 border-ink font-mono text-[11px] text-ink font-bold">
                  OPTIONAL
                </span>
              </div>

              <p className="text-ink-muted text-xs leading-relaxed font-sans font-medium">
                Per team, a maximum of <strong className="text-ink">2 skill-based</strong> trials and{' '}
                <strong className="text-ink">1 tool-based</strong> trial can be attempted.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-reddark uppercase tracking-widest font-bold">
                  <span>Skill-Based Trials</span>
                  <span className="text-ink">10 PTS EACH</span>
                </div>
                <p className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                  Checked by 2 volunteers, 1–10 stars each
                </p>
                <ol className="space-y-1.5">
                  {skillTrials.map((t, i) => (
                    <li key={t.name} className="text-xs text-ink font-sans font-medium leading-snug">
                      <span className="font-mono font-bold text-reddark mr-1.5">{i + 1}.</span>
                      <strong>{t.name}:</strong> {t.detail}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-2 pt-1 border-t-2 border-ink/15">
                <div className="flex items-center justify-between font-mono text-[11px] text-reddark uppercase tracking-widest font-bold">
                  <span>Tool-Based Trials</span>
                  <span className="text-ink">FIXED 5 PTS</span>
                </div>
                <p className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                  Checked by 1 volunteer
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {toolTrials.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-yellow/40 border-2 border-ink text-ink font-mono text-[10px] font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 3. Judges Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 bg-cream border-2 border-ink shadow-card space-y-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-xs text-ink uppercase tracking-widest font-bold">
                  <Gavel className="w-4 h-4 text-reddark" />
                  Judges Points
                </span>
                <span className="px-2.5 py-1 bg-yellow border-2 border-ink font-mono text-[11px] text-ink font-bold">
                  MAX 25
                </span>
              </div>

              <p className="text-ink-muted text-sm leading-relaxed font-sans font-medium">
                Assessed by our invited judges during the live demo and Q&amp;A — how well you explain the
                build, defend the trade-offs, and show it actually working.
              </p>

              <div className="p-4 bg-black/5 border-2 border-ink/40 space-y-2">
                <div className="font-mono text-[11px] text-ink uppercase tracking-widest font-bold">
                  Hardware &amp; Hardware-Related Categories
                </div>
                <div className="flex items-start gap-2 text-xs text-ink font-sans font-medium">
                  <Cpu className="w-4 h-4 text-reddark shrink-0 mt-0.5" />
                  <span>Best Engineering &amp; Tinkering</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-ink font-sans font-medium">
                  <Cpu className="w-4 h-4 text-reddark shrink-0 mt-0.5" />
                  <span>Best Technical Design &amp; Integration</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-ink font-sans font-medium">
                  <Cpu className="w-4 h-4 text-reddark shrink-0 mt-0.5" />
                  <span>Best Functional Prototype along software integration</span>
                </div>
              </div>

              <p className="text-ink-muted text-xs leading-relaxed font-sans font-medium border-t-2 border-ink/15 pt-4">
                We will try to put real-life tools in front of you, but hardware entries can also be judged
                on schematics, tinkering, and simulation ideas — showing that the code logic works is enough,
                a full working simulation is not required.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Prize Grid Component */}
        <PrizeGrid />
      </div>
    </div>
  );
};
