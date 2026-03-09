"use client";

import { Camera, ShieldAlert, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    iconColor: "#FF8C00",
    iconBg: "#2A1500",
    tag: "SEGURIDAD",
    tagColor: "#FF8C00",
    title: "Cámaras de Seguridad",
    subtitle: "Vigilancia inteligente 24/7",
    description:
      "Instalación y configuración de sistemas de videovigilancia IP. Acceso remoto desde tu celular, grabación en la nube y alertas en tiempo real.",
    features: [
      "Cámaras HD / 4K interior y exterior",
      "Visión nocturna y detección de movimiento",
      "Acceso remoto desde cualquier dispositivo",
      "Almacenamiento local y en la nube",
    ],
    ctaText: "Solicitar instalación",
    ctaBg: "#2A1500",
    ctaTextColor: "#FF8C00",
    cardBg: "#141414",
    borderColor: "#2A2A2A",
    accentBorder: "#FF8C00",
  },
  {
    icon: ShieldAlert,
    iconColor: "#4ADE80",
    iconBg: "#052010",
    tag: "SEGURIDAD",
    tagColor: "#4ADE80",
    title: "Alarmas y Control de Acceso",
    subtitle: "Protección total para tu hogar o empresa",
    description:
      "Sistemas de alarma perimetral con monitoreo 24/7. Integración con cámaras, sensores y control de acceso biométrico.",
    features: [
      "Sensores de movimiento y apertura",
      "Panel de control centralizado",
      "Monitoreo remoto y alertas SMS/App",
      "Control de acceso por huella o tarjeta",
    ],
    ctaText: "Solicitar instalación",
    ctaBg: "#052010",
    ctaTextColor: "#4ADE80",
    cardBg: "#141414",
    borderColor: "#2A2A2A",
    accentBorder: "#4ADE80",
    featured: true,
  },
  {
    icon: Server,
    iconColor: "#A78BFA",
    iconBg: "#1a1030",
    tag: "HOSTING",
    tagColor: "#A78BFA",
    title: "VPS & Hosting Profesional",
    subtitle: "Servidores en la nube de alta disponibilidad",
    description:
      "Servidores virtuales privados con recursos dedicados, panel de control intuitivo y soporte técnico especializado para tus proyectos.",
    features: [
      "VPS Linux / Windows desde 1 vCPU",
      "SSD NVMe de alta velocidad",
      "IPs dedicadas y bandwidth ilimitado",
      "Panel cPanel / Plesk incluido",
    ],
    ctaText: "Ver planes VPS",
    ctaBg: "#1a1030",
    ctaTextColor: "#A78BFA",
    cardBg: "#141414",
    borderColor: "#2A2A2A",
    accentBorder: "#A78BFA",
  },
];

export default function OtrosServiciosSection() {
  return (
    <section id="servicios" className="bg-ipnext-bg-sec py-20 px-6 md:px-10 lg:px-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <span className="text-ipnext-orange-l font-bold text-[13px] tracking-[3px] uppercase">
            Más que Internet
          </span>
          <h2 className="text-ipnext-text font-extrabold text-4xl lg:text-[44px]">
            Otros Servicios
          </h2>
          <p className="text-ipnext-muted text-lg max-w-2xl mx-auto">
            Soluciones integrales para tu hogar o empresa. Seguridad, vigilancia
            y hosting profesional en un solo lugar.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col gap-6 rounded-2xl p-10 border transition-all hover:scale-[1.02] duration-200"
                style={{
                  backgroundColor: s.cardBg,
                  borderColor: s.borderColor,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = s.accentBorder;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = s.borderColor;
                }}
              >
                {/* Icon + tag */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: s.iconBg }}
                  >
                    <Icon size={24} color={s.iconColor} />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[2px]"
                    style={{ color: s.tagColor }}
                  >
                    {s.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-ipnext-text font-bold text-xl">{s.title}</h3>
                  <p className="text-sm font-medium" style={{ color: s.iconColor }}>
                    {s.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-ipnext-muted text-sm leading-relaxed">{s.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <ArrowRight size={14} color={s.iconColor} className="shrink-0 mt-0.5" />
                      <span className="text-ipnext-muted text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="mt-auto w-full py-3 rounded-full font-semibold text-sm text-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: s.ctaBg, color: s.ctaTextColor }}
                >
                  {s.ctaText}
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-ipnext-border"
          style={{ backgroundColor: "#111111" }}
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-ipnext-text font-bold text-xl">
              ¿Necesitás una solución personalizada?
            </h3>
            <p className="text-ipnext-muted text-sm">
              Combiná internet + seguridad + hosting en un solo paquete con descuento especial.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-ipnext-orange text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-ipnext-orange-l transition-colors whitespace-nowrap"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
