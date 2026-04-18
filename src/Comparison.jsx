import React, { useEffect, useRef } from "react";
import { Check, X, Star, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import VPN Icons
import expIcon from "./assets/ExpressVpn/expressVPNIcon.png";
import nordIcon from "./assets/NordVpn/NordIcon.png";
import surfIcon from "./assets/Surfshark/SurfsharkIcon.png";
import protonIcon from "./assets/Proton VPN/Proton VPN.png";

gsap.registerPlugin(ScrollTrigger);

const Comparison = () => {
  const sectionRef = useRef(null);
  const tableRef = useRef(null);

  const featuresList = [
    { key: "score", label: "Score" },
    { key: "price", label: "Starting Price" },
    { key: "mbg", label: "Money-Back Guarantee" },
    { key: "servers", label: "Server Network" },
    { key: "connections", label: "Simultaneous Connections" },
    { key: "platforms", label: "Platform Compatibility" },
    { key: "nologs", label: "No-logs Policy", isCheck: true },
    { key: "killswitch", label: "Kill Switch", isCheck: true },
    { key: "splittunnel", label: "Split Tunneling", isCheck: true },
    { key: "doublevpn", label: "Double VPN/Multi-hop", isCheck: true },
    { key: "torrenting", label: "Torrenting Support", isCheck: true },
    { key: "learnmore", label: "Learn more", isButton: true },
  ];

  const providers = [
    {
      id: "express",
      name: "ExpressVPN",
      icon: expIcon,
      isBest: true,
      score: 4.9,
      price: "$12.99/mo or $3.49/mo (Promo)",
      mbg: "30-day",
      servers: "105 countries",
      connections: "Up to 14",
      platforms: "Win, Mac, iOS, Android, Linux, TV, Consoles, Routers",
      nologs: true,
      killswitch: true,
      splittunnel: true,
      doublevpn: false,
      torrenting: true,
      link: "official site",
      officialUrl: "https://www.expressvpn.com",
    },
    {
      id: "nord",
      name: "NordVPN",
      icon: nordIcon,
      score: 4.87,
      price: "$3.39/month",
      mbg: "30-day",
      servers: "180+ countries",
      connections: "Up to 10",
      platforms: "Win, Mac, iOS, Android, Linux, TV, Consoles, Browsers",
      nologs: true,
      killswitch: true,
      splittunnel: true,
      doublevpn: true,
      torrenting: true,
      link: "official site",
      officialUrl: "https://nordvpn.com",
    },
    {
      id: "surfshark",
      name: "Surfshark",
      icon: surfIcon,
      score: 4.85,
      price: "$15.45/month",
      mbg: "30-day",
      servers: "100+ countries",
      connections: "Unlimited",
      platforms: "Win, Mac, iOS, Android, Linux, TV, Consoles, Browsers",
      nologs: true,
      killswitch: true,
      splittunnel: true,
      doublevpn: true,
      torrenting: true,
      link: "official site",
      officialUrl: "https://surfshark.com",
    },
    {
      id: "proton",
      name: "ProtonVPN",
      icon: protonIcon,
      score: 4.83,
      price: "Free",
      mbg: "30-day",
      servers: "120+ countries",
      connections: "Up to 10",
      platforms: "Win, Mac, iOS, Android, Linux, Browsers, TV",
      nologs: true,
      killswitch: true,
      splittunnel: true,
      doublevpn: true,
      torrenting: true,
      link: "official site",
      officialUrl: "https://protonvpn.com",
    },
  ];

  // Helper function to render stars
  const renderStars = (score) => {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="flex text-accent-green">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={14} fill="currentColor" />
          ))}
        </div>
        <span className="text-[10px] font-bold text-text-light">({score})</span>
      </div>
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row by row staggered fade in
      gsap.fromTo(
        ".compare-row",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="py-20 bg-white relative"
    >
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-text mb-4"
          >
            Ultimate VPN Comparison
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-light max-w-xl mx-auto text-sm md:text-base px-2"
          >
            The essential breakdown of how Top Providers measure up in real-world metrics.
          </motion.p>
        </div>

        {/* Outer wrapper - Optimized for no horizontal scroll on Desktop */}
        <div className="rounded-xl border border-gray-100 bg-white overflow-hidden shadow-2xl shadow-primary/5">
          <div
            ref={tableRef}
            className="overflow-x-auto lg:overflow-visible"
          >
            <table className="w-full text-center border-collapse min-w-[800px] lg:min-w-0">
              {/* ------------- HEADER ROW ------------- */}
              <thead>
                <tr>
                  {/* Empty top-left cell */}
                  <th className="p-4 bg-gray-50/50 border-r border-b border-gray-200 align-middle w-[15%]">
                    <span className="text-[10px] font-black text-text-light uppercase tracking-widest">
                      Provider
                    </span>
                  </th>

                  {providers.map((p) => (
                    <th
                      key={p.id}
                      className={`relative pt-10 pb-4 px-2 border-r last:border-r-0 border-b border-gray-200 align-bottom w-[21.25%] ${
                        p.isBest ? "bg-primary/[0.03]" : "bg-white"
                      }`}
                    >
                      {p.isBest && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
                      )}

                      {p.isBest && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 bg-primary text-white text-[9px] uppercase font-bold px-3 py-1 rounded-b-md flex items-center gap-1 shadow-md z-10 whitespace-nowrap">
                          Best Selection
                        </div>
                      )}

                      <div className="flex flex-col items-center justify-center gap-2">
                        <img
                          src={p.icon}
                          alt={`${p.name}`}
                          className="h-7 md:h-8 w-auto object-contain drop-shadow-sm"
                        />
                        <span className="text-sm md:text-base font-bold text-text tracking-tight">
                          {p.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ------------- DATA ROWS ------------- */}
              <tbody>
                {featuresList.map((feature, i) => (
                  <tr
                    key={feature.key}
                    className="compare-row group hover:bg-primary/[0.01] transition-colors duration-200"
                  >
                    {/* Feature Label Column */}
                    <td className="p-3 border-r border-b border-gray-200 bg-gray-50/20 text-left font-bold text-text text-xs">
                      {feature.label}
                    </td>

                    {/* Feature Data Columns */}
                    {providers.map((p) => {
                      const value = p[feature.key];

                      return (
                        <td
                          key={`${p.id}-${feature.key}`}
                          className={`p-3 border-r last:border-r-0 border-b border-gray-200 align-middle text-xs md:text-sm ${
                            p.isBest ? "bg-primary/[0.02]" : ""
                          }`}
                        >
                          {feature.key === "score" && renderStars(value)}

                          {feature.key === "price" && (
                            <span className="text-xs text-text-light leading-tight block">
                              {value}
                            </span>
                          )}

                          {feature.key === "mbg" && (
                            <span className="text-xs font-semibold text-text">
                              {value}
                            </span>
                          )}

                          {(feature.key === "servers" ||
                            feature.key === "connections" ||
                            feature.key === "platforms") && (
                            <span className="text-xs text-text-light leading-tight block">
                              {value}
                            </span>
                          )}

                          {feature.isCheck && (
                            <div className="flex justify-center">
                              {value ? (
                                <Check
                                  size={16}
                                  className="text-accent-green"
                                  strokeWidth={3}
                                />
                              ) : (
                                <X
                                  size={16}
                                  className="text-red-400"
                                  strokeWidth={3}
                                />
                              )}
                            </div>
                          )}

                          {feature.isButton && (
                            <div className="flex flex-col items-center justify-center gap-1.5 py-1">
                              <a 
                                href={p.officialUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full max-w-[120px]"
                              >
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="bg-primary text-white font-black text-[10px] md:text-xs uppercase py-2 px-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all w-full"
                                >
                                  Get Deal
                                </motion.button>
                              </a>
                              <span className="text-[9px] text-primary/70 italic opacity-60">
                                visit {p.name}
                              </span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
