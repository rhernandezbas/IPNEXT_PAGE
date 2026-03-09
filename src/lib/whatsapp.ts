const WHATSAPP_NUMBER = "54901150310800";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  // Fibra
  fibra300: waLink("¡Hola! Vengo de la web y me interesa el plan de Fibra Óptica de 300 Mbps. ¿Me pueden dar más información?"),
  fibra600: waLink("¡Hola! Vengo de la web y me interesa el plan de Fibra Óptica de 600 Mbps. ¿Me pueden dar más información?"),
  fibra1000: waLink("¡Hola! Vengo de la web y me interesa el plan de Fibra Óptica de 1 Gbps. ¿Me pueden dar más información?"),

  // Wireless
  wirelessBasico: waLink("¡Hola! Vengo de la web y me interesa el plan Wireless Básico de 20/10 Mbps. ¿Me pueden dar más información?"),
  wirelessPlus: waLink("¡Hola! Vengo de la web y me interesa el plan Wireless Plus de 30/20 Mbps. ¿Me pueden dar más información?"),
  wirelessPro: waLink("¡Hola! Vengo de la web y me interesa el plan Wireless Pro de 50/30 Mbps. ¿Me pueden dar más información?"),

  // Empresas
  empresasPyme: waLink("¡Hola! Vengo de la web y me interesa el plan Empresarial PYME de 200 Mbps simétrico. ¿Me pueden dar más información?"),
  empresasCorporativo: waLink("¡Hola! Vengo de la web y me interesa el plan Empresarial Corporativo de 500 Mbps simétrico. ¿Me pueden dar más información?"),
  empresasEnterprise: waLink("¡Hola! Vengo de la web y me interesa el plan Empresarial Enterprise de 1 Gbps simétrico. ¿Me pueden dar más información?"),

  // Otros servicios
  camaras: waLink("¡Hola! Vengo de la web y me interesa el servicio de instalación de Cámaras de Seguridad. ¿Me pueden dar más información?"),
  alarmas: waLink("¡Hola! Vengo de la web y me interesa el servicio de Alarmas y Control de Acceso. ¿Me pueden dar más información?"),
  vps: waLink("¡Hola! Vengo de la web y me interesa el servicio de VPS & Hosting Profesional. ¿Me pueden dar más información?"),

  // General
  general: waLink("¡Hola! Vengo de la web de IPNEXT y quisiera más información sobre sus servicios."),
};
