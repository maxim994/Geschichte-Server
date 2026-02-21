import { asset } from "../utils/asset";

export function PageHeader() {
  const heroImageSrc = asset("images/teilung-deutschlands-west-ost-hero.png");

  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/86 p-8 shadow-panel backdrop-blur-sm">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-west-100/45 via-west-50/20 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-east-100/45 via-east-50/20 to-transparent" />
      </div>

      <div className="relative">
        <h1 className="mt-1 text-center font-headline text-6xl font-black tracking-[0.03em] text-slate-900 sm:text-8xl">
          Teilung Deutschlands
        </h1>
        <p className="mt-3 text-center text-2xl font-semibold text-slate-600 sm:text-3xl">Zeitstrahl 1947-1949</p>

        <div className="mt-7 overflow-hidden rounded-2xl border border-white/60 shadow-panel">
          <div className="mx-auto w-[92%] aspect-[15/8] min-h-[360px] max-h-[720px] overflow-hidden">
            <img
              src={heroImageSrc}
              alt="Symbolbild zur Teilung Deutschlands zwischen West und Ost"
              className="block h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
