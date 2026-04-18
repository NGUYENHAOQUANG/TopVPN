import React from "react";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1121] text-gray-400 py-16 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/20 p-2 rounded-lg text-primary-light">
                <Shield size={24} />
              </div>
              <span className="text-xl font-bold text-white">
                TopVPN<span className="text-primary-light">2026</span>
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              We provide independent, rigorous testing of VPN services to help
              you protect your digital privacy and freedom.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Top Providers</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  NordVPN Review
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  ExpressVPN Review
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Surfshark Review
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  ProtonVPN Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  What is a VPN?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Privacy Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  VPN for Netflix
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Best Free VPNs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  How We Test
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Affiliate Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; 2026 TopVPN Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
