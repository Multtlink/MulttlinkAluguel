import Link from "next/link";

export default function Banner() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[url('/homeBanner.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-purple-600/20 to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="inline-block bg-black/40 backdrop-blur-sm rounded-xl px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-2xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight">
            Aluguel de Notebooks B2B
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Soluções flexíveis de aluguel de notebooks de alta performance para
            empresas de todos os tamanhos
          </p>

          <a
            href="#notebooks"
            className="mt-6 inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow"
          >
            Escolher meu notebook
          </a>
        </div>
      </div>
    </main>
  );
}
