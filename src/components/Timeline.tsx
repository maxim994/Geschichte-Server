import { EventMarker } from "./EventMarker";
import type { EventItem } from "../data/events";
import { timelineHeightPx } from "../data/events";

type TimelineProps = {
  events: EventItem[];
  selectedEventId: string | null;
  onSelectEvent: (id: string) => void;
};

type YearValue = 1946 | 1947 | 1948 | 1949;
type TimelineLayout = {
  topById: Map<string, number>;
  yearLabelTop: Record<YearValue, number>;
  height: number;
};

const monthTokens: Array<[string, number]> = [
  ["januar", 1],
  ["februar", 2],
  ["maerz", 3],
  ["marz", 3],
  ["april", 4],
  ["mai", 5],
  ["juni", 6],
  ["juli", 7],
  ["august", 8],
  ["september", 9],
  ["oktober", 10],
  ["november", 11],
  ["dezember", 12]
];

type ParsedDateInfo = {
  day: number;
  month: number;
  exactKey: string | null;
};

function normalizeDateText(value: string): string {
  return value
    .toLowerCase()
    .replace(/\u00e4/g, "ae")
    .replace(/\u00f6/g, "oe")
    .replace(/\u00fc/g, "ue")
    .replace(/\u00df/g, "ss")
    .replace(/\s+/g, " ")
    .trim();
}

function getMonthFromLabel(label: string): number {
  const lower = normalizeDateText(label);
  let bestIdx = Number.POSITIVE_INFINITY;
  let month = 1;

  for (const [token, tokenMonth] of monthTokens) {
    const idx = lower.indexOf(token);
    if (idx !== -1 && idx < bestIdx) {
      bestIdx = idx;
      month = tokenMonth;
    }
  }

  if (bestIdx !== Number.POSITIVE_INFINITY) {
    return month;
  }

  if (lower.includes("fruehjahr")) {
    return 3;
  }
  if (lower.includes("sommer")) {
    return 6;
  }
  if (lower.includes("herbst")) {
    return 9;
  }
  if (lower.includes("winter")) {
    return 1;
  }

  return 1;
}

function getDayCandidates(label: string): number[] {
  return [...label.matchAll(/(\d{1,2})\s*\./g)].map((match) => Number(match[1]));
}

