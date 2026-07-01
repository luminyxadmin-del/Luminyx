interface Props {
  status: "Active" | "Launching";
}

export function StatusBadge({ status }: Props) {
  if (status === "Active") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-success/15 text-success">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-light-gray/80 text-ink-faint">
      <span className="w-1.5 h-1.5 rounded-full bg-ink-faint/60" />
      Launching
    </span>
  );
}
