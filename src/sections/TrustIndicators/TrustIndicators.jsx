import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, EyeOff, Award, Fingerprint } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TrustIndicators = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const indicators = [
    {
      icon: <ShieldCheck size={32} />,
      title: "100% Security Tested",
      desc: "All VPNs undergo rigorous penetration testing to ensure maximum data safety.",
      color: "bg-blue-500",
    },
    {
      icon: <EyeOff size={32} />,
      title: "Strict No-Logs Policies",
      desc: "Your privacy is protected by verified and independent third-party audits.",
      color: "bg-purple-500",
    },
    {
      icon: <Fingerprint size={32} />,
      title: "Anonymity Guaranteed",
      desc: "Military-grade encryption and kill switch features prevent any data leaks.",
      color: "bg-emerald-500",
    },
    {
      icon: <Award size={32} />,
      title: "Expert Reviewed",
      desc: "Our dedicated tech team performs monthly performance and speed reviews.",
      color: "bg-amber-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#FAFBFC]"
    >
      {/* Background Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            Why Trust Our Recommendations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light"
          >
            We prioritize your digital safety above all else. Every provider
            listed on our platform is vetted against the highest industry
            standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -12 }}
              className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Subtle hover background glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl ${item.color}`}
              ></div>

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-70"></div>
                <div className="relative bg-white shadow-sm border border-gray-100 text-primary p-5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-100 group-hover:bg-primary/30 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
