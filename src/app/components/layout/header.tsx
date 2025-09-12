export default function Header() {
  return (
    <header className="fixed w-full flex justify-center bg-black/20 backdrop-blur-md border-b border-white/10 py-4 z-50">
      <nav className="flex justify-between items-center w-11/12 max-w-6xl">
        <div className="flex items-center space-x-2">
          <img src="/images/logo-normal.png" alt="Logo" className="size-10" />
          <span className="text-white font-bold text-xl">Creative</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-700 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#services"
            className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
          >
            Serviços
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-700 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#portfolio"
            className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-700 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
          >
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-red-700 to-red-400 hover:from-red-800 hover:to-red-600 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
            Começar Projeto
          </button>

          <button className="md:hidden text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
