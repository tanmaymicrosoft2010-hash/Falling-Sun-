import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { GameDevVisual, WebDevVisual, RoboticsVisual, CreativeSkillsVisual } from '../components/tracks/TrackVisuals';
import { eventConfig } from '../config/eventConfig';
import { WhatsAppCTA } from '../components/common/WhatsAppCTA';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';
import { StampCard } from '../components/StampCard';
import { useRegistrationLock } from '../components/common/RegistrationLockModal';

export const TracksPage: React.FC = () => {
  const { open: openRegLock } = useRegistrationLock();
  const visuals: Record<string, React.ReactNode> = {
    'game-development': <GameDevVisual key="game" />,
    'web-development': <WebDevVisual key="web" />,
    'robotics': <RoboticsVisual key="robotics" />,
  };
  const miniVisuals: Record<string, React.ReactNode> = {
    'creative-skills': <CreativeSkillsVisual key="creative-skills" />,
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-bg min-h-screen space-y-24 text-cream">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <SectionHeader
          number="02"
          category="COMPETITION ARENAS"
          title="THREE PATHWAYS. INFINITE OUTCOMES."
          subtitle="Select your focus track. Whether your craft is graphics pipelines, distributed web applications, or kinetic robotics, Falling Sun provides the infrastructure to build without limits."
        />

        {/* Detailed Track Sections with 3D Perspective Entrance */}
        <div className="space-y-20 cards" style={{ perspective: 1200 }}>
          {eventConfig.tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative transition-all"
            >
              <StampCard
                title={track.title}
                className="p-8 sm:p-12 md:p-16 overflow-hidden"
              >
              {/* Top indicator */}
              <div className="flex items-center justify-end font-mono text-xs text-ink pb-8 border-b-2 border-ink/20 mb-10">
                <span className="text-ink-muted hidden sm:inline uppercase tracking-widest font-semibold">
                  TRACK SPECIFICATION
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Information Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="font-mono text-xs text-reddark uppercase tracking-wider font-bold">
                    {track.tagline}
                  </div>

                  <p className="text-ink-muted text-sm sm:text-base leading-relaxed font-medium">
                    {track.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="space-y-3 pt-2">
                    <div className="font-mono text-xs text-ink-muted uppercase tracking-widest font-bold">
                      // EVALUATION FOCUS AREAS
                    </div>
                    <div className="space-y-2">
                      {track.focusAreas.map((area) => (
                        <div key={area} className="flex items-start gap-3 text-xs sm:text-sm text-ink font-sans font-medium">
                          <CheckCircle2 className="w-4 h-4 text-reddark shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Stack */}
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-xs text-ink-muted uppercase tracking-widest font-bold">
                      // SUGGESTED ENGINES & STACKS
                    </div>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {track.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 bg-yellow/40 border-2 border-ink text-ink font-bold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <MagneticButton
                      onClick={openRegLock}
                      text="ENROLL IN THIS TRACK"
                      icon={<ArrowUpRight className="w-4 h-4" />}
                      className="px-6 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider"
                      variant="primary"
                    />
                  </div>
                </div>

                {/* Interactive Visual Column */}
                <div className="lg:col-span-6">
                  {visuals[track.id]}
                </div>
              </div>
              </StampCard>
            </motion.div>
          ))}
        </div>

        {/* Mini-Tracks Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold">
              SIDE QUESTS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-cream tracking-tight">
              MINI-TRACKS
            </h2>
            <p className="text-cream/80 text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed font-medium">
              Smaller arenas for craft-first builders. Creative Skills lives here now — with more mini-tracks on the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
            {eventConfig.miniTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative transition-all"
              >
                <StampCard
                  title={track.title}
                  className="p-5 sm:p-6 overflow-hidden"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-ink pb-4 border-b-2 border-ink/20 mb-5">
                    <span className="bg-ink text-cream px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
                      MINI-TRACK
                    </span>
                    <span className="text-ink-muted uppercase tracking-widest font-semibold">
                      SPEC {track.number}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="font-mono text-[10px] text-reddark uppercase tracking-wider font-bold">
                      {track.tagline}
                    </div>

                    <p className="text-ink-muted text-xs leading-relaxed font-medium">
                      {track.description}
                    </p>

                    <div className="space-y-2">
                      <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest font-bold">
                        // FOCUS AREAS
                      </div>
                      <div className="space-y-1.5">
                        {track.focusAreas.map((area) => (
                          <div key={area} className="flex items-start gap-2 text-[11px] text-ink font-sans font-medium">
                            <CheckCircle2 className="w-3 h-3 text-reddark shrink-0 mt-0.5" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest font-bold">
                        // STACKS
                      </div>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {track.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-yellow/40 border-2 border-ink text-ink font-bold"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {miniVisuals[track.id] && (
                      <div className="scale-[0.9] origin-center">
                        {miniVisuals[track.id]}
                      </div>
                    )}

                    <div className="pt-2">
                      <MagneticButton
                        onClick={openRegLock}
                        text="ENROLL IN MINI-TRACK"
                        icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                        className="px-5 py-2.5 rounded-full font-mono text-[10px] font-bold tracking-wider"
                        variant="primary"
                      />
                    </div>
                  </div>
                </StampCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WhatsApp Callout */}
        <WhatsAppCTA
          title="TRACK PROBLEM STATEMENTS DROP ON WHATSAPP"
          subtitle="Specific prompt themes and mentor office hours for each track will be released to the WhatsApp cohort prior to kickoff."
        />
      </div>
    </div>
  );
};
