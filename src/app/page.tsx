"use client";
import Header from "./header";
import { HeroSection } from "./components/HeroSection";
import PortfolioMarquee from "./components/PortfolioMarquee";
import { InvestmentPrinciples } from "./components/InvestmentPrinciples";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="principles">
          <InvestmentPrinciples />
        </div>
        <div id="portfolio">
          <PortfolioMarquee />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
