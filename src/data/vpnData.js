// Detailed VPN Data for Reviews
import expSlide1 from "../assets/ExpressVpn/slide/image1.png";
import expSlide2 from "../assets/ExpressVpn/slide/image2.png";
import expSlide3 from "../assets/ExpressVpn/slide/image3.png";

import nordSlide1 from "../assets/NordVpn/slide/image1.png";
import nordSlide2 from "../assets/NordVpn/slide/image2.png";
import nordSlide3 from "../assets/NordVpn/slide/image3.png";

import surfSlide1 from "../assets/Surfshark/slide/image1.png";
import surfSlide2 from "../assets/Surfshark/slide/image2.png";
import surfSlide3 from "../assets/Surfshark/slide/image3.png";

import protonSlide1 from "../assets/Proton VPN/slide/image1.png";
import protonSlide2 from "../assets/Proton VPN/slide/image2.png";
import protonSlide3 from "../assets/Proton VPN/slide/image3.png";

import piaSlide1 from "../assets/Private Internet Access/slide/image1.png";
import piaSlide2 from "../assets/Private Internet Access/slide/image2.png";
import piaSlide3 from "../assets/Private Internet Access/slide/image3.png";

import windSlide1 from "../assets/Windscribe/slide/image1.png";
import windSlide2 from "../assets/Windscribe/slide/image2.png";
import windSlide3 from "../assets/Windscribe/slide/image3.png";

import hideSlide1 from "../assets/Hide.me/slide/image1.png";
import hideSlide2 from "../assets/Hide.me/slide/image2.png";
import hideSlide3 from "../assets/Hide.me/slide/image3.png";

import privatevpnSlide1 from "../assets/PrivateVPN/slide/image1.png";
import privatevpnSlide2 from "../assets/PrivateVPN/slide/image2.png";
import privatevpnSlide3 from "../assets/PrivateVPN/slide/image3.png";

import bearSlide1 from "../assets/TunnelBear/slide/image1.png";
import bearSlide2 from "../assets/TunnelBear/slide/image2.png";
import bearSlide3 from "../assets/TunnelBear/slide/image3.png";

