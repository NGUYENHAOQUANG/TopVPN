import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Lock, Globe } from "lucide-react";
import Button from "../../components/Button";
import bannerImg from "../../assets/banner/iconBanner.png";

// Import sliders
import slide1 from "../../assets/ExpressVpn/slide/image1.png";
import slide2 from "../../assets/Hide.me/slide/image1.png";
import slide3 from "../../assets/NordVpn/slide/image1.png";
import slide4 from "../../assets/Private Internet Access/slide/image1.png";
import slide5 from "../../assets/PrivateVPN/slide/image1.png";
import slide6 from "../../assets/Proton VPN/slide/image1.png";
import slide7 from "../../assets/Surfshark/slide/image1.png";
import slide8 from "../../assets/TunnelBear/slide/image1.png";
import slide9 from "../../assets/Windscribe/slide/image1.png";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
];

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [mode, setMode] = useState("banner"); // "banner" | "slider"
  const [activeIndex, setActiveIndex] = useState(0);

  const heroRef = useRef(null);
  const textRef = useRef(null);

  // Custom refs for mode switching
  const bannerContainerRef = useRef(null);
  const imageRef = useRef(null);
  const floatingCardsRef = useRef([]);
  const bannerTimeoutRef = useRef(null);

  const sliderContainerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const slideRefs = useRef([]);
  const isTransitioningRef = useRef(false);
  const activeInteractionRef = useRef(false);

  // Initial Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Banner / Slider Entrance Logic
  useEffect(() => {
    let ctx = gsap.context(() => {});

    if (mode === "banner") {
      isTransitioningRef.current = false;
      setActiveIndex(0); // reset slider

      ctx.add(() => {
        // Banner Entrance Animation
        gsap.fromTo(
          imageRef.current,
          { x: 40, opacity: 0, rotation: 3, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
          },
        );

        // Floating Animations
        floatingCardsRef.current.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.6 + index * 0.2,
              ease: "back.out(1.5)",
            },
          );
          gsap.to(card, {
            y: index % 2 === 0 ? "-=12" : "+=12",
            rotation: index % 2 === 0 ? 1 : -1,
            duration: 3 + index,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: 1.2,
          });
        });

        // Setup timer to transition out after 3 seconds
        bannerTimeoutRef.current = setTimeout(() => {
          if (isTransitioningRef.current) return;
          isTransitioningRef.current = true;

          gsap.to(bannerContainerRef.current, {
            opacity: 0,
            y: -40,
            scale: 0.96,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              setMode("slider");
            },
          });
        }, 3000);
      });
    } else if (mode === "slider") {
      isTransitioningRef.current = false;
      ctx.add(() => {
        // Slider Entrance Animation
        gsap.fromTo(
          sliderContainerRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        );
      });
    }

    return () => {
      ctx.revert();
      if (bannerTimeoutRef.current) clearTimeout(bannerTimeoutRef.current);
    };
  }, [mode]);

  // Center Snapping Tracking (IntersectionObserver)
  useEffect(() => {
    if (mode !== "slider" || !scrollWrapperRef.current) return;

    // We observe what's in the absolute center of the wrapper
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: scrollWrapperRef.current,
        // Root margin targets the middle 30% vertical band of the container
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [mode]);

  // Auto-scroll loop
  useEffect(() => {
    if (mode !== "slider") return;

    const interval = setInterval(() => {
      // Don't auto-scroll or exit if user is actively interacting (hover/touch)
      if (activeInteractionRef.current) return;

      if (scrollWrapperRef.current && activeIndex < slides.length - 1) {
        // scrollBy handles native scroll-snap naturally
        const itemHeight = slideRefs.current[0]?.offsetHeight || 300;
        scrollWrapperRef.current.scrollBy({
          top: itemHeight + 32,
          behavior: "smooth",
        });
      } else if (activeIndex === slides.length - 1) {
        // Loop break condition: reached the end, exit back to banner mode
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          gsap.to(sliderContainerRef.current, {
            opacity: 0,
            y: -40,
            scale: 0.96,
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => setMode("banner"),
          });
        }
      }
    }, 2500); // scroll or check every 2.5s

    return () => clearInterval(interval);
  }, [mode, activeIndex]);

  return (
    <section
      ref={heroRef}
      className="relative pt-20 pb-20 md:pt-28 md:pb-32 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#8ED0F9]/40 via-[#8ED0F9]/10 to-[#FAFBFC]"
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-[-5%] w-[800px] h-[800px] rounded-full bg-[#8ED0F9]/40 blur-[120px] filter pointer-events-none"></div>

      {/* Smooth Fading Transition Overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-10">
        {/* Left Content */}
        <div
          ref={textRef}
          className="w-full md:w-5/12 lg:w-1/3 flex flex-col items-start gap-6 relative z-30"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10 text-primary font-medium text-sm">
            <ShieldCheck size={18} />
            <span>Updated for 2026 - Tested & Verified</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight tracking-tight">
            The Best{" "}
            <span className="text-primary relative">
              VPN Services
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
            <br /> for Complete Privacy
          </h1>

          <p className="text-lg text-text-light md:pr-10 leading-relaxed">
            We've tested over 50+ providers to help you find the most secure,
            fastest, and reliable VPNs for global streaming, gaming, and secure
            browsing.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <Button
              size="lg"
              className="w-full sm:w-auto whitespace-nowrap shadow-[0_4px_14px_0_rgba(36,65,217,0.39)] hover:shadow-[0_6px_20px_rgba(36,65,217,0.23)]"
            >
              Get Best VPN Now
            </Button>
            <p className="text-sm text-text-light flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              Special Offers Available
            </p>
          </div>
        </div>

        {/* Right Content / Interactive Area */}
        <div className="w-full md:w-7/12 lg:w-[65%] relative min-h-[500px] lg:min-h-[700px] md:translate-x-[30px]">
          {/* Banner Mode */}
          {mode === "banner" && (
            <div
              ref={bannerContainerRef}
              className="absolute inset-0 w-full h-full flex justify-center items-center"
            >
              <img
                ref={imageRef}
                src={bannerImg}
                alt="VPN Security Display"
                className="max-w-full h-auto drop-shadow-2xl object-contain relative rounded-xl"
              />

              {/* Floating feature cards */}
              <div
                ref={(el) => (floatingCardsRef.current[0] = el)}
                className="absolute -left-4 md:-left-12 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Lock size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text">
                    Military-grade
                  </span>
                  <span className="text-xs text-text-light">Encryption</span>
                </div>
              </div>

              <div
                ref={(el) => (floatingCardsRef.current[1] = el)}
                className="absolute -right-4 md:-right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="bg-accent-green/10 p-2 rounded-lg text-accent-green">
                  <Globe size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text">
                    100+ Countries
                  </span>
                  <span className="text-xs text-text-light">
                    Global Servers
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Slider Mode */}
          {mode === "slider" && (
            <div
              ref={sliderContainerRef}
              className="absolute inset-x-0 top-0 bottom-[-50px] md:bottom-[-100px] overflow-hidden rounded-3xl"
              onMouseEnter={() => (activeInteractionRef.current = true)}
              onMouseLeave={() => (activeInteractionRef.current = false)}
              onTouchStart={() => (activeInteractionRef.current = true)}
              onTouchEnd={() => {
                setTimeout(() => {
                  activeInteractionRef.current = false;
                }, 1000);
              }}
            >
              {/* TOP Mask for smooth entrance */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FAFBFC] via-[#FAFBFC]/80 to-transparent pointer-events-none z-20"></div>

              <div
                ref={scrollWrapperRef}
                className="w-full h-full overflow-y-auto overflow-x-hidden px-1 md:px-4 pb-[40vh] pt-32 space-y-12 snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth"
              >
                {slides.map((imgSrc, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={idx}
                      ref={(el) => (slideRefs.current[idx] = el)}
                      data-index={idx}
                      className={`w-full rounded-[1.5rem] overflow-hidden transition-all duration-700 ease-out snap-center transform origin-center border
                        ${
                          isActive
                            ? "scale-100 opacity-100 blur-none shadow-[0_20px_50px_rgba(36,65,217,0.15)] border-white/80 bg-white"
                            : "scale-[0.85] opacity-50 blur-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-white/40 bg-white/50"
                        }
                      `}
                    >
                      <div className="relative">
                        <img
                          src={imgSrc}
                          alt={`Slide display ${idx + 1}`}
                          className={`w-full h-auto object-cover rounded-[1.5rem] transition-transform duration-700 ${isActive ? "scale-100" : "scale-[1.05]"}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none rounded-[1.5rem]"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM Mask for smooth exit */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAFBFC] via-[#FAFBFC]/90 to-transparent pointer-events-none z-20"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
