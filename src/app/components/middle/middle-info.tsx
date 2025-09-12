"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function MiddleInfo() {
  const [active, setActive] = useState(1);

  const goToPrev = () => {
    setActive((prev) => (prev - 1 + 3) % 3);
  };

  const goToNext = () => {
    setActive((prev) => (prev + 1) % 3);
  };

  const getCardPosition = (index: number) => {
    const diff = (index - active + 3) % 3;
    switch (diff) {
      case 0: return { x: 0, scale: 1.05, opacity: 1, zIndex: 30, rotateY: 0 };
      case 1: return { x: 350, scale: 0.85, opacity: 0.8, zIndex: 20, rotateY: 10 };
      case 2: return { x: -350, scale: 0.85, opacity: 0.8, zIndex: 20, rotateY: -10 };
      default: return { x: 0, scale: 1, opacity: 1, zIndex: 10, rotateY: 0 };
    }
  };

  const cardBase =
    "group absolute w-80 h-80 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 overflow-hidden shadow-2xl shadow-black/20 transform-style-preserve-3d";
  const cardCenter = "ring-1 ring-red-600/40";
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

        <div className="relative flex items-center justify-center">
          <button
            onClick={goToPrev}
            className="absolute left-0 z-20 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Serviço anterior"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="relative flex items-center justify-center h-80 mx-16 perspective-1000">
          <motion.div
            layout
            initial={false}
            animate={getCardPosition(0)}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.03 }}
            className={`${cardBase} ${getCardPosition(0).zIndex === 30 ? cardCenter : ""}`}
            style={{ zIndex: getCardPosition(0).zIndex }}
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
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
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors text-center">
              Desenvolvimento Web
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
              Sites modernos e responsivos usando as tecnologias mais avançadas
              do mercado.
            </p>
            <ul className="text-gray-400 text-sm text-center">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Performance otimizada</li>
            </ul>
          </motion.div>

          <motion.div
            layout
            initial={false}
            animate={getCardPosition(1)}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.03 }}
            className={`${cardBase} ${getCardPosition(1).zIndex === 30 ? cardCenter : ""}`}
            style={{ zIndex: getCardPosition(1).zIndex }}
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
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
            <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
              Apps nativos e híbridos para iOS e Android com experiência
              excepcional.
            </p>
            <ul className="text-gray-400 text-sm text-center">
              <li>• React Native</li>
              <li>• Flutter</li>
              <li>• UI/UX otimizado</li>
              <li>• App Store deploy</li>
            </ul>
          </motion.div>

          <motion.div
            layout
            initial={false}
            animate={getCardPosition(2)}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.03 }}
            className={`${cardBase} ${getCardPosition(2).zIndex === 30 ? cardCenter : ""}`}
            style={{ zIndex: getCardPosition(2).zIndex }}
          >
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
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
            <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
              Lojas virtuais completas com integração de pagamentos e gestão
              avançada.
            </p>
            <ul className="text-gray-400 text-sm text-center">
              <li>• Shopify & WooCommerce</li>
              <li>• Pagamentos integrados</li>
              <li>• Dashboard administrativo</li>
              <li>• SEO otimizado</li>
            </ul>
          </motion.div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 z-20 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Próximo serviço"
          >
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
        
        /* Classes de perspectiva e transform 3D */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
