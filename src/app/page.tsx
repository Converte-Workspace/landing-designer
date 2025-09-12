import { Footer } from "./components/layout/footer";
import Header from "./components/layout/header";
import { Hero } from "./components/sections/hero";
import { Features } from "./components/sections/features";
import { MiddleInfo } from "./components/sections/middle-info";
import { MiddleOrders } from "./components/sections/middle-orders";
import { CTA } from "./components/sections/cta";
import { FooterWaveDivider } from "./components/ui/dividers/section-divider";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
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
      <div className="bg-section-b relative">
        <CTA />
        {/* Divider específico antes do footer: onda com gradiente da seção anterior para o footer */}
        <div className="pointer-events-none">
          <FooterWaveDivider from="b" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
