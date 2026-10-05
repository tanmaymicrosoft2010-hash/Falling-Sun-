import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';
import { GameDevVisual, WebDevVisual, RoboticsVisual } from './TrackVisuals';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { MaskedReveal, InteractiveRollText } from '../common/AnimatedText';
import { useRegistrationLock } from '../common/RegistrationLockModal';

export const TrackHorizontal: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const { open: openRegLock } = useRegistrationLock();
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const track = eventConfig.tracks[activeTrack];

  const visuals: Record<string, React.ReactNode> = {
    'game-development': <GameDevVisual key="gamedev" />,
    'web-development': <WebDevVisual key="webdev" />,
    'robotics': <RoboticsVisual key="robotics" />,
  };

  const nextTrack = () => {
    setActiveTrack((prev) => (prev + 1) % eventConfig.tracks.length);
  };

  const prevTrack = () => {
    setActiveTrack((prev) => (prev - 1 + eventConfig.tracks.length) % eventConfig.tracks.length);
  };

  // Keyboard arrow listener when user is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextTrack();
      if (e.key === 'ArrowLeft') prevTrack();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-10 select-none">
      {/* Top Track Switcher Tabs (Falling Sun Editorial Pill Design) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b-[3px] border-cream/40">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-cream border-2 border-ink shadow-card">
          {eventConfig.tracks.map((t, idx) => {
            const isActive = activeTrack === idx;
            const isTabHovered = hoveredTab === idx;
            return (
              <motion.button
                key={t.id}
                type="button"
                onClick={() => setActiveTrack(idx)}
                onMouseEnter={() => setHoveredTab(idx)}
                onMouseLeave={() => setHoveredTab(null)}
                whileTap={{ scale: 0.94 }}
                data-cursor="link"
                className={`relative px-5 py-2 font-display text-sm font-black tracking-wide transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink hover:bg-black/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="track-tab-pill"
                    className="absolute inset-0 bg-yellow"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.number}</span>
                <span className="relative z-10 hidden sm:inline">
                  <InteractiveRollText
                    text={t.title}
                    isHovered={isTabHovered || isActive}
                    activeColor={isActive ? "text-ink" : "text-brown"}
                  />
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Navigation Arrows & Progress */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-ink">
            <span className="bg-cream text-bg border-2 border-ink px-2 py-0.5 font-black text-sm">{track.number}</span>
            <span className="text-cream/70 mx-1.5 font-bold">/</span>
            <span className="font-bold">
              {String(eventConfig.tracks.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={prevTrack}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.88 }}
              data-cursor="link"
              className="w-10 h-10 bg-cream border-2 border-ink flex items-center justify-center text-ink hover:bg-yellow hover:text-ink transition-all shadow-[3px_3px_0_#1d1210]"
              aria-label="Previous Track"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              type="button"
              onClick={nextTrack}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.88 }}
              data-cursor="link"
              className="w-10 h-10 bg-cream border-2 border-ink flex items-center justify-center text-ink hover:bg-yellow hover:text-ink transition-all shadow-[3px_3px_0_#1d1210]"
              aria-label="Next Track"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Track Interactive Chapter (Seamless Spring Slide Animation) */}
      <div className="relative pt-12 min-h-[580px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={track.id}
            initial={{ opacity: 0, x: 40, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column: Track Intelligence */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs text-cream font-bold">
                <span className="font-black text-3xl text-cream">{track.number}</span>
                <span className="text-ink">//</span>
                <span className="tracking-widest uppercase">DISCIPLINE BLUEPRINT</span>
              </div>

              <h3 className="font-display text-4xl sm:text-5xl font-black text-cream tracking-tight break-word">
                <MaskedReveal text={track.title} />
              </h3>

              <div className="text-xs text-ink font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cream" />
                <span>{track.tagline}</span>
              </div>

              <p className="text-cream text-base lg:text-lg leading-relaxed font-medium">
                {track.description}
              </p>

              {/* Evaluation Focus Areas */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] text-ink uppercase tracking-widest font-bold">
                  // BENCHMARK CRITERIA
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {track.focusAreas.map((area, idx) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, x: 3 }}
                      transition={{ delay: 0.08 + idx * 0.04 }}
                      className="flex items-center gap-2.5 text-xs text-ink font-medium p-2.5 bg-cream border-2 border-ink cursor-default"
                    >
                      <CheckCircle2 className="w-4 h-4 text-reddark shrink-0" />
                      <span>{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Suggested Technology Tools */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] text-ink uppercase tracking-widest font-bold">
                  // RECOMMENDED ENGINES & STACKS
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  {track.tools.map((tool, idx) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ delay: 0.15 + idx * 0.03 }}
                      className="px-3 py-1.5 bg-cream border-2 border-ink text-ink font-bold hover:bg-yellow transition-colors cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Link with Cascading Animated Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <MagneticButton
                  onClick={openRegLock}
                  text="ENROLL IN THIS TRACK"
                  icon={<ChevronRight className="w-4 h-4" />}
                  className="px-7 py-3.5 font-mono text-xs font-bold tracking-wider"
                  variant="primary"
                />

                <MagneticButton
                  to="/tracks"
                  text="FULL SPECIFICATION"
                  icon={<ChevronRight className="w-4 h-4" />}
                  className="px-6 py-3 font-mono text-xs font-bold tracking-wider"
                  variant="outline"
                />
              </div>
            </div>

            {/* Right Column: Interactive Track Visual */}
            <div className="lg:col-span-6">
              {visuals[track.id]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
