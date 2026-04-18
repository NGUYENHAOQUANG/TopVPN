import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

// All VPN Icons
import expIcon from "../../assets/ExpressVpn/expressVPNIcon.png";
import nordIcon from "../../assets/NordVpn/NordIcon.png";
import surfIcon from "../../assets/Surfshark/SurfsharkIcon.png";
import protonIcon from "../../assets/Proton VPN/Proton VPN.png";
import hideIcon from "../../assets/Hide.me/Hide.meicon.png";
import piaIcon from "../../assets/Private Internet Access/Private_Internet_Accessicon.png";
import privateIcon from "../../assets/PrivateVPN/PrivateVPNicon.png";
import bearIcon from "../../assets/TunnelBear/TunnelBearVNPicon.png";
import windIcon from "../../assets/Windscribe/Windscribe.png";

gsap.registerPlugin(ScrollTrigger);

const allIcons = [
  { src: expIcon, name: "ExpressVPN" },
  { src: nordIcon, name: "NordVPN" },
  { src: surfIcon, name: "Surfshark" },
  { src: protonIcon, name: "ProtonVPN" },
  { src: hideIcon, name: "Hide.me" },
  { src: piaIcon, name: "PIA VPN" },
  { src: privateIcon, name: "PrivateVPN" },
  { src: bearIcon, name: "TunnelBear" },
  { src: windIcon, name: "Windscribe" },
];

// 4 columns with different subsets
const columns = [
  {
    items: [allIcons[0], allIcons[1], allIcons[2], allIcons[3]],
    dir: "up",
    duration: 18,
  },
  { items: [allIcons[4], allIcons[5], allIcons[6]], dir: "down", duration: 22 },
  {
    items: [allIcons[7], allIcons[8], allIcons[0], allIcons[1]],
    dir: "up",
    duration: 15,
  },
  {
    items: [allIcons[2], allIcons[3], allIcons[4], allIcons[5]],
    dir: "down",
    duration: 20,
  },
];

const benefits = [
  "Military-grade AES-256 encryption",
  "Strict no-logs policy, independently audited",
  "30-day money-back guarantee",
  "Works on all your devices instantly",
];

/* ── Single Icon Card — no background frame, just logo + name on blur ── */
const IconCard = ({ src, name }) => (
  <div className="flex flex-col items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-2xl p-4 w-[120px] shrink-0 shadow-lg shadow-black/20">
    <img src={src} alt={name} className="h-9 w-auto object-contain" />
    <span className="text-white/70 text-[9px] font-bold tracking-wide text-center leading-tight">
      {name}
    </span>
  </div>
);

/* ── One vertical infinite marquee column ── */
const MarqueeColumn = ({ items, dir, duration }) => {
  // Triple the items for a truly seamless loop
  const tripled = [...items, ...items, ...items];
  const upAnim = `marqueeUp${Math.round(duration)}`;
  const downAnim = `marqueeDown${Math.round(duration)}`;
  const animName = dir === "up" ? upAnim : downAnim;

  return (
    <div
      className="flex flex-col gap-3 overflow-hidden"
      style={{ height: "700px" }}
    >
      <div
        className="flex flex-col gap-3"
        style={{
          animation: `${animName} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {tripled.map((icon, i) => (
          <IconCard key={i} src={icon.src} name={icon.name} />
        ))}
      </div>
    </div>
  );
};

const CTASection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const marqueeRef = useRef(null);

  // Build unique keyframe strings for each column's duration
  const keyframes = `
    @keyframes marqueeUp18   { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(0,-33.3333%,0); } }
    @keyframes marqueeDown22 { 0% { transform: translate3d(0,-33.3333%,0); } 100% { transform: translate3d(0,0,0); } }
    @keyframes marqueeUp15   { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(0,-33.3333%,0); } }
    @keyframes marqueeDown20 { 0% { transform: translate3d(0,-33.3333%,0); } 100% { transform: translate3d(0,0,0); } }
  `;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        marqueeRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      {/* ── SECTION is the container — overflow-hidden clips the marquee ── */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#08124A] via-primary-dark to-primary py-24 min-h-[420px]"
      >
        {/* Ambient glows */}
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-[#3A5FFF]/25 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-40 right-1/3 w-[460px] h-[460px] rounded-full bg-[#00C6FF]/15 blur-[130px] pointer-events-none" />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Full-width bottom fade covers the cut-off edge of all marquee columns */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #2441D9 30%, transparent 100%)",
          }}
        />

        {/* ── DIAGONAL MARQUEE — absolute, right side, overlaid on section bg ── */}
        <div
          ref={marqueeRef}
          className="absolute top-0 right-0 bottom-0 pointer-events-none"
          style={{ width: "52%" }}
        >
          {/* Bottom fade — hides the cut-off edge of the marquee */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #2441D9 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 flex items-start justify-center gap-3 pt-0"
            style={{
              transform: "rotate(-10deg) translateY(-40px) translateX(20px)",
              transformOrigin: "top center",
            }}
          >
            {columns.map((col, i) => (
              <MarqueeColumn
                key={i}
                items={col.items}
                dir={col.dir}
                duration={col.duration}
              />
            ))}
          </div>
        </div>

        {/* ── LEFT — CTA Text — sits above the marquee via z-index ── */}
        <div className="container-custom relative z-20">
          <div
            ref={textRef}
            className="w-full lg:w-[48%] flex flex-col gap-7 text-white"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-2 rounded-full text-sm font-semibold">
              <ShieldCheck size={16} className="text-accent-green" />
              <span>Top-Rated VPN Reviews for 2026</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black leading-tight tracking-tight">
              Secure your{" "}
              <span className="relative">
                digital life
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 220 8"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 7 Q110 0 220 7"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              starting today.
            </h2>

            {/* Sub */}
            <p className="text-lg text-white/65 max-w-md leading-relaxed font-light">
              Don't let ISPs track you or hackers steal your data on public
              Wi-Fi. Find the best VPN tested by our security experts for 2026.
            </p>

            {/* Benefits */}
            <ul className="flex flex-col gap-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/80 text-sm font-medium"
                >
                  <CheckCircle2
                    size={18}
                    className="text-accent-green shrink-0"
                  />
                  {b}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 bg-white text-primary font-black text-base px-8 py-4 rounded-full shadow-2xl shadow-black/30 hover:shadow-white/20 transition-all"
              >
                Find My Best VPN
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
              <p className="text-sm text-white/45 font-medium">
                * 30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
