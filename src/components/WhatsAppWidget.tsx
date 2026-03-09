"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* Chat bubble */}
      {open && (
        <div
          className="w-[300px] rounded-2xl border border-ipnext-border bg-ipnext-bg-card shadow-2xl p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200"
          role="dialog"
          aria-label="Chat de WhatsApp"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle size={16} color="white" />
              </div>
              <span className="text-ipnext-text font-semibold text-sm">
                IPNEXT
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-ipnext-subtle hover:text-ipnext-muted transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message */}
          <div className="bg-[#0A0A0A] rounded-xl p-4 flex flex-col gap-2">
            <p className="text-ipnext-text font-semibold text-sm">¡Hola! 👋</p>
            <p className="text-ipnext-muted text-sm leading-relaxed">
              ¿Querés contratar o tenés una consulta? Escribinos por WhatsApp y
              te respondemos al toque.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-3 rounded-full hover:bg-[#1da851] transition-colors"
          >
            <MessageCircle size={16} />
            Abrir WhatsApp
          </a>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Contactar por WhatsApp"
      >
        {open ? (
          <X size={26} color="white" />
        ) : (
          <MessageCircle size={26} color="white" />
        )}
      </button>
    </div>
  );
}
