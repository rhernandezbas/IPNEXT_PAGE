import { MessageCircle, Phone, Mail } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    iconColor: "#FF6B00",
    title: "WhatsApp",
    desc: "Chateá con un asesor ahora mismo. Atención rápida y personalizada.",
    btnText: "Escribinos",
    btnBg: "#FF6B00",
    btnTextColor: "#FFFFFF",
    href: "https://wa.me/",
  },
  {
    icon: Phone,
    iconColor: "#FF8C00",
    title: "Teléfono",
    desc: "Llamanos y un asesor te atiende en minutos. Lunes a sábado de 8 a 20 hs.",
    btnText: "Llamar ahora",
    btnBg: "#4A2000",
    btnTextColor: "#FFAA44",
    href: "tel:",
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
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-ipnext-bg py-20 px-6 md:px-10 lg:px-[120px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col items-center gap-5 rounded-2xl p-10 border border-ipnext-border bg-ipnext-bg-card hover:border-ipnext-orange/40 transition-colors text-center"
              >
                <Icon size={36} color={c.iconColor} />
                <h3 className="text-ipnext-text font-bold text-xl">
                  {c.title}
                </h3>
                <p className="text-ipnext-muted text-sm leading-relaxed">
                  {c.desc}
                </p>
                <a
                  href={c.href}
                  className="px-7 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ backgroundColor: c.btnBg, color: c.btnTextColor }}
                >
                  {c.btnText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
