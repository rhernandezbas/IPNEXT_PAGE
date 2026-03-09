import { Zap, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    iconColor: "#FF8C00",
    title: "Velocidad Extrema",
    desc: "Hasta 1 Gbps de velocidad real sin throttling. Siempre al máximo rendimiento.",
  },
  {
    icon: ShieldCheck,
    iconColor: "#4ADE80",
    title: "Red Segura",
    desc: "Protección integrada contra amenazas. Tu conexión siempre privada y protegida.",
  },
  {
    icon: Headphones,
    iconColor: "#A78BFA",
    title: "Soporte 24/7",
    desc: "Técnicos disponibles todo el día. Instalación GRATIS y atención personalizada.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-ipnext-bg py-20 px-6 md:px-10 lg:px-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <h2 className="text-ipnext-text font-extrabold text-4xl lg:text-[44px] text-center">
          ¿Por qué IPNEXT?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex flex-col gap-4 rounded-2xl p-9 border border-ipnext-border bg-ipnext-bg-card hover:border-ipnext-orange/40 transition-colors"
              >
                <Icon size={32} color={feat.iconColor} />
                <h3 className="text-ipnext-text font-bold text-xl">
                  {feat.title}
                </h3>
                <p className="text-ipnext-muted text-[15px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