export const vpnDetails = {
  ExpressVPN: {
    fullName: "ExpressVPN",
    tagline: "TrustedServer technology using RAM-only server infrastructure",
    pros: [
      "TrustedServer technology ensures data is never written to a hard drive",
      "Every plan offers useful tools like MailGuard and Identity Defender",
      "User-friendly, customizable app",
      "Built-in speed test tool",
    ],
    cons: ["No free plan available", "Limit on simultaneous devices", "No double VPN feature"],
    reviewText: `ExpressVPN truly lives up to its name. I found this service’s connection speed to be rather quick. One feature that sets ExpressVPN apart from other providers is that its app includes a built-in speed test tool, so you can immediately gauge the performance of any server you want to try. 
    
    Also, ExpressVPN makes it easy to determine which of their servers would be best for your specific situation. The app has a recommended section that highlights the fastest servers available and the most popular servers in your country.`,
    specs: {
      price: "$12.99/mo or $3.49/mo (Promo)",
      security: "No-logs policy, kill switch",
      coverage: "105 countries",
      ux: "Customizable interface",
      compatibility: "Win, Mac, iOS, Android, Linux, TV, Consoles, Routers",
      connectivity: "Up to 14 devices",
    },
    slides: [expSlide1, expSlide2, expSlide3],
    officialUrl: "https://www.expressvpn.com",
  },
  NordVPN: {
    fullName: "NordVPN",
    tagline: "AES-256 encryption with Threat Protection for malware and ads",
    pros: [
      "Strong security features (Threat Protection, Double VPN)",
      "Premium plans offer cloud storage and password manager",
      "Excellent server coverage and speed",
      "Beautifully designed, intuitive app",
    ],
    cons: ["Relatively expensive", "No free plan available", "Device limit could be higher"],
    reviewText: `The NordVPN app offers an interactive map, which is a particularly intuitive feature for choosing which server you want to use. 
    
    NordVPN’s Threat Protection feature filters your traffic to block ads and malicious domains, and I was impressed to see that you can leave it running even when you have the VPN turned off.`,
    specs: {
      price: "$3.39 per month (2-year plan)",
      security: "No-logs, kill switch, double VPN",
      coverage: "180+ countries",
      ux: "Clean, polished design",
      compatibility: "Win, Mac, iOS, Android, Linux, TV, Consoles, Browsers",
      connectivity: "Up to 10 devices",
    },
    slides: [nordSlide1, nordSlide2, nordSlide3],
    officialUrl: "https://nordvpn.com",
  },
  Surfshark: {
    fullName: "Surfshark",
    tagline: "Unlimited device connections with a single subscription",
    pros: [
      "Unlimited simultaneous connections",
      "Low rates on long-term plans",
      "Extra tools like Alternative ID and Antivirus",
      "24/7 Live chat support",
    ],
    cons: ["High month-to-month pricing", "No free plan", "Server count slightly lower than top leaders"],
    reviewText: `Surfshark’s app has a perfectly streamlined design. One unique feature offered by Surfshark is the Alternative ID tool, which you can use to sign up for sites that you don’t fully trust.`,
    specs: {
      price: "$2.29/mo (Promo)",
      security: "No-logs, kill switch, double VPN",
      coverage: "100+ countries",
      ux: "Streamlined, easy navigation",
      compatibility: "Win, Mac, iOS, Android, TV, Consoles, Browsers",
      connectivity: "Unlimited devices",
    },
    slides: [surfSlide1, surfSlide2, surfSlide3],
    officialUrl: "https://surfshark.com",
  },
  "Proton VPN": {
    fullName: "Proton VPN",
    tagline: "Unlimited free plan with no ads, logs, or data caps",
    pros: [
      "Best free plan in the industry",
      "Swiss-based privacy protection",
      "Open-source and audited apps",
      "High-speed servers across 120+ countries",
    ],
    cons: ["Free plan limited to one device", "Long-term rates can be high", "Customer support can be slower"],
    reviewText: `Proton VPN offers a free plan, and you don’t even need to create an account to start using this service. The app has a high-end feel, without being so flashy that it gets in the way of navigability.`,
    specs: {
      price: "Free tier available",
      security: "Swiss privacy, Secure Core",
      coverage: "120+ countries",
      ux: "Sleek, highly customizable",
      compatibility: "Win, Mac, iOS, Android, Linux, TV, Consoles",
      connectivity: "Up to 10 devices",
    },
    slides: [protonSlide1, protonSlide2, protonSlide3],
    officialUrl: "https://protonvpn.com",
  },
  "Private Internet Access": {
    fullName: "Private Internet Access",
    tagline: "Most customizable VPN with a massive global network",
    pros: [
      "Highly customizable security settings",
      "Massive server network in 91 countries",
      "Excellent value for long-term plans",
      "Open-source transparency",
    ],
    cons: ["US-based jurisdiction", "Interface can be overwhelming for beginners", "Speeds vary by location"],
    reviewText: `Private Internet Access (PIA) is a power user's dream. It offers extensive controls over encryption levels and protocol settings. Its server network is one of the largest in the world, ensuring a reliable connection almost anywhere.`,
    specs: {
      price: "$2.11/mo (3-year plan)",
      security: "Open-source, no-logs policy",
      coverage: "91 countries",
      ux: "Feature-rich and technical",
      compatibility: "Win, Mac, iOS, Android, Linux, Browsers",
      connectivity: "Unlimited devices",
    },
    slides: [piaSlide1, piaSlide2, piaSlide3],
    officialUrl: "https://www.privateinternetaccess.com",
  },
  Windscribe: {
    fullName: "Windscribe",
    tagline: "Powerful free tier with unique privacy tools",
    pros: [
      "Generous free plan (up to 10GB/mo)",
      "Unique R.O.B.E.R.T. ad/tracker blocker",
      "Unlimited device connections",
      "Great for geo-unblocking",
    ],
    cons: ["Smaller server network than giants", "Support is mostly via bot", "Interface can be quirky"],
    reviewText: `Windscribe stands out with its creative approach to privacy. The R.O.B.E.R.T. tool is one of the best integrated ad-blockers we've tested. Its 'Build-a-Plan' option is great for users who only need specific server locations.`,
    specs: {
      price: "$5.75/mo (Annual plan)",
      security: "Strong encryption, R.O.B.E.R.T. blocker",
      coverage: "69 countries",
      ux: "Simple but powerful",
      compatibility: "Win, Mac, iOS, Android, Linux, TV, Browsers",
      connectivity: "Unlimited devices",
    },
    slides: [windSlide1, windSlide2, windSlide3],
    officialUrl: "https://windscribe.com",
  },
  "Hide.me": {
    fullName: "Hide.me",
    tagline: "Privacy-focused VPN with advanced specialized features",
    pros: [
      "Advanced features like Double VPN and Bolt",
      "Solid free plan with no ads",
      "Independent audit confirms no-logs",
      "10Gbps servers for high performance",
    ],
    cons: ["Premium pricing is high", "Free plan has server limits", "App design is functional but plain"],
    reviewText: `Hide.me is built for performance and privacy. Their 'Bolt' technology optimizes speeds on Windows, and their Multihop implementation is exceptionally secure. It's a great choice for users who prioritize technical excellence.`,
    specs: {
      price: "$2.59/mo (Promo)",
      security: "Double VPN, Bolt speed tech",
      coverage: "85+ countries",
      ux: "Clean and technical",
      compatibility: "Win, Mac, iOS, Android, Linux, TV",
      connectivity: "Up to 10 devices",
    },
    slides: [hideSlide1, hideSlide2, hideSlide3],
    officialUrl: "https://hide.me",
  },
  PrivateVPN: {
    fullName: "PrivateVPN",
    tagline: "Stealth VPN technology for bypassing strict firewalls",
    pros: [
      "Excellent for bypassing censorship",
      "High-quality customer support",
      "Low latency for gaming",
      "Competitive pricing",
    ],
    cons: ["Smaller server count", "No browser extensions", "Desktop app feels dated"],
    reviewText: `PrivateVPN is a boutique provider that excels in quality over quantity. Their Stealth VPN mode is highly effective in countries with heavy internet restrictions. It offers a more personal support experience than larger providers.`,
    specs: {
      price: "$2.00/mo (Annual plan)",
      security: "Stealth Mode, 2048-bit encryption",
      coverage: "63 countries",
      ux: "Simple and straightforward",
      compatibility: "Win, Mac, iOS, Android, Routers",
      connectivity: "Up to 10 devices",
    },
    slides: [privatevpnSlide1, privatevpnSlide2, privatevpnSlide3],
    officialUrl: "https://privatevpn.com",
  },
  TunnelBear: {
    fullName: "TunnelBear",
    tagline: "The most user-friendly VPN with annual public audits",
    pros: [
      "Extremely simple to use",
      "Charming bear-themed interface",
      "Strong commitment to transparency",
      "Good for beginners",
    ],
    cons: ["Limited advanced features", "No double VPN", "Speeds can be average"],
    reviewText: `TunnelBear makes online privacy accessible to everyone. Its interface is fun and intuitive, and they are one of the few providers that undergo regular, public security audits. It's the perfect 'first VPN' for new users.`,
    specs: {
      price: "$3.33/mo (Promo)",
      security: "AES-256, annual audits",
      coverage: "47 countries",
      ux: "Charming and beginner-friendly",
      compatibility: "Win, Mac, iOS, Android, Browsers",
      connectivity: "Unlimited devices",
    },
    slides: [bearSlide1, bearSlide2, bearSlide3],
    officialUrl: "https://www.tunnelbear.com",
  },
};
