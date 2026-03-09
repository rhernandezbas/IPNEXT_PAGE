function FiberCard({
  speed,
  badge,
  badgeBg,
  badgeText,
  description,
  descColor,
  featured,
  recBadge,
  ctaText,
  ctaBg,
  ctaTextColor,
  cardBg,
  borderColor,
  borderWidth = 1,
  width,
}: {
  speed: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  descColor: string;
  featured?: boolean;
  recBadge?: boolean;
  ctaText: string;
  ctaBg: string;
  ctaTextColor: string;
  cardBg: string;
  borderColor: string;
  borderWidth?: number;
  width?: string;
}) {
  return (
    <div
      className="flex flex-col gap-6 rounded-2xl p-10 w-full"
      style={{
        backgroundColor: cardBg,
        border: `${borderWidth}px solid ${borderColor}`,
        maxWidth: width || "360px",
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-bold tracking-[2px] px-[14px] py-[6px] rounded-full"
          style={{ backgroundColor: badgeBg, color: badgeText }}
        >
          {badge}
        </span>
        {recBadge && (
          <span className="text-[10px] font-bold tracking-[1px] px-3 py-[5px] rounded-full text-ipnext-orange bg-white">
            RECOMENDADO
          </span>
        )}
      </div>

      {/* Speed */}
      <div className="text-white font-black text-5xl">{speed}</div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: descColor }}>
        {description}
      </p>

      {/* CTA */}
      <button
        className="w-full py-[14px] rounded-full font-semibold text-base transition-opacity hover:opacity-90"
        style={{ backgroundColor: ctaBg, color: ctaTextColor }}
      >
        {ctaText}
      </button>
    </div>
  );
}

function WirelessCard({
  speed,
  badge,
  badgeBg,
  badgeText,
  description,
  descColor,
  labelColor,
  featured,
  ctaText,
  ctaBg,
  ctaTextColor,
  cardBg,
  borderColor,
  borderWidth = 1,
}: {
  speed: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  descColor: string;
  labelColor: string;
  featured?: boolean;
  ctaText: string;
  ctaBg: string;
  ctaTextColor: string;
  cardBg: string;
  borderColor: string;
  borderWidth?: number;
}) {
  return (
    <div
      className="flex flex-col gap-5 rounded-2xl p-9 w-full"
      style={{
        backgroundColor: cardBg,
        border: `${borderWidth}px solid ${borderColor}`,
        maxWidth: featured ? "360px" : "340px",
      }}
    >
      <span
        className="text-[10px] font-bold tracking-[2px] px-3 py-[5px] rounded-full self-start"
        style={{ backgroundColor: badgeBg, color: badgeText }}
      >
        {badge}
      </span>

      <div>
        <div className="text-[#F9FAFB] font-black text-[40px] leading-tight">
          {speed}
        </div>
        <div className="text-xs font-normal mt-1" style={{ color: labelColor }}>
          Bajada / Subida
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: descColor }}>
        {description}
      </p>

      <button
        className="w-full py-3 rounded-full font-semibold text-[15px] transition-opacity hover:opacity-90"
        style={{ backgroundColor: ctaBg, color: ctaTextColor }}
      >
        {ctaText}
      </button>
    </div>
  );
}

export default function PlansSection() {
  return (
    <section
      id="planes"
      className="bg-ipnext-bg-sec py-20 px-6 md:px-10 lg:px-[120px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Fiber title */}
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-ipnext-text font-extrabold text-4xl lg:text-[44px]">
            Planes para tu velocidad
          </h2>
          <p className="text-ipnext-muted text-lg">
            Conéctate al internet más rápido de la región — elige tu plan ideal
          </p>
        </div>

        {/* Fiber cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
          <FiberCard
            speed="300 Mbps"
            badge="FIBRA"
            badgeBg="#4A2000"
            badgeText="#FFAA44"
            description="Ideal para familias, streaming en 4K y trabajo remoto fluido."
            descColor="#94A3B8"
            ctaText="¡Lo Quiero!"
            ctaBg="#4A2000"
            ctaTextColor="#FFAA44"
            cardBg="#1C1C1C"
            borderColor="#2A2A2A"
          />
          <FiberCard
            speed="600 Mbps"
            badge="MÁS POPULAR"
            badgeBg="#FFFFFF33"
            badgeText="#FFFFFF"
            description="Perfecta para múltiples dispositivos, gaming y videoconferencias simultáneas."
            descColor="#FFE4CC"
            featured
            recBadge
            ctaText="¡Lo Quiero Ahora!"
            ctaBg="#FFFFFF"
            ctaTextColor="#FF6B00"
            cardBg="#E87722"
            borderColor="#FF8C00"
            borderWidth={2}
            width="380px"
          />
          <FiberCard
            speed="1 Gbps"
            badge="ULTRA"
            badgeBg="#2A1500"
            badgeText="#FF8C00"
            description="Máxima potencia para empresas, streamers y hogares con alto tráfico."
            descColor="#94A3B8"
            ctaText="¡Lo Quiero!"
            ctaBg="#2A1500"
            ctaTextColor="#FF8C00"
            cardBg="#1C1C1C"
            borderColor="#2A2A2A"
          />
        </div>

        {/* Wireless title */}
        <div className="flex flex-col gap-3 text-center mt-4">
          <h3 className="text-ipnext-muted font-extrabold text-3xl lg:text-[36px]">
            Planes Wireless
          </h3>
          <p className="text-ipnext-subtle text-base">
            Cobertura inalámbrica para zonas sin fibra — siempre conectado
          </p>
        </div>

        {/* Wireless cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
          <WirelessCard
            speed="20/10 Mbps"
            badge="WIRELESS BÁSICO"
            badgeBg="#1C1C1C"
            badgeText="#9CA3AF"
            description="Ideal para navegación básica, redes sociales y videollamadas."
            descColor="#9CA3AF"
            labelColor="#6B7280"
            ctaText="¡Lo Quiero!"
            ctaBg="#1F2937"
            ctaTextColor="#D1D5DB"
            cardBg="#141414"
            borderColor="#2A2A2A"
          />
          <WirelessCard
            speed="30/20 Mbps"
            badge="WIRELESS PLUS"
            badgeBg="#4A2000"
            badgeText="#FFB366"
            description="Para streaming, trabajo en casa y múltiples dispositivos conectados."
            descColor="#FFD4AA"
            labelColor="#FFB366"
            featured
            ctaText="¡Lo Quiero!"
            ctaBg="#E07000"
            ctaTextColor="#FFFFFF"
            cardBg="#161616"
            borderColor="#FF6B00"
            borderWidth={2}
          />
          <WirelessCard
            speed="50/30 Mbps"
            badge="WIRELESS PRO"
            badgeBg="#1A1A1A"
            badgeText="#FF8C00"
            description="Máximo rendimiento wireless para gaming, 4K y video llamadas intensivas."
            descColor="#9CA3AF"
            labelColor="#6B7280"
            ctaText="¡Lo Quiero!"
            ctaBg="#3A1800"
            ctaTextColor="#FFAA44"
            cardBg="#141414"
            borderColor="#2A2A2A"
          />
        </div>
      </div>
    </section>
  );
}
