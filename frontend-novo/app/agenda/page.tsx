const schedules = [
  {
    day: "Domingo",
    title: "Culto da Família",
    time: "18:00",
    description:
      "Um culto especial para toda a família com louvor, palavra e comunhão.",
  },

  {
    day: "Quarta-feira",
    title: "Culto de Oração",
    time: "19:30",
    description:
      "Momento dedicado à oração, intercessão e fortalecimento espiritual.",
  },

  {
    day: "Sexta-feira",
    title: "Culto dos Jovens",
    time: "19:00",
    description:
      "Encontro jovem com louvor, mensagem e muita comunhão.",
  },
];

export default function AgendaPage() {

  return (

    <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1f]">

      <section className="bg-[#1d2b53] text-white py-28 px-6 text-center">

        <p className="text-[#c8a96b] uppercase tracking-[0.3em] font-semibold">
          Agenda
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          Programação da Igreja
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">

          Confira nossos cultos, encontros e programações semanais.

        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-8">

          {schedules.map((schedule) => (

            <div
              key={schedule.title}
              className="bg-white rounded-3xl p-8 border border-[#ece7dd] shadow-sm hover:shadow-2xl transition"
            >

              <p className="text-[#c8a96b] font-semibold">
                {schedule.day}
              </p>

              <h2 className="mt-4 text-2xl font-bold text-[#1d2b53]">
                {schedule.title}
              </h2>

              <p className="mt-4 text-3xl font-bold text-[#1d2b53]">
                {schedule.time}
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {schedule.description}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}