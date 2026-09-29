"use client";

interface YearSliderProps {
  // Can be negative (BC/BCE).
  min: number;
  max: number;
  value: number;
  onChange: (year: number) => void;
}

export function formatYearLabel(year: number): string {
  return year < 0 ? `${Math.abs(year)} BC` : `${year} AD`;
}

// A horizontal slider alternative to typing a year directly — linear across the full min..max
// span, which is coarse at the far (ancient) end of a multi-thousand-year range, but that's an
// acceptable tradeoff here: the numeric input next to this stays available for anyone who wants
// to enter an exact year instead of dragging for it.
export default function YearSlider({ min, max, value, onChange }: YearSliderProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface-raised px-4 py-3">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{formatYearLabel(min)}</span>
        <span className="text-sm font-semibold text-foreground">{formatYearLabel(value)}</span>
        <span>{formatYearLabel(max)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--accent)]"
      />
    </div>
  );
}
