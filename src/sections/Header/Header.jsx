import React, { useState, useEffect, useRef } from "react";
import { Shield, Menu, X } from "lucide-react";
import gsap from "gsap";
import Button from "../../components/Button";

const SCROLL_THRESHOLD = 70; // px cuộn để chuyển sang sticky blur (giảm xuống cho nhanh)

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const hasTriggeredRef = useRef(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;

      if (scrolled && !hasTriggeredRef.current) {
        // Lần đầu vượt ngưỡng → chuyển sang sticky & trượt từ trên xuống
        hasTriggeredRef.current = true;
        setIsSticky(true);

        // GSAP: set ngay về trên rồi animate xuống
        gsap.fromTo(
          headerRef.current,
          { y: -90, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: "power2.out" },
        );
      } else if (!scrolled && hasTriggeredRef.current) {
        // Cuộn về đầu → trở lại trạng thái transparent bình thường
        hasTriggeredRef.current = false;
        setIsSticky(false);

        // Reset transform
        gsap.set(headerRef.current, { y: 0, opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`top-0 left-0 right-0 z-50 transition-[padding,background-color] duration-300 ${
        isSticky
          ? "fixed py-3 bg-white/85 backdrop-blur-2xl border-b border-gray-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "absolute py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div className="bg-primary p-2 rounded-lg text-white shadow-md shadow-primary/30">
            <Shield size={22} />
          </div>
          <span className="text-xl font-bold text-text">
            TopVPN<span className="text-primary">2026</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { href: "#top-vpns", label: "Top 10 VPNs" },
            { href: "#comparison", label: "Comparison" },
            { href: "#guides", label: "Guides" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative text-text-light hover:text-primary transition-colors duration-200"
            >
              {label}
              {/* Underline: slides in from left on hover, out from left on unhover */}
              <span
                className="absolute bottom-[-3px] left-0 block h-[2px] w-full bg-primary
                  scale-x-0 origin-left
                  transition-transform duration-300 ease-out
                  group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm">Get Best VPN</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-light hover:text-text transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl shadow-lg border-t border-gray-100/50 p-4 flex flex-col gap-3 md:hidden">
          <a
            href="#top-vpns"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-text hover:bg-primary/5 hover:text-primary transition-colors"
          >
            Top 10 VPNs
          </a>
          <a
            href="#comparison"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-text hover:bg-primary/5 hover:text-primary transition-colors"
          >
            Comparison
          </a>
          <a
            href="#guides"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-text hover:bg-primary/5 hover:text-primary transition-colors"
          >
            Guides
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-text hover:bg-primary/5 hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <div className="flex flex-col gap-2 mt-1 pt-3 border-t border-gray-100">
            <Button variant="outline" className="w-full">
              Log In
            </Button>
            <Button className="w-full">Get Best VPN</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
