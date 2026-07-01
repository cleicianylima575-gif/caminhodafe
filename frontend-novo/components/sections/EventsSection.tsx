import { EventCard } from "@/components/cards/EventCard";

import { SectionTitle } from "@/components/ui/SectionTitle";

import { events } from "@/data/events";

export function EventsSection() {

  return (

    <section
      id="eventos"
      className="py-28 bg-[#f8f6f2]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Eventos"
          title="Próximos Eventos"
          description="Participe dos nossos eventos especiais preparados para fortalecer sua fé e aproximar ainda mais a comunidade."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {events.map((event) => (

            <EventCard
              key={event.title}
              title={event.title}
              date={event.date}
              description={event.description}
              image={event.image}
            />

          ))}

        </div>

      </div>

    </section>

  );

}