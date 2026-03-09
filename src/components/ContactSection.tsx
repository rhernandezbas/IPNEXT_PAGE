import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { WA_LINKS } from "@/lib/whatsapp";

const contacts = [
  {
    icon: MessageCircle,
    iconColor: "#FF6B00",
    title: "WhatsApp",
    desc: "Chateá con un asesor ahora mismo. Atención rápida y personalizada.",
    btnText: "Escribinos",
    btnBg: "#FF6B00",
    btnTextColor: "#FFFFFF",
    href: WA_LINKS.general,
    external: true,
  },
  {
    icon: Phone,
    iconColor: "#FF8C00",
    title: "Teléfono",
    desc: "Llamanos y un asesor te atiende en minutos. Lunes a sábado de 8 a 20 hs.",
    btnText: "Llamar ahora",
    btnBg: "#4A2000",
    btnTextColor: "#FFAA44",
    href: "tel:+54901150310800",
    external: false,
  },
  {
    icon: Mail,
    iconColor: "#A78BFA",
    title: "Email / Web",
    desc: "Envianos tu consulta por mail o completá el formulario web y te respondemos en el día.",
    btnText: "Consultar",
    btnBg: "#2A1500",
    btnTextColor: "#FFB366",
    href: "mailto:info@ipnext.com",
    external: false,
  },
];

const locations = [
  {
    city: "Mercedes",
    address: "Calle 27 Nº 291",
    mapsUrl: "https://maps.app.goo.gl/npvWHGyUd72hBt9v6",
  },
  {
    city: "Chivilcoy",
    address: "Colón 75",
    mapsUrl: "https://maps.app.goo.gl/nPc6R5tEgqDy1Ma76",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-ipnext-bg py-20 px-6 md:px-10 lg:px-[120px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <span className="text-ipnext-orange font-bold text-[13px] tracking-[3px] uppercase">
            Contacto
          </span>
          <h2 className="text-ipnext-text font-extrabold text-4xl lg:text-[44px]">
            Estamos para ayudarte
          </h2>
          <p className="text-ipnext-muted text-lg">
            Contactanos por el canal que prefieras — respondemos rápido.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col items-center gap-5 rounded-2xl p-10 border border-ipnext-border bg-ipnext-bg-card hover:border-ipnext-orange/40 transition-colors text-center"
              >
                <Icon size={36} color={c.iconColor} />
                <h3 className="text-ipnext-text font-bold text-xl">{c.title}</h3>
                <p className="text-ipnext-muted text-sm leading-relaxed">{c.desc}</p>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="px-7 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ backgroundColor: c.btnBg, color: c.btnTextColor }}
                >
                  {c.btnText}
                </a>
              </div>
            );
          })}
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} color="#FF6B00" />
            <span className="text-ipnext-orange font-bold text-[13px] tracking-[3px] uppercase">
              Nuestras Oficinas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <a
                key={loc.city}
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-2xl p-7 border border-ipnext-border bg-ipnext-bg-card hover:border-ipnext-orange/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-ipnext-dark-orange flex items-center justify-center shrink-0">
                  <MapPin size={22} color="#FF6B00" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-ipnext-text font-bold text-lg group-hover:text-ipnext-orange transition-colors">
                    {loc.city}
                  </span>
                  <span className="text-ipnext-muted text-sm">{loc.address}</span>
                  <span className="text-ipnext-orange text-xs font-medium mt-1">
                    Ver en Google Maps →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
