export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-red-700">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-6">
          Vamos dar vida ao seu projeto?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Entre em contato e descubra como podemos criar designs incríveis que
          destacam sua marca no mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-white text-white font-semibold px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-300">
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
