const prayerRequests = [
  {
    name: "Maria",
    request: "Oração pela minha família.",
  },

  {
    name: "João",
    request: "Pela minha saúde e trabalho.",
  },

  {
    name: "Ana",
    request: "Paz e direção espiritual.",
  },
];

export default function AdminPage() {

  return (

    <main className="min-h-screen bg-[#f4f1ea] text-[#1f1f1f]">

      <section className="bg-[#1d2b53] text-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="text-[#c8a96b] uppercase tracking-[0.3em] font-semibold">
            Painel Administrativo
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Dashboard da Igreja
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-3xl">
            Gerencie pedidos de oração, eventos e informações da comunidade.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#ece7dd]">

            <p className="text-gray-500">
              Pedidos de oração
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#1d2b53]">
              24
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#ece7dd]">

            <p className="text-gray-500">
              Eventos ativos
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#1d2b53]">
              8
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#ece7dd]">

            <p className="text-gray-500">
              Membros online
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#1d2b53]">
              312
            </h2>

          </div>

        </div>

        <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm border border-[#ece7dd]">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[#c8a96b] uppercase tracking-[0.3em] font-semibold">
                Oração
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#1d2b53]">
                Pedidos Recentes
              </h2>

            </div>

          </div>

          <div className="mt-10 space-y-6">

            {prayerRequests.map((request) => (

              <div
                key={request.name}
                className="rounded-2xl border border-[#ece7dd] p-6"
              >

                <h3 className="text-xl font-bold text-[#1d2b53]">
                  {request.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {request.request}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}