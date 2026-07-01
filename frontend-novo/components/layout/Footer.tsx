import Link from "next/link";

const links = [
  {
    label: "Início",
    href: "/",
  },

  {
    label: "Sobre",
    href: "/sobre",
  },

  {
    label: "Agenda",
    href: "/agenda",
  },

  {
    label: "Oração",
    href: "/oracao",
  },
];

export function Footer() {

  return (

    <footer className="bg-[#111827] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          <div>

            <h2 className="text-3xl font-bold">
              Caminho da Fé
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">

              Uma comunidade dedicada a espalhar esperança,
              amor e transformação através da fé.

            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Navegação
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[#c8a96b] transition"
                >

                  {link.label}

                </Link>

              ))}

            </nav>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Contato
            </h3>

            <div className="mt-6 space-y-4 text-white/70">

              <p>
                contato@caminhodafe.com
              </p>

              <p>
                (92) 99999-9999
              </p>

              <p>
                Manaus - Amazonas
              </p>

            </div>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">

          © 2026 Caminho da Fé. Todos os direitos reservados.

        </div>

      </div>

    </footer>

  );

}