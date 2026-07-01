import { SectionTitle } from "@/components/ui/SectionTitle";

import { NewsCard } from "@/components/cards/NewsCard";

import { news } from "@/data/news";

export function NewsSection() {

  return (

    <section
      id="noticias"
      className="py-28 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Notícias"
          title="Últimas Notícias"
          description="Acompanhe as novidades, projetos e acontecimentos da nossa comunidade."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {news.map((item) => (

            <NewsCard
              key={item.title}
              title={item.title}
              description={item.description}
              date={item.date}
            />

          ))}

        </div>

      </div>

    </section>

  );

}