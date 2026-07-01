import { schedules } from "@/data/schedules";

import { SectionTitle } from "@/components/ui/SectionTitle";

import { FadeUp } from "@/components/providers/FadeUp";

export function ScheduleSection() {

  return (

    <section
      id="agenda"
      className="py-28 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <FadeUp>

          <SectionTitle
            subtitle="Programação"
            title="Nossos Cultos"
            description="Participe dos nossos encontros semanais e viva momentos especiais de fé, adoração e comunhão."
          />

        </FadeUp>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {schedules.map((schedule, index) => (

            <FadeUp
              key={schedule.title}
              delay={index * 0.15}
            >

              <div className="bg-[#f8f6f2] rounded-3xl p-8 border border-[#ece7dd] hover:shadow-xl transition">

                <p className="text-[#c8a96b] font-semibold">
                  {schedule.day}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#1d2b53]">
                  {schedule.title}
                </h3>

                <p className="mt-4 text-gray-600 text-lg">
                  {schedule.time}
                </p>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>

    </section>

  );

}