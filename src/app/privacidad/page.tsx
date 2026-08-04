import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Mi IPNEXT",
  description:
    "Cómo la app Mi IPNEXT y los servicios de IPNEXT tratan tus datos personales.",
  robots: { index: true, follow: true },
};

/**
 * Política de privacidad de la app "Mi IPNEXT" (Google Play la exige como URL
 * pública). Redactada contra lo que la app REALMENTE hace a la fecha — si la
 * app suma una capacidad nueva que toque datos (p.ej. ubicación), esta página
 * DEBE actualizarse en el mismo cambio.
 */
export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-gray-900">
        Política de Privacidad — Mi IPNEXT
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Última actualización: 4 de agosto de 2026
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">1. Quiénes somos</h2>
        <p>
          IPNEXT es un proveedor de servicios de internet (ISP) con operación en
          la provincia de Buenos Aires, Argentina. Esta política describe cómo
          tratamos tus datos personales cuando usás la aplicación móvil{" "}
          <strong>Mi IPNEXT</strong>, destinada exclusivamente a clientes del
          servicio.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          2. Qué datos tratamos
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Datos de identificación:</strong> tu DNI, que usás para
            iniciar sesión, y los datos de tu cuenta de cliente (nombre,
            domicilio de instalación, contratos y planes contratados) que ya
            obran en nuestros registros como prestador del servicio.
          </li>
          <li>
            <strong>Datos de facturación:</strong> facturas, saldos y estados de
            pago de tu servicio, que la app te muestra.
          </li>
          <li>
            <strong>Mensajes y adjuntos:</strong> los reclamos y consultas que
            envíes por la app, incluidas las fotos, videos o audios que decidas
            adjuntar.
          </li>
          <li>
            <strong>Datos técnicos de tu servicio:</strong> información del
            equipo (módem/ONU) instalado en tu domicilio, sus redes WiFi y los
            nombres de los dispositivos conectados a tu propia red, únicamente
            para que puedas gestionarla desde la app.
          </li>
          <li>
            <strong>Notificaciones:</strong> un identificador técnico de tu
            teléfono (token de notificaciones) y el modelo del dispositivo, para
            poder enviarte avisos del servicio. Las preferencias de notificación
            se configuran por dispositivo y podés apagarlas cuando quieras.
          </li>
        </ul>
        <p>
          La app <strong>no</strong> accede a tu ubicación, contactos ni a
          archivos de tu teléfono más allá de los que vos elijas adjuntar. El
          acceso a cámara, fotos y micrófono se solicita únicamente cuando
          decidís adjuntar contenido a un reclamo.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          3. Para qué los usamos
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Autenticarte y mostrarte la información de tu propia cuenta.</li>
          <li>Gestionar tus reclamos, consultas y órdenes de servicio.</li>
          <li>
            Permitirte administrar tu servicio: configurar tu WiFi, reiniciar tu
            equipo, cambiar tu clave de TV, contratar productos o servicios.
          </li>
          <li>
            Enviarte avisos relevantes del servicio (por ejemplo, cortes en tu
            zona) y, solo si lo activás expresamente, ofertas y beneficios.
          </li>
        </ul>
        <p>
          <strong>No vendemos ni alquilamos tus datos personales.</strong> La app
          no muestra publicidad de terceros.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          4. Con quién se comparten
        </h2>
        <p>
          Tus datos se comparten únicamente con los proveedores técnicos
          imprescindibles para operar el servicio: Google (Firebase Cloud
          Messaging) para la entrega de notificaciones push, y las plataformas de
          gestión técnica del equipamiento de red y del servicio de TV, en la
          medida estrictamente necesaria para ejecutar las acciones que vos
          solicitás desde la app. Todos los intercambios viajan cifrados (TLS).
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          5. Conservación y seguridad
        </h2>
        <p>
          Conservamos tus datos mientras seas cliente y durante los plazos
          legales aplicables a la relación comercial. Aplicamos medidas técnicas
          de protección: cifrado en tránsito, autenticación con tokens de corta
          duración y control de acceso estricto — cada cuenta solo puede ver y
          operar sobre sus propios datos.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">6. Tus derechos</h2>
        <p>
          Conforme a la Ley 25.326 de Protección de Datos Personales, podés
          ejercer tus derechos de acceso, rectificación, actualización y
          supresión de tus datos. La Agencia de Acceso a la Información Pública
          (AAIP), órgano de control de la Ley 25.326, tiene la atribución de
          atender denuncias y reclamos sobre incumplimientos.
        </p>
        <p>
          <strong>Eliminación de cuenta:</strong> podés solicitar la baja de tu
          cuenta de la app y la supresión de los datos asociados a ella
          escribiéndonos a{" "}
          <a className="text-blue-600 underline" href="mailto:info@ipnext.com">
            info@ipnext.com
          </a>{" "}
          o por los canales de atención de la app. Los datos vinculados a la
          relación comercial (facturación) se conservan por los plazos que exige
          la ley aunque elimines la cuenta de la app.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">7. Cambios</h2>
        <p>
          Si esta política cambia, publicaremos la versión actualizada en esta
          misma página, indicando la fecha de la última actualización.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">8. Contacto</h2>
        <p>
          Ante cualquier consulta sobre esta política o el tratamiento de tus
          datos:{" "}
          <a className="text-blue-600 underline" href="mailto:info@ipnext.com">
            info@ipnext.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
