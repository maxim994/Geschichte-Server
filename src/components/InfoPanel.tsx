import { useRef } from "react";
import type { ReactNode } from "react";
import type { EventItem, Side } from "../data/events";

type InfoPanelProps = {
  title: "West" | "Ost";
  panelSide: Side;
  selectedEvent: EventItem | null;
  accentClass: string;
  onOpenDrawer: (side: Side, trigger: HTMLButtonElement | null) => void;
  onClearSelection: () => void;
};

export function InfoPanel({
  title,
  panelSide,
  selectedEvent,
  accentClass,
  onOpenDrawer,
  onClearSelection
}: InfoPanelProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const isRelevantEvent = selectedEvent?.side === panelSide;
  const isWestPanel = panelSide === "west";
  const panelToneClass = isWestPanel
    ? "border-west-100 bg-gradient-to-b from-white/95 via-white/90 to-west-50/35"
    : "border-east-100 bg-gradient-to-b from-white/95 via-white/90 to-east-50/35";
  const titleToneClass = isWestPanel ? "text-west-700" : "text-east-700";
  const contentToneClass = isWestPanel ? "bg-west-50/50" : "bg-east-50/45";
  const categoryBadgeClass = isWestPanel
    ? "border-west-200 text-west-700 bg-white"
    : "border-east-200 text-east-700 bg-white";
  const authorBadgeClass = isWestPanel
    ? "border-west-200 bg-west-50 text-west-700"
    : "border-east-200 bg-east-50 text-east-700";
  const actionButtonClass = isWestPanel
    ? "border-west-200 text-west-700 hover:bg-west-50 focus-visible:ring-west-300"
    : "border-east-200 text-east-700 hover:bg-east-50 focus-visible:ring-east-300";

  const renderRichText = (text: string): ReactNode[] => {
    const lines = text.split("\n");
    const nodes: ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) {
        i += 1;
        continue;
      }

      if (/^(?:●|-|\?)\s*/.test(line)) {
        const bullets: string[] = [];
        while (i < lines.length && /^(?:●|-|\?)\s*/.test(lines[i].trim())) {
          bullets.push(lines[i].trim().replace(/^(?:●|-|\?)\s*/, ""));
          i += 1;
        }
        nodes.push(
          <ul key={`ul-${i}`} className="list-disc space-y-1 pl-6">
            {bullets.map((bullet, idx) => (
              <li key={`${bullet}-${idx}`}>{bullet}</li>
            ))}
          </ul>
        );
        continue;
      }

      nodes.push(
        <p key={`p-${i}`} className="leading-relaxed">
          {line}
        </p>
      );
      i += 1;
    }

    return nodes;
  };

  return (
    <section
      className={`flex h-[88dvh] flex-col overflow-hidden rounded-3xl border p-7 md:sticky md:top-6 md:h-[calc(100dvh-3rem)] md:p-8 shadow-panel backdrop-blur-sm ${panelToneClass} ${accentClass}`}
      aria-label={`${title} Panel`}
    >
      <h2 className={`font-display text-4xl ${titleToneClass}`}>{title}</h2>
      <div className={`mt-5 min-h-0 flex-1 overflow-y-scroll overscroll-contain scroll-smooth rounded-2xl ${contentToneClass} p-6 [-webkit-overflow-scrolling:touch]`}>
        {!selectedEvent && <p className="text-xl text-slate-600">Waehle ein Ereignis aus.</p>}

        {selectedEvent && isRelevantEvent && (
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start justify-between gap-3">
              <p className="text-2xl font-semibold text-slate-900">{selectedEvent.title}</p>
              <button
                type="button"
                className="rounded-md border border-slate-300 px-3 py-1 text-base font-semibold text-slate-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                onClick={onClearSelection}
                aria-label="Auswahl schliessen"
              >
                X
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-base">
              <span className="uppercase tracking-wide text-slate-500">{selectedEvent.dateLabel}</span>
              {selectedEvent.category && (
                <span className={`rounded-full border px-3 py-1 font-semibold ${categoryBadgeClass}`}>
                  {selectedEvent.category}
                </span>
              )}
              <span className={`rounded-full border px-3 py-1 font-semibold ${authorBadgeClass}`}>
                Von: {selectedEvent.createdBy}
              </span>
            </div>
            <div className="space-y-2">{renderRichText(selectedEvent.overview)}</div>
            <button
              ref={triggerRef}
              type="button"
              className={`mt-2 rounded-md border bg-white px-5 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 ${actionButtonClass}`}
              onClick={() => onOpenDrawer(selectedEvent.side, triggerRef.current)}
            >
              Vertiefung
            </button>
          </div>
        )}

        {selectedEvent && !isRelevantEvent && (
          <p className="text-xl text-slate-600">Waehle ein Ereignis aus.</p>
        )}
      </div>
    </section>
  );
}



