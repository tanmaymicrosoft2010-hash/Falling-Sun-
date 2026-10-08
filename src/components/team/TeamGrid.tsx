import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';
import { Shield, Sparkles, X, Info } from 'lucide-react';
import { WhatsAppCTA } from '../common/WhatsAppCTA';
import { TeamMember } from '../../types';
import { RoleTag } from './RoleTag';
import { MemberPhoto } from './MemberPhoto';

export const TeamGrid: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const organizers = eventConfig.team.filter((m) => m.section !== 'backbone');
  const facultyMembers = eventConfig.team.filter((m) => m.section === 'backbone');

  return (
    <div className="space-y-16">
      {/* Notice Callout */}
      <div className="p-6 bg-cream border-2 border-ink shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-reddark tracking-widest uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORGANIZING COMMITTEE • TEAM FALLING SUN</span>
          </div>
          <p className="text-ink-muted text-xs sm:text-sm font-sans">
            The people behind Falling Sun. Full mentor credentials and judging panels will be unveiled via WhatsApp.
          </p>
        </div>

        <WhatsAppCTA compact className="shrink-0" />
      </div>

      {/* SECTION 1: ORGANIZERS (TOP) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-reddark border-2 border-ink text-cream font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0_#1d1210]">
            <Sparkles className="w-4 h-4" />
            <span>ORGANIZERS</span>
          </div>
          <div className="flex-1 h-px bg-ink/25 border-t-2 border-dashed"></div>
          <span className="font-mono text-xs text-ink-muted uppercase tracking-widest font-semibold">LEADS & CORE CREW</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedMember(member)}
              className="group relative overflow-hidden bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[220/280] w-full overflow-hidden bg-ink">
                <MemberPhoto
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  imgClassName="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <RoleTag role={member.role} />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-3">
                  <span className="p-1.5 bg-cream border-2 border-ink text-ink text-xs">
                    <Info className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <div className="p-4 bg-cream border-t-2 border-ink/20 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold text-ink">{member.name}</p>
                  <p className="font-mono text-[11px] text-ink-muted">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 2: EXECUTIVE & MENTORS (BOTTOM) */}
      {facultyMembers.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-green border-2 border-ink text-cream font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[2px_2px_0_#1d1210]">
              <Shield className="w-4 h-4" />
              <span>EXECUTIVE & MENTORS</span>
            </div>
            <div className="flex-1 h-px bg-ink/25 border-t-2 border-dashed"></div>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-widest font-semibold">LEADERSHIP & MENTORS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
            {facultyMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedMember(member)}
                className="group relative overflow-hidden bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[220/280] w-full overflow-hidden bg-ink">
                  <MemberPhoto
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    imgClassName="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <RoleTag role={member.role} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-3">
                    <span className="p-1.5 bg-cream border-2 border-ink text-ink text-xs">
                      <Info className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-cream border-t-2 border-ink/20 flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{member.name}</p>
                    <p className="font-mono text-[11px] text-ink-muted">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/70"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md bg-cream border-2 border-ink shadow-card overflow-hidden p-6 space-y-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 overflow-hidden bg-ink border-2 border-ink shrink-0">
                    <MemberPhoto
                      image={selectedMember.image}
                      name={selectedMember.name}
                      role={selectedMember.role}
                      imgClassName="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-reddark tracking-widest uppercase">
                      {selectedMember.role}
                    </span>
                    <h3 className="font-display text-2xl font-black text-ink break-word">
                      {selectedMember.name}
                    </h3>
                    <p className="font-mono text-[10px] text-ink-muted">FALLING SUN CREW</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="p-2 hover:bg-black/10 text-ink transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted font-bold">
                  // RESPONSIBILITY & FOCUS
                </h4>
                <p className="text-ink text-sm leading-relaxed font-sans font-medium">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-ink/20 flex items-center justify-between font-mono text-xs text-ink-muted">
                <span className="flex items-center gap-1.5 text-reddark font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>VERIFIED ORGANIZER</span>
                </span>
                <span className="text-[11px]">FALLING SUN 2026</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
