"use client";

import type React from "react";
import { Zap, Shield, Sword, Users, Star, Globe } from "lucide-react";
import { LycanBox } from "@/components/ui/lycan-box";

interface Feature {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  { label: "Cap", value: "110", icon: <Star className="h-4 w-4" /> },
  { label: "Type", value: "PVE", icon: <Shield className="h-4 w-4" /> },
  { label: "Race", value: "CH & EU", icon: <Globe className="h-4 w-4" /> },
  { label: "Mastery", value: "440", icon: <Sword className="h-4 w-4" /> },
  { label: "EXP Rate", value: "300x", icon: <Zap className="h-4 w-4" /> },
  { label: "Party EXP", value: "350x", icon: <Users className="h-4 w-4" /> },
  { label: "Max Plus", value: "+15 ADV", icon: <Star className="h-4 w-4" /> },
  { label: "Gold Rate", value: "5x", icon: <Star className="h-4 w-4" /> },
  { label: "Drop Rate", value: "30x", icon: <Star className="h-4 w-4" /> },
  { label: "IP Limit", value: "6", icon: <Shield className="h-4 w-4" /> },
];

export function ServerFeatures() {
  return (
    <LycanBox title="Server Features" icon={<Zap className="h-4 w-4" />} contentClassName="p-0">
      <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
        {features.map((feature, index) => (
          <div
            key={`${feature.label}-${index}`}
            className="flex items-center gap-2 bg-[var(--card)] p-3"
          >
            <span className="text-[var(--lycan-gold)]">{feature.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[var(--muted-foreground)] truncate">
                {feature.label}
              </p>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {feature.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LycanBox>
  );
}
