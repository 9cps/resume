export function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-slate-900 border-t-8 border-primary relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="text-amber-400 font-headline text-xs font-black uppercase tracking-widest animate-pulse">
          &copy; 2026 CHOKPAISAN SRIPRAIWAN — DRAFTED, BUILT & SHIPPED ON THE GRID.
        </div>
        <div className="flex gap-12">
          <a
            className="text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white hover:underline decoration-primary decoration-4 underline-offset-8 transition-all"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-slate-400 font-black text-xs uppercase tracking-widest hover:text-white hover:underline decoration-primary decoration-4 underline-offset-8 transition-all"
            href="#"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
