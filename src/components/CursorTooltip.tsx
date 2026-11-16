"use client";

import React, { useState } from "react";
import { LinkedinIcon } from "./Icons";

export interface CursorTooltipState {
  visible: boolean;
  x: number;
  y: number;
  label: string;
}

export function useCursorTooltip(defaultLabel = "LinkedIn") {
  const [tooltip, setTooltip] = useState<CursorTooltipState>({
    visible: false,
    x: 0,
    y: 0,
    label: defaultLabel
  });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      label: defaultLabel
    });
  };

  const onMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return { tooltip, onMouseMove, onMouseLeave };
}

export function CursorTooltip({ tooltip }: { tooltip: CursorTooltipState }) {
  if (!tooltip.visible) return null;

  return (
    <div
      style={{
        left: `${tooltip.x + 14}px`,
        top: `${tooltip.y + 18}px`
      }}
      className="fixed z-[100] pointer-events-none px-2.5 py-1 bg-[#1e1e1e] text-[#f5f5f5] text-xs font-sans border border-white/40 shadow-lg flex items-center gap-1.5 whitespace-nowrap"
    >
      <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
      <span>{tooltip.label}</span>
    </div>
  );
}
