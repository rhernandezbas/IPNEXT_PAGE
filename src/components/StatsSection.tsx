const stats = [
  {
    value: "10,000+",
    label: "Clientes Satisfechos",
    color: "#FF8C00",
  },
  {
    value: "99.9%",
    label: "Uptime Garantizado",
    color: "#FF8C00",
  },
  {
    value: "1 Gbps",
    label: "Velocidad Máxima",
    color: "#FFB366",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-ipnext-bg-sec px-6 md:px-10 lg:px-[120px] py-[60px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span
              className="font-black text-5xl"
              style={{ color: stat.color }}
            >
              {stat.value}
            </span>
            <span className="text-ipnext-muted text-[15px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
