import React from 'react';
import { motion } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';
import { Trophy, Sparkles } from 'lucide-react';
import { WhatsAppCTA } from '../common/WhatsAppCTA';
import { StampCard } from '../StampCard';

export const PrizeGrid: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Editorial Announcement Banner */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cream text-reddark border-2 border-ink font-mono text-xs uppercase tracking-widest font-bold -rotate-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>9 AWARD CATEGORIES ANNOUNCED</span>
        </div>

        <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-cream">
          BUILD. SHIP.{' '}
          <span className="bg-cream text-bg px-2 inline-block -rotate-1">WIN.</span>
        </h3>

        <p className="text-cream text-base md:text-lg leading-relaxed font-bold">
          Three awards each for Game Development, Web Development, and Hardware. Cash values, partner
          bounties, and hardware perks are still being finalised — those drop through our WhatsApp
          community.
        </p>

        {/* Awards Overview */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest font-bold">
          <span className="px-3 py-1.5 bg-yellow border-2 border-ink text-ink">Game Dev // 3 Awards</span>
          <span className="px-3 py-1.5 bg-cream border-2 border-ink text-ink">Web Dev // 3 Awards</span>
          <span className="px-3 py-1.5 bg-bg border-2 border-cream text-cream">Hardware // 3 Awards</span>
        </div>

        <WhatsAppCTA compact className="mx-auto" />
      </div>

      {/* Dynamic Editorial Prize Grid (Light Theme + 3D Perspective Entrance) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cards" style={{ perspective: 1000 }}>
        {eventConfig.prizes.map((prize, idx) => (
          <motion.div
            key={prize.id}
            initial={{ opacity: 0, y: 40, rotateX: 12, rotateY: idx % 2 === 0 ? 6 : -6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <StampCard
              title={prize.title}
              className="p-8 h-full flex flex-col justify-between transition-all duration-300 group-hover:shadow-[8px_8px_0_#1d1210]"
            >
              <div className="space-y-6 min-w-0">
                {/* Category */}
                <div className="flex items-center justify-end font-mono text-xs text-ink-muted">
                  <span className="px-2.5 py-1 bg-black/5 border-2 border-ink/30 text-ink uppercase tracking-widest text-[10px] font-bold">
                    {prize.category}
                  </span>
                </div>

                {/* TBA Value Badge */}
                <div className="space-y-3 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow border-2 border-ink font-mono text-xs text-ink font-bold">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>VALUE // {prize.status}</span>
                  </div>

                  <p className="text-ink-muted text-xs sm:text-sm leading-relaxed font-medium">
                    {prize.description}
                  </p>
                </div>
              </div>

            {/* Bottom Card Footer */}
              <div className="pt-8 border-t-2 border-ink/20 flex items-center justify-between font-mono text-[11px] text-ink-muted">
                <span className="text-ink-muted uppercase font-bold">WHATSAPP DROP</span>
              </div>
            </StampCard>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Full Banner */}
      <WhatsAppCTA
        title="WANT FIRST ACCESS TO THE PRIZE REVEAL?"
        subtitle="Join the WhatsApp group to receive push notifications the second our sponsor bounties and cash pool go live."
      />
    </div>
  );
};
