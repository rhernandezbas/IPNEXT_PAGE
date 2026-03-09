export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[700px] gap-8 px-6 md:px-16 lg:px-[120px] py-20 text-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1a0a00 0%, #0A0A0A 100%)",
      }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #FF6B0022 0%, transparent 70%)",
        }}
      />

      <h1 className="relative text-ipnext-text font-black text-5xl md:text-6xl lg:text-[72px] leading-[1.1] max-w-4xl">
        Conéctate a un mundo
        <br />
        <span className="text-ipnext-orange">sin límites</span>
      </h1>

      <p className="relative text-white/80 text-lg font-normal max-w-2xl leading-relaxed">
        Descubre la experiencia IPNEXT de hasta{" "}
        <span className="font-semibold text-white">1 Gbps</span>. Internet de
        Ultravelocidad.
      </p>

      <a
        href="#planes"
        className="relative bg-white text-ipnext-orange font-bold text-lg px-12 py-[18px] rounded-full hover:bg-ipnext-orange hover:text-white transition-all duration-200 shadow-lg"
      >
        ¡Lo Quiero!
      </a>
    </section>
  );
}
