import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';
import { MagneticButton } from './MagneticButton';
import { InteractiveRollText } from './AnimatedText';

const FooterLink: React.FC<{ to: string; number?: string; label: string; highlight?: boolean }> = ({
  to,
  number,
  label,
  highlight = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        to={to}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-2 group cursor-pointer"
      >
        {number && (
          <span className={`text-[11px] font-bold ${highlight ? 'text-yellow' : 'text-cream/70'}`}>
            {number}
          </span>
        )}
        <InteractiveRollText
          text={label}
          isHovered={isHovered}
          activeColor="text-yellow"
          className={`text-xs font-bold ${highlight ? 'font-black text-yellow' : 'text-cream group-hover:text-yellow'}`}
        />
      </Link>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-ink text-cream border-t-[3px] border-cream pt-20 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Top CTA Bar: WhatsApp Updates */}
        <div className="p-8 md:p-12 bg-cream text-ink border-2 border-ink flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-20 shadow-[6px_6px_0_#e8232b]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-brown tracking-widest uppercase font-bold">
              <span className="h-2 w-2 bg-green animate-pulse" />
              <span>OFFICIAL DISPATCH SYSTEM</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-black text-ink break-word">
              STAY INFORMED VIA WHATSAPP
            </h3>
            <p className="text-ink-muted text-sm max-w-lg font-sans font-medium">
              Schedule updates, mentor lineups, venue directions, and prize drops will be published directly to our official WhatsApp channel.
            </p>
          </div>

          <MagneticButton
            href={eventConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            text="GET UPDATES ON WHATSAPP"
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="px-7 py-3.5 font-mono text-xs font-bold tracking-wider"
            variant="primary"
          />
        </div>

        {/* Middle: Brand, Statement, Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-cream/30">
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/logo_transparent.webp"
                alt="Falling Sun Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-display text-2xl font-black tracking-widest text-cream">
                FALLING SUN
              </span>
            </div>

            <div className="space-y-2">
              <div className="font-display text-3xl md:text-4xl font-black tracking-tight text-cream leading-tight break-word">
                BUILD SOMETHING<br />
                <span className="text-yellow">WORTH REMEMBERING.</span>
              </div>
              <p className="text-xs text-cream/80 max-w-md pt-2 font-sans font-medium">
                A two-day hackathon where ambitious builders turn raw imagination into playable games, distributed web applications, and autonomous robotics.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-cream/80 pt-2">
              <Terminal className="w-4 h-4 text-yellow" />
              <span>{eventConfig.format}</span>
              <span className="mx-2 text-cream/30">|</span>
              <span className="font-semibold text-cream">{eventConfig.edition}</span>
            </div>
          </div>

          {/* Navigation Links with Interactive Character Rolls */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs text-yellow tracking-widest uppercase font-bold">
              // SITE INDEX
            </div>
            <ul className="space-y-2.5 text-xs text-cream/80">
              <FooterLink to="/" number="00" label="HOME" />
              <FooterLink to="/about" number="01" label="ABOUT" />
              <FooterLink to="/tracks" number="02" label="TRACKS" />
              <FooterLink to="/schedule" number="03" label="SCHEDULE" />
              <FooterLink to="/prizes" number="04" label="PRIZES" />
              <FooterLink to="/team" number="05" label="TEAM" />
              <FooterLink to="/faq" number="06" label="FAQ" />
              <FooterLink to="/register" number="07" label="REGISTER" highlight />
            </ul>
          </div>

          {/* Tracks & Community Links with Interactive Character Rolls */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs text-yellow tracking-widest uppercase font-bold">
              // DISCIPLINES
            </div>
            <ul className="space-y-2.5 text-xs text-cream/80">
              <FooterLink to="/tracks" number="01" label="GAME DEVELOPMENT" />
              <FooterLink to="/tracks" number="02" label="WEB DEVELOPMENT" />
              <FooterLink to="/tracks" number="03" label="ROBOTICS" />
            </ul>

            <div className="text-xs text-yellow tracking-widest uppercase pt-6 font-bold">
              // CHANNELS
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-cream/80">
              <a
                href={eventConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors underline-offset-4 hover:underline"
              >
                WHATSAPP
              </a>
              <span className="text-cream/30">/</span>
              <a
                href={eventConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition-colors underline-offset-4 hover:underline"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Giant Typographic Brand Watermark (Light Theme) */}
        <div className="pt-10 select-none pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display font-black text-center text-[13vw] leading-none tracking-tighter text-cream"
          >
            FALLING SUN
          </motion.div>
        </div>

        {/* Bottom Copyright & Coordinates */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-cream/80">
          <div>
            © {eventConfig.name} · HACKATHON · 2026. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span>{eventConfig.coordinates}</span>
            <span>•</span>
            <span className="text-yellow font-bold">{eventConfig.statusText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
