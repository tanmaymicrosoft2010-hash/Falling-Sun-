import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code, Cpu, Gamepad2 } from 'lucide-react';
import { MaskedReveal, InteractiveRollText } from '../common/AnimatedText';
import { MagneticButton } from '../common/MagneticButton';

const statementLines = [
  "FALLING SUN",
  "IS WHERE CREATORS",
  "BUILDERS TURN",
  "IDEAS INTO REALITY.",
];

interface DisciplineBadgeProps {
  icon: React.ReactNode;
  title: string;
  trackNumber: string;
  delay: number;
}

const DisciplineBadge: React.FC<DisciplineBadgeProps> = ({ icon, title, trackNumber, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 35, rotateY: 10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 6, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-5 bg-cream border-2 border-ink shadow-card flex items-center justify-between hover:shadow-[8px_8px_0_#1d1210] transition-all cursor-pointer will-change-transform"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: isHovered ? 12 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-9 h-9 bg-bg border-2 border-ink flex items-center justify-center text-cream"
        >
          {icon}
        </motion.div>
        <InteractiveRollText
          text={title}
          isHovered={isHovered}
          activeColor="text-brown"
          className="text-ink font-extrabold tracking-wide text-xs"
        />
      </div>
      <span className="text-ink font-black text-[11px] bg-yellow px-2 py-0.5 border-2 border-ink -rotate-1">
        {trackNumber}
      </span>
    </motion.div>
  );
};

export const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxBg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="intro-section"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 md:px-12 bg-bg overflow-hidden"
    >
      {/* Background Parallax Watermark on Scroll */}
      <motion.div
        style={{ x: parallaxBg }}
        className="absolute bottom-10 right-0 whitespace-nowrap font-display font-black text-[18vw] text-ink/25 select-none pointer-events-none"
      >
        PHILOSOPHY // 01
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Number & Tag */}
        <div className="flex items-center gap-4 text-xs mb-8">
          <span className="bg-cream text-bg border-2 border-ink px-2 py-0.5 font-black text-sm">01</span>
          <span className="text-ink font-bold">//</span>
          <span className="tracking-widest uppercase font-bold text-ink">MANIFESTO & PHILOSOPHY</span>
        </div>

        {/* Huge Line-by-Line Editorial Headline */}
        <div className="space-y-1 md:space-y-2 mb-12">
          {statementLines.map((line, index) => (
            <div key={line} className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] break-word ${
                  index === 0
                    ? 'inline-block bg-cream text-bg px-3 -rotate-1 w-fit'
                    : 'text-cream'
                }`}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Animated Horizontal Growing Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-[3px] bg-cream/60 origin-left mb-12"
        />

        {/* Secondary Paragraph & Quick Track Stat Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-cream text-lg md:text-xl leading-relaxed font-bold">
              <MaskedReveal text="A two-day hackathon where ambitious builders assemble to engineer, experiment, tackle authentic engineering challenges, and ship working prototypes." />
            </p>
            <p className="text-cream text-sm md:text-base leading-relaxed font-medium">
              No hollow slide decks or vaporware. Whether it’s physics engines in Godot, real-time reactive websockets in React, or autonomous telemetry circuits on ESP32, Falling Sun celebrates the craft of shipping real systems.
            </p>
            <div className="pt-2">
              <MagneticButton
                to="/about"
                text="READ FULL EVENT MANIFESTO"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="px-6 py-3 font-mono text-xs font-bold tracking-wider"
                variant="primary"
              />
            </div>
          </motion.div>

          {/* 3 Discipline Badges on the right with 3D Tilt Scroll entrance & character wave roll */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 font-mono text-xs">
            <DisciplineBadge
              icon={<Gamepad2 className="w-4 h-4" />}
              title="GAME DEVELOPMENT"
              trackNumber="TRACK 01"
              delay={0.2}
            />
            <DisciplineBadge
              icon={<Code className="w-4 h-4" />}
              title="WEB DEVELOPMENT"
              trackNumber="TRACK 02"
              delay={0.3}
            />
            <DisciplineBadge
              icon={<Cpu className="w-4 h-4" />}
              title="ROBOTICS"
              trackNumber="TRACK 03"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