function parseDateInfo(event: EventItem): ParsedDateInfo {
  const month = getMonthFromLabel(event.dateLabel);
  const dayCandidates = getDayCandidates(event.dateLabel);
  const uniqueDays = Array.from(new Set(dayCandidates));
  const normalizedLabel = normalizeDateText(event.dateLabel);
  const hasRangeConnector = /(\d{1,2}\s*\.\s*[-\u2013]\s*\d{1,2})|(\d{1,2}\s*\/\s*\d{1,2})|\bbis\b/.test(
    normalizedLabel
  );
  const day = uniqueDays[0] ?? 1;
  const exactKey =
    uniqueDays.length === 1 && !hasRangeConnector
      ? `${event.year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
      : null;

  return { day, month, exactKey };
}

function getTimelineSortKey(event: EventItem): number {
  const info = parseDateInfo(event);
  return Date.UTC(event.year, info.month - 1, info.day);
}

function buildTimelineLayout(items: EventItem[], baseHeight: number): TimelineLayout {
  const years: YearValue[] = [1946, 1947, 1948, 1949];
  const topById = new Map<string, number>();
  const yearLabelTop: Record<YearValue, number> = {
    1946: 0,
    1947: 0,
    1948: 0,
    1949: 0
  };

  const sectionTopPadding = 96;
  const labelHeight = 56;
  const labelBottomGap = 110;
  const rowGap = 190;
  const sectionBottomPadding = 110;
  const sectionGap = 70;
  let cursor = 0;

  for (const year of years) {
    const yearEvents = items
      .filter((event) => event.year === year)
      .sort((a, b) => getTimelineSortKey(a) - getTimelineSortKey(b) || a.title.localeCompare(b.title, "de"));
    const groups: EventItem[][] = [];
    const exactGroupByKey = new Map<string, EventItem[]>();

    for (const event of yearEvents) {
      const { exactKey } = parseDateInfo(event);

      if (exactKey) {
        let group = exactGroupByKey.get(exactKey);
        if (!group) {
          group = [];
          exactGroupByKey.set(exactKey, group);
          groups.push(group);
        }
        group.push(event);
      } else {
        groups.push([event]);
      }
    }

    let rowCount = 0;
    const sectionTop = cursor;
    const labelTop = sectionTop + sectionTopPadding;
    const eventsStart = labelTop + labelHeight + labelBottomGap;

    yearLabelTop[year] = labelTop;

    groups.forEach((group) => {
      const westGroup = group.filter((event) => event.side === "west");
      const eastGroup = group.filter((event) => event.side === "east");
      const rows = Math.max(westGroup.length, eastGroup.length, 1);

      for (let i = 0; i < rows; i += 1) {
        const top = eventsStart + rowCount * rowGap;

        if (westGroup[i]) {
          topById.set(westGroup[i].id, top);
        }
        if (eastGroup[i]) {
          topById.set(eastGroup[i].id, top);
        }

        rowCount += 1;
      }
    });

    rowCount = Math.max(rowCount, 1);

    const sectionHeight =
      sectionTopPadding +
      labelHeight +
      labelBottomGap +
      (rowCount - 1) * rowGap +
      sectionBottomPadding;
    cursor += sectionHeight + sectionGap;
  }

  const height = Math.max(baseHeight, cursor + 40);

  return { topById, yearLabelTop, height };
}

export function Timeline({ events, selectedEventId, onSelectEvent }: TimelineProps) {
  const layout = buildTimelineLayout(events, timelineHeightPx);
  const yearLabels: Array<{ year: YearValue; top: number }> = [1946, 1947, 1948, 1949].map((year) => ({
    year,
    top: layout.yearLabelTop[year]
  }));

  return (
    <section className="relative overflow-hidden rounded-3xl border border-timeline-100/90 bg-white/92 p-7 md:p-9 shadow-panel backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-west-50/70 via-west-50/20 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-east-50/70 via-east-50/20 to-transparent" />
      </div>

      <div className="relative">
        <h2 className="text-center font-headline text-5xl font-bold tracking-wide text-slate-900 md:text-6xl">Zeitstrahl</h2>
        <p className="mx-auto mt-4 max-w-4xl rounded-xl border border-timeline-100 bg-white/90 px-5 py-4 text-center text-lg text-slate-700">
          Uebersicht: 1947 bis 1949 markieren zentrale Wendepunkte der deutschen Teilung. Waehle eine Zeitmarke fuer eine
          Kurzinfo direkt am Marker.
        </p>

        <div className="relative mt-10 overflow-visible" style={{ minHeight: `${layout.height}px` }}>
          <div
            className="absolute left-1/2 top-0 w-[7px] -translate-x-1/2 rounded-full bg-gradient-to-b from-west-500 via-timeline-500 to-east-500 shadow-[0_0_0_1px_rgba(148,163,184,0.22)]"
            style={{ height: `${layout.height}px` }}
            aria-hidden="true"
          />
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: `${layout.height}px` }} aria-hidden="true">
            <span className="block h-0 w-0 border-l-[18px] border-r-[18px] border-t-[24px] border-l-transparent border-r-transparent border-t-east-500" />
          </div>

          {yearLabels.map((label) => (
            <span
              key={label.year}
              className="absolute left-1/2 -translate-x-1/2 rounded-full border border-timeline-100 bg-white/95 px-6 py-3 text-2xl font-semibold text-slate-700 shadow-sm"
              style={{ top: `${label.top}px` }}
            >
              {label.year}
            </span>
          ))}

          {events.map((event) => (
            <EventMarker
              key={event.id}
              event={event}
              topPx={layout.topById.get(event.id) ?? event.positionPx}
              selected={event.id === selectedEventId}
              onSelect={onSelectEvent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
