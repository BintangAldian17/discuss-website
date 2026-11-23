"use client";

import { useRef, useState, type CSSProperties } from "react";
import { products, waLink, type Product } from "@/lib/data";

const img = (src?: string) => ({ "--img": src ? `url(${src})` : "none" }) as CSSProperties;

export default function ProductGrid() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Product | null>(null);

  const open = (p: Product) => {
    setActive(p);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {products.map((p) => (
          <button key={p.name} onClick={() => open(p)} className="group text-left">
            <div className="photo aspect-square overflow-hidden transition-opacity group-hover:opacity-80" style={img(p.image)} />
            <p className="mt-4 text-[11px] tracking-[0.2em] text-neutral-500 uppercase">Grade {p.grade}</p>
            <h3 className="mt-1 text-base font-light">Discus {p.name}</h3>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto w-[min(56rem,calc(100%-2rem))] bg-white p-0 text-neutral-900"
      >
        {active && (
          <div className="grid md:grid-cols-2">
            <div className="photo aspect-square" style={img(active.image)} />
            <div className="relative flex flex-col p-8 md:p-10">
              <button
                onClick={() => dialog.current?.close()}
                aria-label="Tutup"
                className="absolute top-4 right-5 text-2xl font-light text-neutral-400 hover:text-neutral-900"
              >
                ×
              </button>
              <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">Discus</p>
              <h3 className="mt-2 text-3xl font-extralight">{active.name}</h3>
              <p className="mt-6 text-sm leading-relaxed font-light text-neutral-600">{active.description}</p>
              <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-sm font-light">
                {[["Grade", active.grade], ["Ukuran", active.size], ["Stok", `${active.stock} ekor`]].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3">
                    <dt className="text-neutral-500">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              {active.credit && <p className="mt-4 text-[10px] text-neutral-400">Foto: {active.credit}</p>}
              <a
                href={waLink(`Halo, saya tertarik dengan Discus ${active.name} (Grade ${active.grade}, ${active.size}). Apakah masih tersedia?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block bg-neutral-900 py-4 text-center text-xs tracking-[0.25em] text-white uppercase transition-colors hover:bg-neutral-700 max-md:mt-8"
              >
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
