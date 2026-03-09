const links = ["Suscríbete", "Estado", "Ayuda", "Privacidad"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#050505" }}>
      {/* Main footer row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 md:px-10 lg:px-[120px] py-10">
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
      </div>

      {/* Legal bar */}
      <div className="border-t border-ipnext-border px-6 md:px-10 lg:px-[120px] py-5">
        <p className="text-center text-[12px] text-ipnext-subtle leading-relaxed">
          <span className="font-semibold text-ipnext-muted">IPNEXT S.A.</span>
          {" · "}CUIT: 30-70849985-0
          {" · "}Persona Jurídica
          {" · "}Domicilio fiscal: Calle 27 Nº 279, Mercedes, Provincia de Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  );
}
