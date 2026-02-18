import type { EventItem } from "../data/events";

type EventMarkerProps = {
  event: EventItem;
  topPx: number;
  selected: boolean;
  onSelect: (id: string) => void;
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeDateText(value: string): string {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function getMarkerTitle(event: EventItem): string {
  const rawTitle = event.title.trim();
  const rawDate = event.dateLabel.trim();

  if (!rawDate) {
    return rawTitle;
  }

  if (!normalizeDateText(rawTitle).includes(normalizeDateText(rawDate))) {
    return rawTitle;
  }

  const datePattern = new RegExp(`\\s*[-\\u2013:]?\\s*\\(?${escapeRegExp(rawDate)}\\)?\\s*`, "gi");
  const cleaned = rawTitle.replace(datePattern, " ").replace(/\s{2,}/g, " ").trim();

  return cleaned.length > 0 ? cleaned : rawTitle;
}

export function EventMarker({ event, topPx, selected, onSelect }: EventMarkerProps) {
  const isWest = event.side === "west";
  const sidePositionClass = isWest ? "right-1/2 pr-8 md:pr-12" : "left-1/2 pl-8 md:pl-12";
  const sideRowClass = isWest ? "flex-row-reverse" : "flex-row";
  const markerTitle = getMarkerTitle(event);
  const dotClass = isWest
    ? selected
      ? "border-west-700 bg-white ring-4 ring-west-100"
      : "border-west-500 bg-white hover:bg-west-50"
    : selected
      ? "border-east-700 bg-white ring-4 ring-east-100"
      : "border-east-500 bg-white hover:bg-east-50";
  const labelClass = isWest
    ? selected
      ? "border-west-700 bg-west-700 text-white"
      : "border-west-200 bg-white/95 text-west-700"
    : selected
      ? "border-east-700 bg-east-700 text-white"
      : "border-east-200 bg-white/95 text-east-700";
  const focusClass = isWest ? "focus-visible:ring-west-300" : "focus-visible:ring-east-300";

  return (
    <button
      type="button"
      className={`absolute -translate-y-1/2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${focusClass} ${sidePositionClass}`}
      style={{ top: `${topPx}px` }}
      onClick={() => onSelect(event.id)}
      aria-pressed={selected}
      aria-label={`Marker ${markerTitle} aus ${event.year}`}
    >
      <span className={`flex items-center gap-4 ${sideRowClass}`}>
        <span className={`h-6 w-6 rounded-full border-[4px] transition ${dotClass}`} />
        <span className={`max-w-[24rem] rounded-full border px-6 py-3 text-center text-lg font-semibold leading-snug shadow-sm ${labelClass}`}>
          {markerTitle} - {event.dateLabel}
        </span>
      </span>
    </button>
  );
}
