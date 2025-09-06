import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/capa-site.png"
          alt="Background"
          fill
          quality={100}
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-black/10 z-1"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-700/20 rounded-md blur-3xl animate-pulse z-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-md blur-3xl animate-pulse delay-1000 z-1"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme Seus
            <span className="bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">
              {" "}
              Projetos
            </span>
            <br />
            em Arte Digital
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Designs exclusivos que destacam sua marca, atraem clientes e elevam
            sua presença ao próximo nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
              Entre em contato
            </button>
            <button className="border-2 border-white/30 text-white font-semibold px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Portfolio
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-md flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-md mt-2"></div>
        </div>
      </div>
    </section>
  );
}
