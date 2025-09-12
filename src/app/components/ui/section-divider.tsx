type Props = {
  to?: "a" | "b"; // Cor de destino baseada nos wrappers .bg-section-a/.bg-section-b
  invert?: boolean; // Inverte verticalmente a onda
  className?: string;
};

export function SectionDivider({ to = "a", invert = false, className = "" }: Props) {
  // Cor base igual ao início da próxima seção
  // a => topo de .bg-section-a | b => topo de .bg-section-b
  const baseColor = to === "a" ? "#120909" : "#0a0a0a";
  const gradId = `dividerGrad-${to}-${invert ? "inv" : "norm"}`;

  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <svg
        className="block w-full h-48 sm:h-56 md:h-72"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={invert ? baseColor : "#000000"} />
            <stop offset="100%" stopColor={invert ? "#000000" : baseColor} />
          </linearGradient>
        </defs>
        <g transform={invert ? "scale(1,-1) translate(0,-120)" : undefined}>
          <path
            d="M0,60 C 250,55 450,70 600,90 C 780,112 1000,95 1200,85 L1200,120 L0,120 Z"
            fill={`url(#${gradId})`}
          />
        </g>
      </svg>
    </div>
  );
}

// Variante exclusiva para antes do Footer: usa o mesmo estilo do SectionDivider do topo
// mas com a cor direcionada para o footer
export function FooterWaveDivider({ from = "b", className = "" }: { from?: "a" | "b"; className?: string }) {
  const baseColor = "#0a0a0a"; // Cor do footer (bg-gray-900)
  const gradId = `footerWaveGrad-${from}`;

  return (
    <div aria-hidden className={`pointer-events-none absolute bottom-0 left-0 right-0 ${className}`}>
      <svg
        className="block w-full h-24 sm:h-32 md:h-40"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor={baseColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C 250,55 450,70 600,90 C 780,112 1000,95 1200,85 L1200,120 L0,120 Z"
          fill={`url(#${gradId})`}
        />
      </svg>
    </div>
  );
}
