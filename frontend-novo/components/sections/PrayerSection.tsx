export function PrayerSection() {
  return (
    <section
      id="oracao"
      className="relative py-28 px-6 overflow-hidden"
    >

      <div className="absolute inset-0 bg-[#1d2b53]" />

      <div className="absolute inset-0 bg-[url('/imagens/event4.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-4xl mx-auto text-center text-white">

        <p className="uppercase tracking-[0.3em] text-[#c8a96b] font-semibold">
          Oração
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
          Precisa de oração?
          <br />
          Nossa comunidade ora por você.
        </h2>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
          Compartilhe seu pedido de oração de forma simples e segura.
          Nossa comunidade estará unida em fé por sua vida,
          sua família e suas necessidades.
        </p>

        <button className="mt-10 bg-[#c8a96b] hover:bg-[#b89555] text-white px-8 py-4 rounded-full font-semibold transition duration-300">

          Enviar Pedido de Oração

        </button>

      </div>

    </section>
  );
}