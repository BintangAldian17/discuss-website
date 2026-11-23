import { heroCredit, site, steps, waLink } from "@/lib/data";
import ProductGrid from "./ProductGrid";

const label = "text-[11px] tracking-[0.25em] uppercase";

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 text-white md:px-12">
        <a href="#" className="text-sm font-medium tracking-[0.3em]">{site.brand}</a>
        <nav className={`flex gap-8 ${label}`}>
          <a href="#alur" className="hover:opacity-60">Alur</a>
          <a href="#produk" className="hover:opacity-60">Produk</a>
        </nav>
      </header>

      <main>
        {/* HERO — taruh foto di /public/hero.jpg */}
        <section className="photo relative flex h-[90svh] min-h-[520px] items-end" style={{ "--img": "url(/hero.jpg)" } as React.CSSProperties}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative px-6 pb-16 text-white md:px-12 md:pb-24">
            <p className={label}>{site.tagline}</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-extralight md:text-6xl">
              Keindahan Discus,<br />langsung ke akuarium Anda.
            </h1>
            <a href="#produk" className={`mt-10 inline-block border-b border-white pb-1 ${label} hover:opacity-60`}>
              Lihat Koleksi
            </a>
          </div>
        </section>

        {/* ALUR PEMESANAN */}
        <section id="alur" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className={`${label} text-neutral-500`}>How to Order</p>
          <h2 className="mt-3 text-3xl font-extralight">Alur Pemesanan</h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-neutral-900 pt-6">
                <span className="text-sm font-light text-neutral-400">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-light">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-neutral-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PRODUK + MODAL */}
        <section id="produk" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
          <p className={`${label} text-neutral-500`}>Collection</p>
          <h2 className="mt-3 mb-16 text-3xl font-extralight">Produk</h2>
          <ProductGrid />
        </section>
      </main>

      <footer className={`border-t border-neutral-200 px-6 py-10 text-neutral-500 md:px-12 ${label} flex flex-wrap justify-between gap-4`}>
        <span>{site.address}</span>
        <span className="normal-case tracking-normal">{heroCredit}</span>
        <span className="flex gap-6">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Facebook</a>
        </span>
      </footer>

      {/* WA MENGAMBANG */}
      <a
        href={waLink(`Halo ${site.brand}, saya ingin bertanya.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed right-5 bottom-5 z-20 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.3 11.3 0 0 0 5.36 1.37h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.03-1.18-5.89-3.32-8.03" />
        </svg>
      </a>
    </>
  );
}
