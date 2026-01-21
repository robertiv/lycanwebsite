"use client";

import { Shield, Users, Star } from "lucide-react";
import { LycanBox } from "./ui/lycan-box";

interface Guild {
  rank: number;
  name: string;
  level: number;
  fortress: number;
  members: number;
  leader: string;
}

const topGuilds: Guild[] = [
  { rank: 1, name: "Legends", level: 7840, fortress: 5, members: 24, leader: "DragonMaster" },
  { rank: 2, name: "DarkForce", level: 7240, fortress: 4, members: 22, leader: "ShadowBlade" },
  { rank: 3, name: "Phoenix", level: 6258, fortress: 4, members: 20, leader: "PhoenixRise" },
  { rank: 4, name: "Wolves", level: 5105, fortress: 3, members: 18, leader: "WolfHunter" },
  { rank: 5, name: "Storm", level: 3251, fortress: 3, members: 16, leader: "StormBreaker" },
];

export function TopGuilds() {
  return (
    <LycanBox title="Top Guilds" icon={<Shield className="h-4 w-4" />} contentClassName="p-0">

      {/* Content */}
      <div className="divide-y divide-[var(--border)]">
        {topGuilds.map((guild) => (
          <div
            key={guild.name}
            className="flex items-center gap-3 p-3 transition-colors hover:bg-[var(--lycan-card-hover)]"
          >
            {/* Rank */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--lycan-gold)]/20 to-[var(--lycan-orange)]/20">
              <span className="text-sm font-bold text-[var(--lycan-gold)]">
                #{guild.rank}
              </span>
            </div>

            {/* Guild Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--foreground)] truncate">
                {guild.name}
              </p>
              <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-[var(--lycan-gold)]" />
                  Fw.{guild.fortress}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-[var(--lycan-gold)]" />
                  Points.{guild.level}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {guild.members}/24
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LycanBox>
  );
}
