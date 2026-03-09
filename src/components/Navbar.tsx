import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-[60px] h-20 border-b border-ipnext-border"
      style={{ backgroundColor: "#0A0A0ACC", backdropFilter: "blur(12px)" }}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="IPNEXT logo"
          width={36}
          height={36}
          priority
          className="object-contain"
        />
        <span className="text-ipnext-text font-extrabold text-2xl tracking-[4px]">
          IPNEXT
        </span>
      </div>

      <div className="flex items-center gap-6 md:gap-8">
        <a
          href="#planes"
          className="text-ipnext-text font-semibold text-[15px] hover:text-ipnext-orange transition-colors hidden md:block"
        >
          Planes
        </a>
        <a
          href="#empresas"
          className="text-ipnext-text font-semibold text-[15px] hover:text-ipnext-orange transition-colors hidden md:block"
        >
          Empresas
        </a>
        <a
          href="#servicios"
          className="text-ipnext-text font-semibold text-[15px] hover:text-ipnext-orange transition-colors hidden md:block"
        >
          Servicios
        </a>
        <a
          href="#contacto"
          className="text-ipnext-text font-semibold text-[15px] hover:text-ipnext-orange transition-colors hidden md:block"
        >
          Contacto
        </a>
        <a
          href="#planes"
          className="bg-ipnext-orange text-white font-semibold text-sm px-6 py-[10px] rounded-full hover:bg-ipnext-orange-l transition-colors"
        >
          ¡Lo Quiero!
        </a>
      </div>
    </nav>
  );
}
