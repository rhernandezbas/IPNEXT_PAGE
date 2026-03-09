"use client";

import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "¿Cómo contrato el servicio?",
    answer: (
      <div className="flex flex-col gap-3">
        <p className="text-ipnext-muted text-[15px] leading-relaxed">
          1. Solicitá el alta por nuestros canales: WhatsApp, Consulta Web o
          telefónicamente.
        </p>
        <p className="text-ipnext-muted text-[15px] leading-relaxed">
          2. Un asesor te contactará para registrar los datos de tu solicitud.
        </p>
        <p className="text-ipnext-muted text-[15px] leading-relaxed">
          3. Coordinamos un turno de instalación en el plazo convenido.
        </p>
      </div>
    ),
  },
  {
    id: "faq-2",
    question: "Soporte Técnico Online",
    answer: (
      <p className="text-ipnext-muted text-[15px] leading-relaxed">
        Contamos con soporte técnico online vía WhatsApp, chat web y sistema de
        tickets. Respondemos dentro de las 2 hs.
      </p>
    ),
  },
  {
    id: "faq-3",
    question: "¿Cómo pago el servicio?",
    answer: (
      <p className="text-ipnext-muted text-[15px] leading-relaxed">
        Podés pagar por transferencia bancaria, Mercado Pago, débito automático
        o en efectivo en puntos de pago habilitados.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-ipnext-bg-dark py-20 px-6 md:px-10 lg:px-[200px]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-ipnext-orange-l font-bold text-[13px] tracking-[3px] uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="text-ipnext-text font-extrabold text-4xl lg:text-[44px]">
            Todo lo que necesitas saber
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-ipnext-border rounded-none first:rounded-t-2xl last:rounded-b-2xl overflow-hidden"
                style={{ backgroundColor: "#161616" }}
              >
                <button
                  className="flex items-center justify-between w-full px-8 py-7 text-left hover:bg-white/5 transition-colors"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                >
                  <span className="text-ipnext-text font-semibold text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <CircleMinus size={22} color="#FF8C00" className="shrink-0 ml-4" />
                  ) : (
                    <CirclePlus size={22} color="#FF8C00" className="shrink-0 ml-4" />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={`answer-${faq.id}`}
                    className="px-8 pb-7"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
