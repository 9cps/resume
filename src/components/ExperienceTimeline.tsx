const roles = [
  {
    title: 'Software Engineer',
    company: 'ttb Bank (TMBThanachart Bank Public Co., Ltd.)',
    period: 'Jun 2024 — Present',
    description:
      'Engineering debt restructuring and credit scoring engines that move real money for real customers. Owning architecture, databases, and CI/CD end-to-end while modernizing legacy stacks under strict',
    highlight: 'banking-grade compliance',
    overlay: 'dither-gradient',
    overlayOpacity: '',
  },
  {
    title: 'Full-Stack Developer',
    company: 'AXONS (Cpf IT Center Co., Ltd.)',
    period: 'Mar 2023 — May 2024',
    description:
      'Shipped Smart Feed Planning, Feed Queue, and Estimate Premix — the operational backbone orchestrating feed formulas and logistics across CPF factories at home and abroad, all delivered through tight',
    highlight: 'agile cycles',
    overlay: 'dither-gradient',
    overlayOpacity: 'opacity-50',
  },
  {
    title: 'Software Developer',
    company: "Soft De'but Co., Ltd.",
    period: 'Nov 2020 — Feb 2023',
    description:
      'Launched NT Online Payment, POS EatsHub, and the Equitable Education Fund platform — owning every step from requirement gathering and deployment to the constant',
    highlight: 'R&D of new tooling',
    overlay: 'pixel-pattern',
    overlayOpacity: 'opacity-[0.03]',
  },
]

function RoleCard({
  role,
  staggerIndex,
}: {
  role: (typeof roles)[number]
  staggerIndex: number
}) {
  return (
    <div
      className="reveal reveal-right bg-white border-4 border-slate-900 shadow-retro hover:translate-x-2 transition-transform relative overflow-hidden"
      style={{ '--stagger-index': staggerIndex } as React.CSSProperties}
    >
      <div className={`absolute inset-0 ${role.overlay} pointer-events-none ${role.overlayOpacity}`} />
      <div className="p-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div>
            <h3 className="text-4xl font-black text-slate-900 uppercase leading-none mb-1">{role.title}</h3>
            <p className="text-primary font-extrabold text-xl uppercase italic tracking-tighter">{role.company}</p>
          </div>
          <span className="text-sm font-black uppercase tracking-widest text-white bg-slate-900 py-2 px-6 border-4 border-slate-900 self-start">
            {role.period}
          </span>
        </div>
        <div className="border-l-4 border-slate-200 pl-6">
          <p className="text-slate-800 font-medium text-xl leading-relaxed">
            {role.description}{' '}
            <span className="bg-primary/10 px-1 font-bold">{role.highlight}</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative bg-slate-900 py-32 px-8 border-y-8 border-primary overflow-hidden">
      {/* Mid-ground Parallax */}
      <div
        className="parallax-layer parallax-mg absolute inset-0 opacity-20"
        data-speed="0.1"
        style={{ backgroundImage: 'radial-gradient(circle, #F1A13C 2px, transparent 0)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 stagger-container">
        <div className="lg:col-span-4">
          <h2
            className="reveal reveal-left text-5xl font-black text-white uppercase leading-none italic"
            style={{ '--stagger-index': 1 } as React.CSSProperties}
          >
            Chronicle of <br />
            <span className="text-primary not-italic">Progression</span>
          </h2>
          <div
            className="reveal reveal-left mt-8 grid grid-cols-4 gap-2"
            style={{ '--stagger-index': 2 } as React.CSSProperties}
          >
            <div className="h-2 bg-primary" />
            <div className="h-2 bg-tertiary" />
            <div className="h-2 bg-slate-700" />
            <div className="h-2 bg-white" />
          </div>
        </div>

        <div className="lg:col-span-8 stagger-container">
          <div className="space-y-16">
            {roles.map((role, i) => (
              <RoleCard key={role.title} role={role} staggerIndex={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
