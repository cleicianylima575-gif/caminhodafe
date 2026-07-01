export default function OracaoPage() {

  return (

    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1f]">

      <section className="bg-[#1d2b53] text-white py-28 px-6 text-center">

        <p className="text-[#c8a96b] uppercase tracking-[0.3em] font-semibold">
          Oração
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          Pedido de Oração
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">

          Compartilhe seu pedido conosco.
          Nossa equipe estará orando por você e sua família.

        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">

        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#ece7dd]">

          <form className="space-y-8">

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">
                Seu nome
              </label>

              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full rounded-2xl border border-[#e5e5e5] px-5 py-4 outline-none focus:border-[#c8a96b] transition"
              />

            </div>

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">
                Seu e-mail
              </label>

              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full rounded-2xl border border-[#e5e5e5] px-5 py-4 outline-none focus:border-[#c8a96b] transition"
              />

            </div>

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">
                Pedido de oração
              </label>

              <textarea
                rows={7}
                placeholder="Escreva seu pedido..."
                className="w-full rounded-2xl border border-[#e5e5e5] px-5 py-4 outline-none focus:border-[#c8a96b] transition resize-none"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-[#1d2b53] hover:bg-[#162040] transition text-white py-4 rounded-2xl font-semibold"
            >

              Enviar pedido

            </button>

          </form>

        </div>

      </section>

    </main>

  );

}