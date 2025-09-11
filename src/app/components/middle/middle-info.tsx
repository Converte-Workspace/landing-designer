"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MiddleInfo() {
  const [active, setActive] = useState(1);

  const handleNext = () => setActive((prev) => (prev + 1) % 3);
  const handlePrev = () => setActive((prev) => (prev + 2) % 3);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 12000);
    return () => clearInterval(id);
  }, []);

  const left = (active + 2) % 3;
  const center = active % 3;
  const right = (active + 1) % 3;

  const cardBase =
    "group flex-1 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(.22,.61,.36,1)] shadow-2xl shadow-black/20";
  const cardCenter = "order-2 ring-1 ring-red-600/40";
  return (
    <section
      id="services"
      className="w-full py-16 md:py-20 relative overflow-hidden overscroll-none"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento digital, desde o
            conceito até a implementação final.
          </p>
        </div>

        <div className="relative flex items-center">
          <button
            aria-label="Anterior"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex flex-row gap-6 items-stretch select-none overflow-hidden mx-12 w-full">
          <motion.div
            layout
            initial={false}
            animate={{
              opacity: center === 0 ? 1 : 0.55,
              scale: center === 0 ? 1.02 : 0.98,
              backgroundColor: center === 0 ? "rgb(39,39,42)" : "rgba(24,24,27,0.80)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
              layout: { duration: 0.6 },
              opacity: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
              backgroundColor: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
            }}
            whileHover={{ scale: 1.03 }}
            className={`${cardBase} ${left === 0 ? "order-1" : right === 0 ? "order-3" : cardCenter} w-full min-w-0`}
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
              Desenvolvimento Web
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Sites modernos e responsivos usando as tecnologias mais avançadas
              do mercado.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Performance otimizada</li>
            </ul>
          </motion.div>

          <motion.div
            layout
            initial={false}
            animate={{
              opacity: center === 1 ? 1 : 0.55,
              scale: center === 1 ? 1.02 : 0.98,
              backgroundColor: center === 1 ? "rgb(39,39,42)" : "rgba(24,24,27,0.80)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
              layout: { duration: 0.6 },
              opacity: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
              backgroundColor: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
            }}
            whileHover={{ scale: 1.03 }}
            className={`${cardBase} ${left === 1 ? "order-1" : right === 1 ? "order-3" : cardCenter} w-full min-w-0`}
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-400 transition-colors">
              Aplicativos Mobile
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Apps nativos e híbridos para iOS e Android com experiência
              excepcional.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• React Native</li>
              <li>• Flutter</li>
              <li>• UI/UX otimizado</li>
              <li>• App Store deploy</li>
            </ul>
          </motion.div>

          <motion.div
            layout
            initial={false}
            animate={{
              opacity: center === 2 ? 1 : 0.55,
              scale: center === 2 ? 1.02 : 0.98,
              backgroundColor: center === 2 ? "rgb(39,39,42)" : "rgba(24,24,27,0.80)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
              layout: { duration: 0.6 },
              opacity: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
              backgroundColor: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
            }}
            whileHover={{ scale: 1.03 }}
            className={`${cardBase} ${left === 2 ? "order-1" : right === 2 ? "order-3" : cardCenter} w-full min-w-0`}
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
              E-commerce
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Lojas virtuais completas com integração de pagamentos e gestão
              avançada.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Shopify & WooCommerce</li>
              <li>• Pagamentos integrados</li>
              <li>• Dashboard administrativo</li>
              <li>• SEO otimizado</li>
            </ul>
          </motion.div>

          </div>

          <button
            aria-label="Próximo"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        /* Oculta qualquer scrollbar dentro da seção services */
        #services,
        #services * {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        #services::-webkit-scrollbar,
        #services *::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none; /* Chrome/Safari/Edge */
        }
      `}</style>
    </section>
  );
}
