import { useEffect, useRef, useState } from "react";
import type { EventItem, Side } from "../data/events";

type DetailDrawerProps = {
  event: EventItem | null;
  side: Side;
  open: boolean;
  onClose: () => void;
};

export function DetailDrawer({ event, side, open, onClose }: DetailDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  useEffect(() => {
    if (!open) {
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    setFailedImages([]);
  }, [event?.id]);

  if (!event) {
    return null;
  }

  const drawerImages =
    event.images && event.images.length > 0
      ? event.images
      : event.image
        ? [{ src: event.image.src, link: event.image.link, alt: event.image.alt }]
        : [];

  const bulletPrefix = /^(?:●|-|\?)\s*/;
  const resolveImageSrc = (src: string) => {
    if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith(import.meta.env.BASE_URL)) {
      return src;
    }
    return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
  };

  const isWest = side === "west";
  const panelPositionClass = isWest ? "left-0" : "right-0";
  const closedTransformClass = isWest ? "-translate-x-full" : "translate-x-full";
  const drawerToneClass = isWest
    ? "border-r border-west-200 bg-gradient-to-b from-white via-white to-west-50/35"
    : "border-l border-east-200 bg-gradient-to-b from-white via-white to-east-50/35";
  const headingToneClass = isWest ? "text-west-700" : "text-east-700";
  const chipToneClass = isWest
    ? "border-west-200 bg-west-50/65 text-west-700"
    : "border-east-200 bg-east-50/65 text-east-700";
  const linkToneClass = isWest
    ? "underline decoration-west-300 underline-offset-2 hover:text-west-700"
    : "underline decoration-east-300 underline-offset-2 hover:text-east-700";
  const parsedDetails = event.details
    .map((item) => {
      const lines = item
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.length === 0) {
        return null;
      }

      const hasHeading = lines[0].endsWith(":");
      const heading = hasHeading ? lines[0] : null;
      const contentLines = hasHeading ? lines.slice(1) : lines;
      const bullets: string[] = [];
      let currentBullet = "";

      for (const line of contentLines) {
        if (bulletPrefix.test(line)) {
          if (currentBullet) {
            bullets.push(currentBullet.trim());
          }
          currentBullet = line.replace(bulletPrefix, "").trim();
        } else if (currentBullet) {
          currentBullet = `${currentBullet} ${line}`;
        } else {
          currentBullet = line;
        }
      }

      if (currentBullet) {
        bullets.push(currentBullet.trim());
      }

      return { heading, bullets, raw: item };
    })
    .filter((entry): entry is { heading: string | null; bullets: string[]; raw: string } => entry !== null);
  const hasHeadings = parsedDetails.some((entry) => Boolean(entry.heading));

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`Vertiefung zu ${event.title}`}
        className={`fixed ${panelPositionClass} top-0 z-50 h-full w-full md:w-[72vw] md:max-w-[980px] p-6 shadow-2xl transition-transform duration-300 ${drawerToneClass} ${open ? "translate-x-0" : closedTransformClass}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="mt-1 font-display text-2xl text-slate-900">{event.title}</h3>
            <p className={`text-sm font-semibold uppercase tracking-wide ${headingToneClass}`}>{event.dateLabel}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="rounded-md border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            onClick={onClose}
            aria-label="Drawer schliessen"
          >
            X
          </button>
        </div>

        <div className="mt-5 space-y-4 overflow-y-auto pr-1">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-wide ${headingToneClass}`}>Vertiefung</p>
            <div className={`mt-2 rounded-lg border px-4 py-3 text-base text-slate-700 ${chipToneClass}`}>
              {!hasHeadings && (
                <ul className="list-disc space-y-1 pl-6">
                  {parsedDetails.flatMap((entry) => entry.bullets).map((bullet, idx) => (
                    <li key={`${event.id}-flat-bullet-${idx}`} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {hasHeadings && (
                <div className="space-y-4">
                  {parsedDetails.map((entry, idx) => (
                    <div key={`${event.id}-group-${idx}`} className="space-y-2">
                      {entry.heading && <p className="font-semibold text-slate-800">{entry.heading}</p>}
                      {entry.bullets.length > 0 ? (
                        <ul className="list-disc space-y-1 pl-6">
                          {entry.bullets.map((bullet, bulletIdx) => (
                            <li key={`${event.id}-group-${idx}-bullet-${bulletIdx}`} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="leading-relaxed">{entry.raw}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {event.sources && event.sources.length > 0 && (
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide ${headingToneClass}`}>Quellen</p>
              <ul className="mt-1 space-y-2 text-sm text-slate-700">
                {event.sources.map((source) => (
                  <li key={source}>
                    <a
                      className={linkToneClass}
                      href={source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {drawerImages.length > 0 && (
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide ${headingToneClass}`}>Bilder</p>
              <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                {drawerImages.map((img) => {
                  const imageSrc = resolveImageSrc(img.src);
                  const hasFailed = failedImages.includes(imageSrc);
                  return (
                    <div key={imageSrc}>
                      {!hasFailed && (
                        <img
                          src={imageSrc}
                          alt={img.alt}
                          className="h-[230px] w-full rounded-lg border border-slate-200 object-contain"
                          onError={() => setFailedImages((prev) => (prev.includes(imageSrc) ? prev : [...prev, imageSrc]))}
                        />
                      )}
                      {hasFailed && (
                        <p className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                          Bilddatei nicht gefunden. Lege die konfigurierte Datei im Ordner `public/images` ab.
                        </p>
                      )}
                      <a
                        className={`mt-2 block text-sm ${linkToneClass}`}
                        href={img.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {img.link}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
