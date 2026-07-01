import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
}: ButtonProps) {

  const styles = {
    primary:
      "bg-[#c8a96b] hover:bg-[#b89555] text-black",

    secondary:
      "border border-white text-black hover:bg-white hover:text-black",
  };

  const className = `
    px-6 py-3 rounded-xl
    font-semibold
    transition
    ${styles[variant]}
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}