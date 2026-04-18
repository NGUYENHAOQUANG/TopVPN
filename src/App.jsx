import React from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import TrustIndicators from "./sections/TrustIndicators/TrustIndicators";
import TrendingList from "./sections/TrendingList/TrendingList";
import Comparison from "./Comparison";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="font-sans text-text antialiased">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <TrendingList />
        <Comparison />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
