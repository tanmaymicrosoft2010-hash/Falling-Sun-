import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';
import { MagneticButton } from '../common/MagneticButton';
import { useRegistrationLock } from '../common/RegistrationLockModal';
import { Stamp } from '../Stamp';
import { Skewer } from '../Skewer';
import { Sparkle } from '../Sparkle';
import { EVENT_DATE_LABEL } from '../../data/event';

export const HeroSection: React.FC = () => {
  const { open: openRegLock } = useRegistrationLock();

  // Live system simulation clock (kept from the original hero)
  const [systemTime, setSystemTime] = useState<string>('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(
        now.toTimeString().split(' ')[0] +
          '.' +
          Math.floor(now.getMilliseconds() / 100)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToExplore = () => {
    const intro = document.getElementById('intro-section');
    if (intro) {
      intro.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-[3vw] pt-24 pb-10 select-none">
      {/* Full-viewport stamp with the engraved panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <Stamp className="flex min-h-[calc(100vh-210px)] mb-8">
          <div className="eng">
            {/* Twinkling four-point stars */}
            <Sparkle
              className="absolute z-[1]"
              style={{
                left: '4%',
                top: '8%',
                width: '40px',
                height: '40px',
                background: '#f3dfc6',
                animationDelay: '0s',
              }}
            />
            <Sparkle
              className="absolute z-[1]"
              style={{
                left: '90%',
                top: '6%',
                width: '56px',
                height: '56px',
                background: '#c9c93a',
                animationDelay: '0.7s',
              }}
            />
            <Sparkle
              className="absolute z-[1]"
              style={{
                left: '60%',
                top: '3%',
                width: '26px',
                height: '26px',
                background: '#f3dfc6',
                animationDelay: '1.3s',
              }}
            />
            <Sparkle
              className="absolute z-[1]"
              style={{
                left: '94%',
                top: '48%',
                width: '34px',
                height: '34px',
                background: '#c9c93a',
                animationDelay: '0.4s',
              }}
            />
            <Sparkle
              className="absolute z-[1]"
              style={{
                left: '3%',
                top: '52%',
                width: '28px',
                height: '28px',
                background: '#c9c93a',
                animationDelay: '1.8s',
              }}
            />

            {/* Tag line */}
            <span className="self-start bg-yellow text-ink font-bold tracking-[0.08em] px-3 py-1.5 border-2 border-ink -rotate-[1.5deg] text-xs sm:text-sm uppercase">
              HACKATHON · GAME • WEB • ROBOTICS
            </span>

            {/* Event date (single source: src/data/event.ts) */}
            <div className="self-start space-y-2">
              <span className="font-mono text-[10px] text-cream/70 tracking-[0.2em] uppercase">
                EVENT DATES
              </span>
              <span className="font-mono text-xl sm:text-2xl font-black text-yellow tracking-[0.15em] uppercase">
                {EVENT_DATE_LABEL}
              </span>
            </div>

            {/* Headline */}
            <h1 className="rough font-display font-black uppercase text-cream leading-[0.92] -rotate-2 text-[clamp(3.6rem,15vw,11rem)] break-word m-0">
              Young builders
              <br />
              turn ideas
              <span className="block text-yellow">into reality.</span>
            </h1>

            {/* Nimbu-mirchi skewer */}
            <Skewer />

            {/* Denomination */}
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 w-full">
              <div className="flex items-baseline gap-3 font-display font-black">
                <b className="text-[clamp(2rem,7vw,3.6rem)] [-webkit-text-stroke:2px_#f3dfc6] text-transparent leading-none">
                  12H+12H
                </b>
                <span className="text-cream text-[clamp(1.2rem,3vw,2rem)] leading-none uppercase">
                  2 DAYS
                </span>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1 text-cream text-xs sm:text-sm font-bold tracking-widest uppercase">
                <span>BUILD • BREAK • CREATE</span>
                <span>{eventConfig.statusText}</span>
              </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-cream text-ink text-xs font-bold px-3 py-1 border-2 border-ink -rotate-1 uppercase">
                ZERO ENTRY FEE
              </span>
              <span className="bg-cream text-ink text-xs font-bold px-3 py-1 border-2 border-ink -rotate-1 uppercase">
                EDITION // 2026 · 28°32'N 77°14'E · V2.6
              </span>
            </div>

            {/* System clock */}
            <div className="text-cream/90 text-[11px] font-bold tracking-widest uppercase">
              SYS CLOCK: {systemTime}
            </div>
          </div>
        </Stamp>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <div className="-rotate-2">
          <MagneticButton
            onClick={openRegLock}
            dataCursor="cta"
            dataCursorLabel="JOIN"
            text="REGISTER"
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="px-8 py-3 font-display text-lg font-black tracking-wide"
            variant="primary"
          />
        </div>

        <div className="rotate-1">
          <MagneticButton
            onClick={scrollToExplore}
            dataCursor="link"
            text="SCROLL TO EXPLORE"
            icon={<ArrowDown className="w-4 h-4" />}
            className="px-6 py-2.5 font-display text-base font-black tracking-wide"
            variant="outline"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
