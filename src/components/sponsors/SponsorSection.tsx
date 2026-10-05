import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Sparkles, ArrowUpRight, Cpu, Cloud, Terminal, Shield, Mail } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';

const SPONSOR_EMAIL = 'Fallingsun.delhi@gmail.com';
const mailtoLink = `mailto:${SPONSOR_EMAIL}?subject=Sponsorship%20Proposal%20-%20Falling%20Sun%202026&body=Hi%20Falling%20Sun%20Team%2C%0A%0AI%20am%20interested%20in%20sponsoring%20Falling%20Sun%202026.%20Please%20share%20details%20about%20partnership%20opportunities.%0A%0AOrganization%3A%0AContact%20Person%3A%0APhone%3A`;

export const SponsorSection: React.FC = () => {
  const tbaSponsors = [
    {
      id: 'cloud-compute',
      tier: 'TIER 02 // INFRASTRUCTURE',
      role: 'CLOUD & COMPUTE RUNTIME',
      status: 'TBA',
      icon: <Cloud className="w-5 h-5 text-brown" />,
      description:
        'Providing scalable server instances, managed databases, and cloud compute environments for live hackathon deployments.',
    },
    {
      id: 'hardware-lab',
      tier: 'TIER 02 // HARDWARE LAB',
      role: 'SENSORS & MICROCONTROLLERS',
      status: 'TBA',
      icon: <Cpu className="w-5 h-5 text-reddark" />,
      description:
        'Supplying robotics microcontrollers, sensor suites, servo rigs, and physical telemetry kits for hardware arena participants.',
    },
    {
      id: 'devtools-api',
      tier: 'TIER 03 // DEVTOOLS & API',
      role: 'DEVELOPER PLATFORM BOUNTY',
      status: 'TBA',
      icon: <Terminal className="w-5 h-5 text-brown" />,
      description:
        'Granting full API allowances, specialized SDKs, and dedicated bounties for the most creative integration of developer tooling.',
    },
  ];

  return (
    <section id="sponsors-section" className="relative py-28 md:py-36 px-6 md:px-12 bg-bg select-none overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number="04"
          category="PARTNERS & ECOSYSTEM"
          title="BACKED BY VISIONARY FORCES."
          subtitle="Engineering studios, developer platforms, and hardware labs enabling the next wave of creators."
        />

        {/* TIER 01: TITLE / PRESENTING PARTNER (Featured Wide Card showing TBA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 md:p-12 bg-cream text-ink border-2 border-ink shadow-card transition-all overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-yellow border-2 border-ink font-mono text-[11px] text-ink font-black tracking-widest uppercase">
                  TIER 01 // TITLE SPONSOR
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <span className="w-2 h-2 bg-green animate-ping" />
                  <span className="font-bold text-ink">ANNOUNCEMENT PENDING</span>
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight break-word">
                PRIMARY PRESENTING PARTNER
              </h3>

              <p className="text-ink-muted text-sm md:text-base font-sans leading-relaxed font-medium">
                Our headline sponsor will command primary keynote presentation privileges, mainstage nomenclature, and exclusive brand prominence across all 200+ participant workstations and live streams.
              </p>
            </div>

            {/* TBA Badge Block */}
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <div className="p-6 bg-black/5 border-2 border-ink/40 text-center space-y-1 min-w-[200px]">
                <div className="font-mono text-[10px] text-ink-muted font-bold tracking-widest uppercase">
                  CONFIRMATION STATUS
                </div>
                <div className="font-display text-4xl font-black text-reddark tracking-tight">
                  TBA
                </div>
                <div className="font-mono text-[10px] text-ink-muted font-semibold">
                  DISCLOSED VIA WHATSAPP
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TIER 02 & 03: INFRASTRUCTURE, HARDWARE & DEVTOOLS (3 Cards showing TBA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {tbaSponsors.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4 min-w-0">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="w-10 h-10 bg-black/5 border-2 border-ink/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 bg-yellow border-2 border-ink text-ink font-mono text-[10px] font-black tracking-widest">
                    {item.status}
                  </span>
                </div>

                <div className="space-y-1.5 min-w-0">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase font-bold">
                    {item.tier}
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-black text-ink tracking-tight break-word">
                    {item.role}
                  </h4>
                  <p className="text-ink-muted text-xs sm:text-sm font-sans leading-relaxed font-medium pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-ink/20 flex items-center justify-between font-mono text-[10px] text-ink-muted">
                <span className="font-bold text-ink">PARTNER ROSTER</span>
                <span className="text-reddark font-black uppercase">REVEALING SOON</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THE BLACK CARD: "BECOME A SPONSOR" — Email Compose Link */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group relative bg-ink text-cream border-2 border-ink p-8 sm:p-12 md:p-16 overflow-hidden shadow-[6px_6px_0_#e8232b]"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 min-w-0">
              <div className="flex items-center gap-2.5 font-mono text-xs text-yellow tracking-widest uppercase font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-yellow opacity-75" />
                  <span className="relative inline-flex h-2 w-2 bg-yellow" />
                </span>
                <span>PARTNER WITH FALLING SUN 2026</span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.98] break-word">
                ADD YOUR COMPANY<br />
                <span className="text-yellow">AS A SPONSOR.</span>
              </h3>

              <p className="text-cream/80 text-sm md:text-base font-sans font-medium leading-relaxed max-w-2xl">
                Place your developer tools, cloud infrastructure, robotics hardware, and engineering brand directly in front of the nation's top 200+ builders. Sponsor specialized track bounties, mentor aspiring prodigies, and scout exceptional talent early.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-cream/80">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-yellow" />
                  <span>200+ High-Agency Builders</span>
                </span>
                <span className="text-cream/30">•</span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow" />
                  <span>Custom Track Bounties</span>
                </span>
                <span className="text-cream/30">•</span>
                <span>Full Keynote Visibility</span>
              </div>
            </div>

            {/* Right Action Block: Email Compose + WhatsApp */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
              <a
                href={mailtoLink}
                className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-yellow text-ink border-2 border-cream font-mono text-xs font-bold tracking-wider hover:bg-cream transition-all shadow-[5px_5px_0_#e8232b] hover:shadow-[7px_7px_0_#e8232b]"
              >
                <Mail className="w-4 h-4" />
                <span>BECOME A SPONSOR</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <div className="font-mono text-[11px] text-cream/70 leading-relaxed">
                <div>Contact Lead Org</div>
                <a
                  href={`mailto:${SPONSOR_EMAIL}`}
                  className="hover:text-yellow transition-colors"
                >
                  {SPONSOR_EMAIL}
                </a>
              </div>

              <a
                href={eventConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-cream/70 hover:text-yellow transition-colors"
              >
                <span>Or message our lead on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;
