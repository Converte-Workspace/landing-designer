import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { MiddleInfo } from "./components/middle/middle-info";
import { MiddleOrders } from "./components/middle/middle-orders";
import { CTA } from "./components/cta/cta";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-gradient-to-br from-black via-red-950 to-red-900">
        <Header />
        <Hero />
      </div>
      <div className="bg-gradient-to-br from-neutral-900 via-red-950 to-red-900">
        <Features />
      </div>
      <div className="bg-gradient-to-br from-black via-red-950 to-red-900">
        <MiddleInfo />
      </div>
      <div className="bg-gradient-to-br from-neutral-900 via-red-950 to-red-900">
        <MiddleOrders />
      </div>
      <div className="bg-gradient-to-br from-black via-red-950 to-red-900">
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
