"use client";

import { Trophy, Crown, Medal, Award } from "lucide-react";
import Image from 'next/image';
import { LycanBox } from "@/components/ui/lycan-box";

interface Player {
  rank: number;
  name: string;
  level: number;
  guild: string;
  race: "chinese" | "european";
}

const topPlayers: Player[] = [
  { rank: 1, name: "DragonMaster", level: 1910, guild: "Legends", race: "chinese" },
  { rank: 2, name: "ShadowBlade", level: 1810, guild: "DarkForce", race: "european" },
  { rank: 3, name: "PhoenixRise", level: 1709, guild: "Phoenix", race: "chinese" },
  { rank: 4, name: "NightHunter", level: 1609, guild: "Wolves", race: "european" },
  { rank: 5, name: "StormBreaker", level: 1508, guild: "Storm", race: "chinese" },
];

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow-400" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-300" />;
    case 3:
      return <Medal className="h-5 w-5 text-amber-600" />;
    default:
      return <Award className="h-4 w-4 text-[var(--muted-foreground)]" />;
  }
}

function getRankBg(rank: number) {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-500/20 to-transparent";
    case 2:
      return "bg-gradient-to-r from-gray-400/20 to-transparent";
    case 3:
      return "bg-gradient-to-r from-amber-600/20 to-transparent";
    default:
      return "";
  }
}

export function TopPlayers() {
  return (
    <LycanBox title="Top Players" icon={<Trophy className="h-4 w-4" />} contentClassName="p-0">
    
      

      {/* Content */}
      <div className="divide-y divide-[var(--border)]">
        {topPlayers.map((player) => (
          <div
            key={player.name}
            className={`flex items-center gap-3 p-3 transition-colors hover:bg-[var(--lycan-card-hover)] ${getRankBg(player.rank)}`}
          >
            {/* Rank */}
            <div className="flex h-8 w-8 items-center justify-center">
              {getRankIcon(player.rank)}
            </div>

            {/* Player Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    src={`/images/${player.race}.png`} // Ruta desde la carpeta public
                    alt={player.race}
                    width={30} // Ancho en píxeles
                    height={30} // Alto en píxeles
                  />
                </span>
                <span className="text-sm font-semibold text-[var(--foreground)] truncate">
                  {player.name}
                </span>
                
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">
                <span className="text-[var(--lycan-gold)]">Guild: [{player.guild}]</span>
              </p>
            </div>

            {/* Level */}
            <div className="text-right">
              <p className="text-sm font-bold text-[var(--lycan-gold)]">
                P: {player.level}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="border-t border-[var(--border)] p-3">
        <button
          type="button"
          className="w-full rounded-md bg-[var(--lycan-card-hover)] py-2 text-sm font-medium text-[var(--lycan-gold)] transition-colors hover:bg-[var(--lycan-gold)]/10"
        >
          View Full Rankings
        </button>
      </div>
    
    </LycanBox>
  );
}
