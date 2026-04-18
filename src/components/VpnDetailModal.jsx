import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
} from "lucide-react";
import Button from "./Button";

const VpnDetailModal = ({ onClose, vpn }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (!vpn) return;
    setCurrentSlide((prev) => (prev + 1) % vpn.slides.length);
  };

  const prevSlide = () => {
    if (!vpn) return;
    setCurrentSlide(
      (prev) => (prev - 1 + vpn.slides.length) % vpn.slides.length,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      {/* Backdrop - fades in separately to not conflict with layout transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
      />

      {/* Modal Content - Standard scale-up popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden z-10 origin-center"
      >
        {/* Sticky Close Button Wrapper */}
        <div className="sticky top-0 right-0 z-[60] flex justify-end p-4 pointer-events-none mb-[-56px]">
          <button
            onClick={onClose}
            className="pointer-events-auto p-2 bg-white/90 backdrop-blur shadow-lg border border-gray-100 hover:bg-gray-100 rounded-full transition-all hover:scale-110 active:scale-95"
          >
            <X size={24} className="text-text" />
          </button>
        </div>

        <div className="p-6 md:p-10">
          {/* Headline & Badges - Full Width */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
              <ShieldCheck size={14} />
              Verified Security
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-text mb-4 leading-tight">
              {vpn.fullName}
            </h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed max-w-3xl">
              {vpn.tagline}
            </p>

            {/* Stats Cards - Horizontal on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <Zap className="text-accent-green mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-light tracking-wider">
                    Speed
                  </p>
                  <p className="font-bold text-base text-text">Ultra Fast</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <Globe className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-light tracking-wider">
                    Coverage
                  </p>
                  <p className="font-bold text-base text-text">
                    {vpn.specs.coverage}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <ShieldCheck
                  className="text-blue-500 mt-1 shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-light tracking-wider">
                    Security
                  </p>
                  <p className="font-bold text-base text-text">
                    Military Grade
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <CheckCircle2
                  className="text-accent-green mt-1 shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-light tracking-wider">
                    Status
                  </p>
                  <p className="font-bold text-base text-text">Tested & Safe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Image Slider Section */}
          <div className="w-full relative group mb-16 px-2">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-gray-100 shadow-2xl border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={vpn.slides[currentSlide]}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-contain p-4 md:p-8"
                  alt={`${vpn.fullName} UI Screenshot`}
                />
              </AnimatePresence>
            </div>

            {/* Nav Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur shadow-xl rounded-full hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={24} className="text-text" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur shadow-xl rounded-full hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={24} className="text-text" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {vpn.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "w-10 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>

          {/* Specs Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  {Object.keys(vpn.specs).map((key) => (
                    <th
                      key={key}
                      className="p-4 text-left text-[10px] uppercase font-black text-text-light border border-gray-100"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.values(vpn.specs).map((val, i) => (
                    <td
                      key={i}
                      className="p-4 text-xs font-medium text-text border border-gray-100 align-top"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Review Text */}
          <div className="mb-12">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cpu size={20} className="text-primary" />
              Expert Analysis
            </h4>
            <div className="text-text-light leading-relaxed prose max-w-none">
              <p className="whitespace-pre-line">{vpn.reviewText}</p>
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-accent-green/5 border border-accent-green/10 rounded-2xl">
              <h5 className="flex items-center gap-2 text-accent-green font-bold mb-4 uppercase tracking-wider text-sm">
                <CheckCircle2 size={18} />
                Pros
              </h5>
              <ul className="space-y-3">
                {vpn.pros.map((pro, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-1.5 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
              <h5 className="flex items-center gap-2 text-red-500 font-bold mb-4 uppercase tracking-wider text-sm">
                <XCircle size={18} />
                Cons
              </h5>
              <ul className="space-y-3">
                {vpn.cons.map((con, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center pt-6 border-t border-gray-100">
            <a
              href={vpn.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm"
            >
              <Button size="lg" className="w-full shadow-xl shadow-primary/20">
                Visit {vpn.fullName} Website
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VpnDetailModal;
