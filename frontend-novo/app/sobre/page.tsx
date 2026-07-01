import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SobrePage() {

  return (

    <>

      <Header />

      <main className="min-h-screen bg-[#f8f6f2] text-[#1f1f1f] pt-24">

        <section className="bg-[#1d2b53] text-white py-28 px-6 text-center">

          <p className="text-[#c8a96b] uppercase tracking-[0.3em] font-semibold">
            Sobre nós
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Caminho da Fé
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">

            Somos uma comunidade cristã dedicada a levar esperança,
            amor e transformação através da palavra de Deus.

          </p>

        </section>

        <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold text-[#1d2b53]">
              Nossa Missão
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">

              Nossa missão é acolher pessoas, fortalecer famílias
              e espalhar o evangelho através da fé, da oração
              e da comunhão.

            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">

              Queremos construir uma comunidade viva,
              moderna e conectada com Deus e com as pessoas.

            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#ece7dd]">

            <h3 className="text-2xl font-bold text-[#1d2b53]">
              Valores
            </h3>

            <ul className="mt-8 space-y-5 text-gray-600">

              <li>• Fé e esperança</li>

              <li>• Amor ao próximo</li>

              <li>• Comunhão</li>

              <li>• Integridade</li>

              <li>• Serviço à comunidade</li>

            </ul>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}