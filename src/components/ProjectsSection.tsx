const projects = [
  {
    title: 'Smart Feed Planning',
    subtitle: 'The control room behind every CPF feed formula',
    tag: 'Agri-Tech',
    image: '',
    hoverRotate: 'hover:rotate-1',
  },
  {
    title: 'Debt Restructuring System',
    subtitle: 'Credit scoring & debt rescue engine for ttb Bank',
    tag: 'Fintech',
    image: '',
    hoverRotate: 'hover:-rotate-1',
  },
  {
    title: 'NT Online Payment',
    subtitle: 'Nationwide bill-pay gateway for everyday customers',
    tag: 'Payment',
    image: '',
    hoverRotate: 'hover:rotate-1',
  },
  {
    title: 'POS EatsHub',
    subtitle: 'Front-of-house POS meets online ordering, in one stack',
    tag: 'F&B',
    image: '',
    hoverRotate: 'hover:-rotate-1',
  },
]

function ProjectCard({
  project,
  staggerIndex,
}: {
  project: (typeof projects)[number]
  staggerIndex: number
}) {
  return (
    <div
      className={`reveal reveal-scale group bg-white border-4 border-slate-900 p-6 shadow-retro ${project.hoverRotate} transition-transform`}
      style={{ '--stagger-index': staggerIndex } as React.CSSProperties}
    >
      <div className="aspect-video bg-slate-100 border-4 border-slate-900 overflow-hidden mb-8 relative flex items-center justify-center">
        {project.image ? (
          <img
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            src={project.image}
          />
        ) : (
          <span className="material-symbols-outlined text-8xl text-slate-300">deployed_code</span>
        )}
        <div className="absolute top-4 right-4 bg-primary text-white font-black px-4 py-1 uppercase text-xs border-2 border-slate-900">
          {project.tag}
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black text-slate-900 uppercase group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 font-bold uppercase text-sm mt-1">{project.subtitle}</p>
        </div>
        <span className="material-symbols-outlined text-4xl text-slate-900 group-hover:translate-x-2 transition-transform">
          arrow_forward_ios
        </span>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 stagger-container">
        <div
          className="reveal reveal-left"
          style={{ '--stagger-index': 1 } as React.CSSProperties}
        >
          <h2 className="text-6xl font-black text-slate-900 uppercase italic">
            Selected <span className="text-primary not-italic">Works</span>
          </h2>
          <p className="text-slate-600 font-bold uppercase tracking-widest mt-4">
            Field notes from banking, agri-tech & public sector builds.
          </p>
        </div>
        <div
          className="reveal reveal-right bg-tertiary border-4 border-slate-900 p-4 shadow-retro-sm font-black uppercase animate-float"
          style={{ '--stagger-index': 2 } as React.CSSProperties}
        >
          Archive Vol. 1
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-container">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} staggerIndex={i + 3} />
        ))}
      </div>
    </section>
  )
}
