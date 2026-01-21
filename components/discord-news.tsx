"use client";

import { MessageSquare, User, Clock, Pin } from "lucide-react";
import { LycanBox } from "@/components/ui/lycan-box";
interface NewsItem {
  author: string;
  content: string;
  time: string;
  pinned?: boolean;
}

const newsItems: NewsItem[] = [
  {
    author: "Admin",
    content: "Server maintenance scheduled for Saturday 06:00 UTC. Expected downtime: 2 hours. Thank you for your patience!",
    time: "2h ago",
    pinned: true,
  },
  {
    author: "GM_Wolf",
    content: "Double EXP event starts this weekend! Don't miss the chance to level up your characters faster!",
    time: "5h ago",
    pinned: true,
  },
  {
    author: "Admin",
    content: "New patch v2.5.1 is now live! Check the patch notes for all the exciting new features and bug fixes.",
    time: "1d ago",
  },
  
];

export function DiscordNews() {
  return (
    <LycanBox title="News & Announcements" icon={<MessageSquare className="h-4 w-4" />} contentClassName="p-0">
      

      {/* Content */}
      <div className="max-h-96 divide-y divide-[var(--border)] overflow-y-auto">
        {newsItems.map((item, index) => (
          <div
            key={`${item.author}-${index}`}
            className={`p-4 transition-colors hover:bg-[var(--lycan-card-hover)] ${
              item.pinned ? "bg-[var(--lycan-gold)]/5" : ""
            }`}
          >
            {/* Author and time */}
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--lycan-gold)] to-[var(--lycan-orange)]">
                  <User className="h-4 w-4 text-[var(--lycan-dark)]" />
                </div>
                <span className="text-sm font-semibold text-[var(--lycan-gold)]">
                  {item.author}
                </span>
                {item.pinned && (
                  <Pin className="h-3 w-3 text-[var(--lycan-orange)]" />
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                <Clock className="h-3 w-3" />
                {item.time}
              </div>
            </div>

            {/* Content */}
            <p className="text-sm leading-relaxed text-[var(--foreground)]/90">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="border-t border-[var(--border)] p-3">
        <button
          type="button"
          className="w-full rounded-md bg-[var(--lycan-card-hover)] py-2 text-sm font-medium text-[var(--lycan-gold)] transition-colors hover:bg-[var(--lycan-gold)]/10"
        >
          View All Announcements
        </button>
      </div>
    </LycanBox>
  );
}
