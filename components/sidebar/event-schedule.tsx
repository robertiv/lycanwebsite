"use client";

import { Calendar, Clock, Star } from "lucide-react";
import { LycanBox } from "@/components/ui/lycan-box";

interface GameEvent {
  name: string;
  time: string;
  type: "daily" | "weekly" | "special";
  active?: boolean;
}

const events: GameEvent[] = [
  { name: "Fortress War", time: "Saturday 20:00", type: "weekly" },
  { name: "Arena Tournament", time: "Daily 18:00", type: "daily", active: true },
  { name: "Unique Spawn", time: "Every 6 hours", type: "daily" },
  { name: "CTF Event", time: "Sunday 16:00", type: "weekly" },
  { name: "Double EXP Weekend", time: "Fri-Sun", type: "special" },
];

export function EventSchedule() {
  return (
    <LycanBox title="Event Schedule" icon={<Calendar className="h-4 w-4" />} contentClassName="p-0">
      <div className="divide-y divide-[var(--border)]">
        {events.map((event, index) => (
          <div
            key={`${event.name}-${index}`}
            className={`flex items-center gap-3 p-3 transition-colors hover:bg-[var(--lycan-card-hover)] ${
              event.active ? "bg-[var(--lycan-gold)]/5" : ""
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                event.type === "special"
                  ? "bg-[var(--lycan-orange)]/20"
                  : event.type === "weekly"
                    ? "bg-[var(--lycan-gold)]/20"
                    : "bg-[var(--muted)]/50"
              }`}
            >
              {event.type === "special" ? (
                <Star className="h-4 w-4 text-[var(--lycan-orange)]" />
              ) : (
                <Clock className="h-4 w-4 text-[var(--lycan-gold)]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)] flex items-center gap-2">
                {event.name}
                {event.active && (
                  <span className="rounded-full bg-[var(--lycan-success)] px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                    Live
                  </span>
                )}
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LycanBox>
  );
}
