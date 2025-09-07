export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo-white.png"
                alt="Logo"
                className="size-10"
              />
              <span className="text-white font-bold text-xl">Creative</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos ideias em soluções excepcionais.
              Criatividade, tecnologia e resultados em cada projeto.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Aplicativos Mobile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Consultoria Digital
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Empresa</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contato@empresa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Teste, TE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-2">
              Envie seu e-mail
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Envie o e-mail para receber todas as novidades de NB Creative
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-black/40 border border-red-900/40 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 NB. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
