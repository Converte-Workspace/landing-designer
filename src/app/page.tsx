import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { MiddleInfo } from "./components/middle/middle-info";
import { MiddleOrders } from "./components/middle/middle-orders";
import { CTA } from "./components/cta/cta";
import { FooterWaveDivider } from "./components/dividers/section-divider";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Top: only banner (no gradients), same structure/flow */}
      <div className="relative">
        <Header />
        <Hero />
      </div>

      {/* Sections with soft, textured gradients */}
      <div className="bg-section-a">
        <Features />
      </div>
      <div className="bg-section-b">
        <MiddleInfo />
      </div>
      <div className="bg-section-a">
        <MiddleOrders />
      </div>
      <div className="bg-section-b">
        <CTA />
      </div>
      {/* Divider específico antes do footer: onda com gradiente da seção anterior para o footer */}
      <FooterWaveDivider from="b" />
      <Footer />
    </div>
  );
}
