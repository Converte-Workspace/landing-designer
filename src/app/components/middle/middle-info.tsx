export function MiddleInfo() {
  return (
    <section
      id="services"
      className="w-full py-20 relative overflow-hidden"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-zinc-900 via-red-950 to-black border border-red-900/30 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-red-900 hover:to-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-800/30">
            <div className="w-16 h-16 bg-gradient-to-r from-red-700 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
          </div>

          <div className="group bg-gradient-to-br from-zinc-900 via-red-900 to-black border border-red-900/30 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-red-800 hover:to-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-700/30">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
          </div>

          <div className="group bg-gradient-to-br from-zinc-900 via-red-800 to-black border border-red-900/30 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-black hover:to-red-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30">
            <div className="w-16 h-16 bg-gradient-to-r from-black to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}
