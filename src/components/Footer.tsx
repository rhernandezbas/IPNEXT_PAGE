const links = ["Suscríbete", "Estado", "Ayuda", "Privacidad"];

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 md:px-10 lg:px-[120px] py-10"
      style={{ backgroundColor: "#050505" }}
    >
      <span className="text-ipnext-text font-extrabold text-[22px] tracking-[4px]">
        IPNEXT
      </span>

      <div className="flex items-center gap-8 md:gap-10">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-ipnext-subtle text-sm hover:text-ipnext-muted transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <p className="text-ipnext-dim text-[13px]">
        © 2026 IPNEXT. Todos los derechos reservados.
      </p>
    </footer>
  );
}
