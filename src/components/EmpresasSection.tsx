import { Building2, Zap, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { WA_LINKS } from "@/lib/whatsapp";

const plans = [
  {
    name: "PYME",
    speed: "200 Mbps",
    badge: "IDEAL PARA PYMES",
    badgeBg: "#1A1A1A",
    badgeText: "#9CA3AF",
    features: ["IP fija incluida", "SLA 99.5%", "Soporte prioritario"],
    ctaText: "Consultar",
    ctaBg: "#1F2937",
    ctaTextColor: "#D1D5DB",
    cardBg: "#141414",
    borderColor: "#2A2A2A",
    borderWidth: 1,
    waHref: WA_LINKS.empresasPyme,
  },
  {
    name: "CORPORATIVO",
    speed: "500 Mbps",
    badge: "MÁS ELEGIDO",
    badgeBg: "#FFFFFF33",
    badgeText: "#FFFFFF",
    rec: true,
    features: ["2 IPs fijas", "SLA 99.9%", "Soporte 24/7 dedicado", "Monitoreo proactivo"],
    ctaText: "Solicitar ahora",
    ctaBg: "#FFFFFF",
    ctaTextColor: "#FF6B00",
    cardBg: "#E87722",
    borderColor: "#FF8C00",
    borderWidth: 2,
    waHref: WA_LINKS.empresasCorporativo,
  },
  {
    name: "ENTERPRISE",
    speed: "1 Gbps",
    badge: "MÁXIMA CAPACIDAD",
    badgeBg: "#2A1500",
    badgeText: "#FF8C00",
    features: ["IPs fijas dedicadas", "SLA 99.99%", "Técnico exclusivo", "Redundancia de enlace"],
    ctaText: "Consultar",
    ctaBg: "#2A1500",
    ctaTextColor: "#FF8C00",
    cardBg: "#1C1C1C",
    borderColor: "#2A2A2A",
    borderWidth: 1,
    waHref: WA_LINKS.empresasEnterprise,
  },
];

const perks = [
  { icon: Zap, color: "#FF8C00", label: "Fibra simétrica garantizada" },
  { icon: ShieldCheck, color: "#4ADE80", label: "Contrato con SLA" },
  { icon: Headphones, color: "#A78BFA", label: "Soporte técnico dedicado" },
];

export default function EmpresasSection() {
  return (
    <section id="empresas" className="bg-ipnext-bg py-20 px-6 md:px-10 lg:px-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Building2 size={18} color="#FF6B00" />
            <span className="text-ipnext-orange font-bold text-[13px] tracking-[3px] uppercase">
              Empresas
            </span>
          </div>
          <h2 className="text-ipnext-text font-extrabold text-4xl lg:text-[44px]">
            Planes Dedicados para tu Negocio
          </h2>
          <p className="text-ipnext-muted text-lg max-w-2xl mx-auto">
            Conectividad empresarial con SLA garantizado, IPs fijas y soporte prioritario.
            Diseñada para que tu empresa nunca pare.
          </p>
        </div>

        {/* Perks */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.label} className="flex items-center gap-2">
                <Icon size={18} color={p.color} />
                <span className="text-ipnext-muted text-sm">{p.label}</span>
              </div>
            );
          })}
        </div>

        {/* Plan cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col gap-6 rounded-2xl p-10 w-full"
              style={{
                backgroundColor: plan.cardBg,
                border: `${plan.borderWidth}px solid ${plan.borderColor}`,
                maxWidth: plan.rec ? "390px" : "360px",
              }}
            >
              {/* Badge row */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] font-bold tracking-[2px] px-[14px] py-[6px] rounded-full"
                  style={{ backgroundColor: plan.badgeBg, color: plan.badgeText }}
                >
                  {plan.badge}
                </span>
                {plan.rec && (
                  <span className="text-[10px] font-bold tracking-[1px] px-3 py-[5px] rounded-full text-ipnext-orange bg-white">
                    RECOMENDADO
                  </span>
                )}
              </div>

              {/* Speed */}
              <div>
                <div className="text-white font-black text-5xl">{plan.speed}</div>
                <div
                  className="text-xs mt-1 font-medium"
                  style={{ color: plan.rec ? "#FFE4CC" : "#6B7280" }}
                >
                  Simétrico — igual bajada y subida
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <ArrowRight
                      size={14}
                      color={plan.rec ? "#FFE4CC" : "#FF6B00"}
                      className="shrink-0"
                    />
                    <span
                      className="text-sm"
                      style={{ color: plan.rec ? "#FFE4CC" : "#94A3B8" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-[14px] rounded-full font-semibold text-base mt-auto text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: plan.ctaBg, color: plan.ctaTextColor }}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-ipnext-subtle text-sm">
          ¿Necesitás algo a medida?{" "}
          <a href="#contacto" className="text-ipnext-orange hover:underline font-medium">
            Contactanos y armamos un plan exclusivo para tu empresa.
          </a>
        </p>
      </div>
    </section>
  );
}
