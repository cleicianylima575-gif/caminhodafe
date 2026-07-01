type SectionTitleProps = {
  subtitle: string;
  title: string;
  description: string;
};

export function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {

  return (

    <div className="text-center">

      <p className="text-[#c8a96b] uppercase tracking-[0.3em] font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1d2b53]">
        {title}
      </h2>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>

    </div>

  );

}