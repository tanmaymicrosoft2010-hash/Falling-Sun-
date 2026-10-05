import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { eventConfig } from '../config/eventConfig';
import { CheckCircle2, ShieldCheck, MessageSquare, Lock, Clock, PartyPopper, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';
import { WhatsAppCTA } from '../components/common/WhatsAppCTA';
import { MaskedReveal, InteractiveRollText } from '../components/common/AnimatedText';
import { useCountdown, CountdownGrid } from '../components/common/CountdownTimer';
import { isRegistrationOpen, getRegistrationTarget } from '../utils/registration';

export const RegisterPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('game-development');
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const timeLeft = useCountdown();
  const registrationOpen = isRegistrationOpen();
  const opensLabel = new Date(eventConfig.registrationOpensAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-bg min-h-screen space-y-24 text-cream">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <SectionHeader
          number="07"
          category="REGISTRATION PORTAL"
          title="APPLICATION ENROLLMENT"
          subtitle="Submit your application to participate in the Falling Sun 2026 cohort. Duo creators and teams of up to 4 members are welcome."
        />

        {/* Hero Card: READY TO BUILD? (Light Theme) */}
        <div className="relative p-8 sm:p-12 md:p-16 bg-cream text-ink border-2 border-ink shadow-card overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Details */}
            <div className="lg:col-span-7 space-y-8">
              <div className="font-mono text-xs text-reddark uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green animate-ping" />
                <span>{registrationOpen ? 'APPLICATIONS OPEN NOW' : 'APPLICATIONS OPENING SOON'}</span>
              </div>

              <div className="space-y-2 min-w-0">
                <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight leading-[0.95] break-word">
                  <MaskedReveal text="READY TO BUILD?" highlightWords={["BUILD?"]} highlightClass="text-bg" />
                </div>
                <p className="font-display text-xl sm:text-2xl text-ink font-bold pt-2">
                  FALLING SUN // HACKATHON 2026
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="p-6 bg-ink border-2 border-ink">
                <div className="flex items-center gap-2 font-mono text-xs text-cream/80 tracking-widest uppercase mb-4">
                  {registrationOpen ? (
                    <PartyPopper className="w-3.5 h-3.5 text-yellow" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-yellow" />
                  )}
                  <span>{registrationOpen ? 'REGISTRATION LIVE' : 'REGISTRATION COUNTDOWN'}</span>
                </div>

                {registrationOpen ? (
                  <div className="space-y-4">
                    <p className="text-cream/70 text-sm font-sans">
                      The application portal is open. Submit your entry — duo creators and teams of up to 4 members.
                    </p>
                    <a
                      href={getRegistrationTarget()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-yellow text-ink border-2 border-ink shadow-btn font-mono text-xs font-bold tracking-wider hover:shadow-[7px_7px_0_#1d1210] transition-shadow"
                    >
                      <span>START REGISTRATION</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <>
                    <CountdownGrid timeLeft={timeLeft} variant="dark" />
                    <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-cream/80">
                      <Clock className="w-3.5 h-3.5 text-yellow" />
                      <span>{opensLabel.toUpperCase()} • 12:00 AM</span>
                    </div>
                  </>
                )}
              </div>

              {/* Event Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-ink">
                <div className="p-4 bg-black/5 border-2 border-ink/40 space-y-1">
                  <span className="text-ink-muted uppercase font-bold text-[10px]">DURATION</span>
                  <div className="text-ink font-black text-sm">{eventConfig.format}</div>
                </div>

                <div className="p-4 bg-black/5 border-2 border-ink/40 space-y-1">
                  <span className="text-ink-muted uppercase font-bold text-[10px]">ELIGIBILITY</span>
                  <div className="text-reddark font-black text-sm">ALL SKILL LEVELS</div>
                </div>

                <div className="p-4 bg-black/5 border-2 border-ink/40 space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-ink-muted uppercase font-bold text-[10px]">COST</span>
                  <div className="text-ink font-black text-sm">100% FREE</div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-ink font-sans font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-reddark shrink-0" />
                  <span>Duo or team registration (up to 4 members)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-reddark shrink-0" />
                  <span>Choose from Game Dev, Web Dev, or Robotics tracks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-reddark shrink-0" />
                  <span>Full access to mentors, hardware power rails, and workshops</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <MagneticButton
                  href={eventConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  text="JOIN WHATSAPP FOR UPDATES"
                  icon={<MessageSquare className="w-4 h-4 text-ink" />}
                  className="px-9 py-4 font-mono text-xs font-bold tracking-wider"
                  variant="primary"
                />
              </div>
            </div>

            {/* Right Column: Track Selector with High Motion */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-cream border-2 border-ink shadow-[6px_6px_0_#1d1210] space-y-6">
              <div className="font-mono text-xs text-ink-muted uppercase tracking-widest flex items-center justify-between font-bold">
                <span>SELECT PREFERRED TRACK</span>
                <span className="text-reddark">
                  {String(eventConfig.tracks.length).padStart(2, '0')} OPTIONS
                </span>
              </div>

              <div className="space-y-3">
                {eventConfig.tracks.map((track) => {
                  const isSelected = selectedTrack === track.id;
                  const isHovered = hoveredTrack === track.id;

                  return (
                    <motion.button
                      key={track.id}
                      type="button"
                      onClick={() => setSelectedTrack(track.id)}
                      onMouseEnter={() => setHoveredTrack(track.id)}
                      onMouseLeave={() => setHoveredTrack(null)}
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.96 }}
                      className={`w-full p-4 border-2 text-left transition-all duration-200 cursor-pointer will-change-transform ${
                        isSelected
                          ? 'bg-yellow border-ink shadow-[4px_4px_0_#1d1210] text-ink'
                          : 'bg-black/5 border-ink/30 hover:border-ink text-ink-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs mb-1">
                        <span className="text-reddark font-black">{track.number}</span>
                        <span className={`text-[10px] uppercase font-bold ${isSelected ? 'text-reddark' : 'text-ink-muted'}`}>
                          {isSelected ? '● SELECTED' : 'CLICK TO SELECT'}
                        </span>
                      </div>
                      <div className="font-display text-lg font-black text-ink">
                        <InteractiveRollText
                          text={track.title}
                          isHovered={isHovered || isSelected}
                          activeColor={isSelected ? "text-reddark" : "text-ink"}
                        />
                      </div>
                      <p className="text-ink-muted text-xs mt-1 font-sans line-clamp-2 font-medium">
                        {track.tagline}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {/* Status Note */}
              <div className="p-4 bg-black/5 border-2 border-ink/40 font-mono text-[11px] text-ink-muted flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-reddark shrink-0" />
                <span>You can switch or adjust track preferences on event day.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Official Registration Form */}
        <div className="relative border-2 border-ink bg-cream text-ink shadow-card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6 border-b-2 border-ink bg-yellow">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70 font-bold">
                OFFICIAL FORM // FALLING SUN 2026
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black leading-none">
                FILL THE REGISTRATION FORM
              </h2>
            </div>
            <a
              href={getRegistrationTarget()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-cream border-2 border-ink shadow-btn font-mono text-[11px] font-bold tracking-wider hover:shadow-[6px_6px_0_#1d1210] transition-shadow"
            >
              <span>OPEN IN NEW TAB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="p-3 sm:p-5">
            <iframe
              src={getRegistrationTarget()}
              title="Falling Sun 2026 Registration Form"
              loading="lazy"
              allow="clipboard-write; camera; microphone"
              className="block w-full h-[1000px] border-2 border-ink bg-white"
            />
          </div>

          <div className="p-4 border-t-2 border-ink bg-ink flex items-center gap-2 font-mono text-[11px] text-cream/80 tracking-wide">
            <ShieldCheck className="w-4 h-4 text-yellow shrink-0" />
            <span>FORM HOSTED SECURELY ON FILLOUT • YOUR DATA STAYS PRIVATE</span>
          </div>
        </div>

        {/* WhatsApp Callout */}
        <WhatsAppCTA
          title="INVITE CODE & ACCEPTANCE CONFIRMATION"
          subtitle="Once your registration application is received, team formation and confirmation passcodes will be coordinated via WhatsApp."
        />
      </div>
    </div>
  );
};
