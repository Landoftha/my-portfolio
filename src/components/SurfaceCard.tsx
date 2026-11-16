import React from "react";

export function SurfaceCard({
  children,
  className = "p-6"
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`theme-card rounded-2xl border ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({
  badgeIcon,
  badgeText,
  title,
  description
}: {
  badgeIcon: React.ReactNode;
  badgeText: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-2">
        {badgeIcon}
        <span>{badgeText}</span>
      </div>
      <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold theme-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm sm:text-base max-w-2xl theme-text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export function SkillTag({ label }: { label: string }) {
  return (
    <span className="theme-pill px-2.5 py-1 rounded-lg text-xs font-medium border">
      {label}
    </span>
  );
}
