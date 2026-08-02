export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-bg absolute inset-0 animate-drift opacity-60" />
      <div className="absolute left-1/2 top-0 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-accent-green/10 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[360px] w-[560px] rounded-full bg-accent-blue/10 blur-[120px]" />
    </div>
  );
}
