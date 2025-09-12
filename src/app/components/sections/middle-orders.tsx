export function MiddleOrders() {
  return (
    <section
      id="portfolio"
      className="w-full py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e
            inovação para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <h4 className="text-white font-semibold">
                    Projeto 1
                  </h4>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                Projeto 1
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Aqui irá um breve resumo do projeto, destacando suas principais
                funcionalidades e tecnologias utilizadas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">2025</span>
                <button className="bg-gradient-to-r from-red-400 to-red-800 text-white font-semibold px-3 py-1 rounded-md hover:from-red-800 hover:to-black transition-colors">
                  Ver projeto →
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div className="h-48 bg-gradient-to-br from-pink-500 to-red-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <h4 className="text-white font-semibold">Projeto 2</h4>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Projeto 2
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Aqui irá um breve resumo do projeto, destacando suas principais
                funcionalidades e tecnologias utilizadas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">2025</span>
                <button className="bg-gradient-to-r from-red-400 to-red-800 text-white font-semibold px-3 py-1 rounded-md hover:from-red-800 hover:to-black transition-colors">
                  Ver projeto →
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <h4 className="text-white font-semibold">Projeto 3</h4>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                Projeto 3
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
Aqui irá um breve resumo do projeto, destacando suas principais
                funcionalidades e tecnologias utilizadas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                  teste
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">2025</span>
                <button className="bg-gradient-to-r from-red-400 to-red-800 text-white font-semibold px-3 py-1 rounded-md hover:from-red-800 hover:to-black transition-colors">
                  Ver projeto →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <button className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-700/25">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
