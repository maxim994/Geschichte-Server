import { useMemo, useRef, useState } from "react";
import { PageHeader } from "./components/PageHeader";
import { Timeline } from "./components/Timeline";
import { InfoPanel } from "./components/InfoPanel";
import { DetailDrawer } from "./components/DetailDrawer";
import type { Side } from "./data/events";
import { events } from "./data/events";

function App() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<Side>("west");
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const selectedEvent = useMemo(
    () => events.find((event) => event.id === selectedEventId) ?? null,
    [selectedEventId]
  );

  const handleSelectEvent = (id: string) => {
    setSelectedEventId(id);
    setDrawerOpen(false);
  };

  const handleOpenDrawer = (side: Side, trigger: HTMLButtonElement | null) => {
    setDrawerSide(side);
    lastTriggerRef.current = trigger;
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    window.setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 0);
  };

  const handleClearSelection = () => {
    setSelectedEventId(null);
    setDrawerOpen(false);
  };

  return (
    <main className="mx-auto w-full max-w-[2300px] p-6 pb-16 sm:p-8">
      <PageHeader />

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[minmax(340px,1fr)_minmax(760px,1020px)_minmax(340px,1fr)]">
        <div className="order-2 rounded-3xl border border-west-100/70 bg-gradient-to-br from-west-100/60 via-white/85 to-white p-1.5 shadow-panel md:order-1">
          <InfoPanel
            title="West"
            panelSide="west"
            selectedEvent={selectedEvent}
            accentClass="md:border-l-4 md:border-west-500"
            onOpenDrawer={handleOpenDrawer}
            onClearSelection={handleClearSelection}
          />
        </div>

        <div className="order-1 md:order-2">
          <Timeline events={events} selectedEventId={selectedEventId} onSelectEvent={handleSelectEvent} />
        </div>

        <div className="order-3 rounded-3xl border border-east-100/70 bg-gradient-to-bl from-east-100/60 via-white/85 to-white p-1.5 shadow-panel">
          <InfoPanel
            title="Ost"
            panelSide="east"
            selectedEvent={selectedEvent}
            accentClass="md:border-r-4 md:border-east-500"
            onOpenDrawer={handleOpenDrawer}
            onClearSelection={handleClearSelection}
          />
        </div>
      </div>

      <DetailDrawer event={selectedEvent} side={drawerSide} open={drawerOpen} onClose={handleCloseDrawer} />
    </main>
  );
}

export default App;

