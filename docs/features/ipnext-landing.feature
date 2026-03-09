Feature: IPNEXT Landing Page
  Como visitante del sitio web de IPNEXT
  Quiero poder conocer los planes, características y canales de contacto
  Para poder contratar el servicio de internet que mejor se adapte a mis necesidades

  # ═══════════════════════════════════════
  # NAVBAR
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver la barra de navegación
    Given que el visitante abre la landing page
    Then debe ver una navbar sticky con el logo "IPNEXT"
    And debe ver los links de navegación "Planes" y "Contacto"
    And debe ver un botón CTA "¡Lo Quiero!" en naranja

  # ═══════════════════════════════════════
  # HERO
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver la sección hero con CTA principal
    Given que el visitante está en la landing page
    Then debe ver el título "Conéctate a un mundo sin límites"
    And debe ver el subtítulo mencionando "hasta 1 Gbps" e "Instalación GRATIS"
    And debe ver un botón CTA pill "¡Lo Quiero!"
    And el hero debe tener una imagen de fondo con overlay oscuro

  # ═══════════════════════════════════════
  # PLANS — FIBRA
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver planes de fibra óptica
    Given que el visitante navega a la sección de planes
    Then debe ver el título "Planes para tu velocidad"
    And debe ver 3 cards de planes de fibra:
      | Plan    | Velocidad | Badge       |
      | Básico  | 300 Mbps  | FIBRA       |
      | Popular | 600 Mbps  | MÁS POPULAR |
      | Ultra   | 1 Gbps    | ULTRA       |
    And el plan de 600 Mbps debe estar destacado como "RECOMENDADO"

  @status:implemented
  @changed:2026-03-09
  Scenario: Cada plan de fibra tiene un CTA
    Given que el visitante ve los planes de fibra
    Then cada card debe tener un botón "¡Lo Quiero!" o "¡Lo Quiero Ahora!"

  # ═══════════════════════════════════════
  # PLANS — WIRELESS
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver planes wireless
    Given que el visitante continúa en la sección de planes
    Then debe ver el subtítulo "Planes Wireless"
    And debe ver 3 cards de planes wireless:
      | Plan   | Velocidad  | Badge           |
      | Básico | 20/10 Mbps | WIRELESS BÁSICO |
      | Plus   | 30/20 Mbps | WIRELESS PLUS   |
      | Pro    | 50/30 Mbps | WIRELESS PRO    |
    And cada card debe mostrar "Bajada / Subida"
    And el plan Plus debe estar destacado con borde naranja

  # ═══════════════════════════════════════
  # FEATURES
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver sección de características "¿Por qué IPNEXT?"
    Given que el visitante navega a la sección de características
    Then debe ver el título "¿Por qué IPNEXT?"
    And debe ver 3 cards de características:
      | Característica  | Ícono      | Color Ícono |
      | Velocidad Extrema | zap       | naranja     |
      | Red Segura        | shield-check | verde    |
      | Soporte 24/7      | headphones | violeta    |
    And cada card debe tener una descripción del beneficio

  # ═══════════════════════════════════════
  # STATS
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver estadísticas de la empresa
    Given que el visitante navega por la landing page
    Then debe ver 3 métricas destacadas:
      | Métrica | Valor    | Descripción            |
      | 1       | 10,000+  | Clientes Satisfechos   |
      | 2       | 99.9%    | Uptime Garantizado     |
      | 3       | 1 Gbps   | Velocidad Máxima       |
    And los números deben estar en color naranja prominente

  # ═══════════════════════════════════════
  # FAQ
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver preguntas frecuentes
    Given que el visitante navega a la sección FAQ
    Then debe ver el título "Todo lo que necesitas saber"
    And debe ver 3 preguntas:
      | Pregunta                          |
      | ¿Cómo contrato el servicio?       |
      | Soporte Técnico Online            |
      | ¿Cómo pago el servicio?           |

  @status:implemented
  @changed:2026-03-09
  Scenario: Expandir y colapsar preguntas del FAQ
    Given que el visitante ve el FAQ
    When el visitante hace click en una pregunta
    Then la respuesta debe expandirse mostrando el contenido
    And el ícono debe cambiar de "+" a "-"
    When el visitante hace click nuevamente
    Then la respuesta debe colapsarse

  # ═══════════════════════════════════════
  # EMPRESAS — PLANES DEDICADOS
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver sección de planes empresariales
    Given que el visitante navega a la sección de empresas
    Then debe ver el título "Planes Dedicados para tu Negocio"
    And debe ver 3 cards de planes empresariales:
      | Plan        | Velocidad | Badge             |
      | PYME        | 200 Mbps  | IDEAL PARA PYMES  |
      | CORPORATIVO | 500 Mbps  | MÁS ELEGIDO       |
      | ENTERPRISE  | 1 Gbps    | MÁXIMA CAPACIDAD  |
    And cada plan debe mostrar "Simétrico — igual bajada y subida"
    And el plan CORPORATIVO debe estar destacado como "RECOMENDADO"

  @status:implemented
  @changed:2026-03-09
  Scenario: CTAs de planes empresariales abren WhatsApp con mensaje del plan
    Given que el visitante ve los planes empresariales
    When hace click en el CTA de un plan
    Then debe abrirse WhatsApp con el mensaje:
      | Plan        | Mensaje pre-llenado                                              |
      | PYME        | "...me interesa el plan Empresarial PYME de 200 Mbps simétrico" |
      | CORPORATIVO | "...me interesa el plan Empresarial Corporativo de 500 Mbps"    |
      | ENTERPRISE  | "...me interesa el plan Empresarial Enterprise de 1 Gbps"       |

  # ═══════════════════════════════════════
  # OTROS SERVICIOS
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver sección de otros servicios
    Given que el visitante navega a la sección de otros servicios
    Then debe ver el título "Otros Servicios"
    And debe ver 3 cards de servicios:
      | Servicio                 | Tag       | Ícono       |
      | Cámaras de Seguridad     | SEGURIDAD | camera      |
      | Alarmas y Control Acceso | SEGURIDAD | shield-alert |
      | VPS & Hosting Profesional| HOSTING   | server      |
    And debe ver un banner inferior "¿Necesitás una solución personalizada?"

  @status:implemented
  @changed:2026-03-09
  Scenario: CTAs de otros servicios abren WhatsApp con mensaje del servicio
    Given que el visitante ve los otros servicios
    When hace click en el CTA de un servicio
    Then debe abrirse WhatsApp con el mensaje correspondiente al servicio

  # ═══════════════════════════════════════
  # WHATSAPP — BOTONES CON MENSAJE PREDEFINIDO
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Todos los botones CTA llevan a WhatsApp con mensaje del plan
    Given que el visitante ve cualquier plan o servicio
    When hace click en un botón "¡Lo Quiero!" o CTA
    Then debe abrirse WhatsApp al número +5492346523280
    And el mensaje debe estar pre-llenado con el nombre del plan o servicio correspondiente
    And el mensaje debe comenzar con "¡Hola! Vengo de la web..."

  # ═══════════════════════════════════════
  # CONTACT
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver sección de contacto
    Given que el visitante navega a la sección de contacto
    Then debe ver el título "Estamos para ayudarte"
    And debe ver 3 cards de contacto:
      | Canal      | Ícono          | Botón          |
      | WhatsApp   | message-circle | Escribinos     |
      | Teléfono   | phone          | Llamar ahora   |
      | Email/Web  | mail           | Consultar      |

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver oficinas físicas en la sección de contacto
    Given que el visitante está en la sección de contacto
    Then debe ver la subsección "Nuestras Oficinas"
    And debe ver 2 cards de ubicación:
      | Ciudad    | Dirección      |
      | Mercedes  | Calle 27 Nº 279 |
      | Chivilcoy | Colón 75        |
    And cada card debe tener un link a Google Maps que abre en pestaña nueva

  # ═══════════════════════════════════════
  # WHATSAPP WIDGET
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver el widget flotante de WhatsApp
    Given que el visitante está en cualquier parte de la landing
    Then debe ver un botón flotante de WhatsApp en la esquina inferior derecha

  @status:implemented
  @changed:2026-03-09
  Scenario: Interactuar con el widget de WhatsApp
    Given que el visitante ve el widget flotante
    When el visitante hace click en el botón de WhatsApp
    Then debe aparecer una burbuja de chat con un mensaje de bienvenida
    And debe ver un botón para ir a WhatsApp
    When el visitante hace click en el botón de cierre
    Then la burbuja debe cerrarse

  # ═══════════════════════════════════════
  # FOOTER
  # ═══════════════════════════════════════

  @status:implemented
  @changed:2026-03-09
  Scenario: Ver el footer
    Given que el visitante llega al final de la página
    Then debe ver el logo "IPNEXT"
    And debe ver los links: Suscríbete, Estado, Ayuda, Privacidad
    And debe ver el copyright "© 2026 IPNEXT. Todos los derechos reservados."
