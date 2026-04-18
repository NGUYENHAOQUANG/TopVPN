import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import VpnCard from "../../components/VpnCard";
import VpnDetailModal from "../../components/VpnDetailModal";
import { vpnDetails } from "../../data/vpnData";

// Importing all 9 VPN logos from assets
import nordLogo from "../../assets/NordVpn/NordIcon.png";
import expressLogo from "../../assets/ExpressVpn/expressVPNIcon.png";
import surfsharkLogo from "../../assets/Surfshark/SurfsharkIcon.png";
import protonLogo from "../../assets/Proton VPN/Proton VPN.png";
import windscribeLogo from "../../assets/Windscribe/Windscribe.png";
import hidemeLogo from "../../assets/Hide.me/Hide.meicon.png";
import piaLogo from "../../assets/Private Internet Access/Private_Internet_Accessicon.png";
import privatevpnLogo from "../../assets/PrivateVPN/PrivateVPNicon.png";
import tunnelbearLogo from "../../assets/TunnelBear/TunnelBearVNPicon.png";

const vpns = [
  // ... (keeping the same vpn list as before)
  {
    brand: "NordVPN",
    logo: nordLogo,
    rating: 5.0,
    price: "3.09",
    isPopular: true,
    description: "The best all-round VPN for speed, privacy, and unblocking.",
    features: [
      "NordLynx protocol",
      "Strict no-logs",
      "Malware protection",
      "4K Streaming",
    ],
    officialUrl: "https://nordvpn.com",
  },
  {
    brand: "ExpressVPN",
    logo: expressLogo,
    rating: 4.8,
    price: "6.67",
    isPopular: false,
    description: "Premium service with industry-leading security features.",
    features: [
      "Lightway protocol",
      "105 countries",
      "TrustedServer tech",
      "24/7 Support",
    ],
    officialUrl: "https://www.expressvpn.com",
  },
  {
    brand: "Surfshark",
    logo: surfsharkLogo,
    rating: 4.7,
    price: "2.29",
    isPopular: false,
    description: "Best value VPN with unlimited simultaneous connections.",
    features: [
      "Unlimited devices",
      "CleanWeb blocker",
      "MultiHop VPN",
      "WireGuard support",
    ],
    officialUrl: "https://surfshark.com",
  },
  {
    brand: "Proton VPN",
    logo: protonLogo,
    rating: 4.6,
    price: "4.99",
    isPopular: false,
    description: "Security-focused VPN based in privacy-friendly Switzerland.",
    features: [
      "Swiss privacy",
      "Secure Core",
      "Open-source",
      "VPN Accelerator",
    ],
    officialUrl: "https://protonvpn.com",
  },
  {
    brand: "Private Internet Access",
    logo: piaLogo,
    rating: 4.5,
    price: "2.11",
    isPopular: false,
    description: "Highly customizable VPN with a massive server network.",
    features: [
      "MACE ad blocker",
      "Open-source apps",
      "Proven no-logs",
      "Advanced split tunneling",
    ],
    officialUrl: "https://www.privateinternetaccess.com",
  },
  {
    brand: "Windscribe",
    logo: windscribeLogo,
    rating: 4.4,
    price: "5.75",
    isPopular: false,
    description:
      "Excellent features with a focus on ease of use and flexibility.",
    features: [
      "R.O.B.E.R.T. blocker",
      "Flexible pricing",
      "No identifying logs",
      "Unlimited devices",
    ],
    officialUrl: "https://windscribe.com",
  },
  {
    brand: "Hide.me",
    logo: hidemeLogo,
    rating: 4.3,
    price: "2.59",
    isPopular: false,
    description:
      "Versatile VPN with advanced privacy features and great free tier.",
    features: [
      "Bolt proxy",
      "Multihop support",
      "Zero logs policy",
      "10Gbps servers",
    ],
    officialUrl: "https://hide.me",
  },
  {
    brand: "PrivateVPN",
    logo: privatevpnLogo,
    rating: 4.2,
    price: "2.00",
    isPopular: false,
    description: "Small but powerful provider with dedicated support.",
    features: [
      "High-speed servers",
      "Military-grade encryption",
      "Port forwarding",
      "10 simultaneous devices",
    ],
    officialUrl: "https://privatevpn.com",
  },
  {
    brand: "TunnelBear",
    logo: tunnelbearLogo,
    rating: 4.0,
    price: "3.33",
    isPopular: false,
    description: "The simplest VPN for beginners with a fun interface.",
    features: [
      "Annual audits",
      "VigilantBear",
      "GhostBear tech",
      "Simple controls",
    ],
    officialUrl: "https://www.tunnelbear.com",
  },
];

const TrendingList = () => {
  const [selectedVpnName, setSelectedVpnName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadReview = (name) => {
    setSelectedVpnName(name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Note: We don't nullify selectedVpnName here yet so AnimatePresence has data for the exit animation
  };

  const selectedVpnData = selectedVpnName ? vpnDetails[selectedVpnName] : null;

  return (
    <section id="top-vpns" className="py-20 bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Best VPN Services of 2026
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Based on extensive testing of speed, security, and streaming
            capabilities. Here are the top performers for this month.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {vpns.map((vpn, index) => (
            <VpnCard
              key={vpn.brand}
              index={index}
              {...vpn}
              onReadReview={handleReadReview}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence onExitComplete={() => setSelectedVpnName(null)}>
        {isModalOpen && selectedVpnData && (
          <VpnDetailModal
            key="vpn-modal"
            onClose={closeModal}
            vpn={selectedVpnData}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrendingList;
