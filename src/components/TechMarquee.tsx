const skillCategories = [
  {
    title: 'CORE_LANG.SYS',
    icon: 'code',
    dotColor: 'bg-white',
    iconColor: 'text-primary',
    skills: ['Go', 'TypeScript', 'C#.NET', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'FRAMEWORKS.LIB',
    icon: 'view_quilt',
    dotColor: 'bg-tertiary',
    iconColor: 'text-tertiary',
    skills: ['React', 'Next.js', '.NET Core', 'Express.js', 'Spring Boot', 'Gin'],
  },
  {
    title: 'INFRASTRUCTURE.EXE',
    icon: 'cloud',
    dotColor: 'bg-primary',
    iconColor: 'text-primary',
    skills: ['Docker', 'Azure DevOps', 'GitLab', 'Jenkins', 'Azure Pipelines', 'MySQL / SQL Server'],
  },
  {
    title: 'UTILITIES.BIN',
    icon: 'construction',
    dotColor: 'bg-slate-400',
    iconColor: 'text-slate-600',
    skills: ['VS Code', 'IntelliJ IDEA', 'Oracle DB', 'Redux', 'EF Core', 'System Architecture'],
  },
]

function SkillCard({
  category,
  staggerIndex,
}: {
  category: (typeof skillCategories)[number]
  staggerIndex: number
}) {
  const iconName = category.icon === 'code' ? 'terminal'
    : category.icon === 'view_quilt' ? 'diamond'
    : category.icon === 'cloud' ? 'settings_ethernet'
    : 'edit_note'

  return (
    <div
      className="reveal reveal-scale bg-white border-4 border-slate-900 shadow-retro overflow-hidden"
      style={{ '--stagger-index': staggerIndex } as React.CSSProperties}
    >
      <div className="window-header">
        <span className="text-white text-xs font-black tracking-tighter uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">{category.icon}</span> {category.title}
        </span>
        <div className="flex gap-1">
          <div className={`window-dot ${category.dotColor}`} />
        </div>
      </div>
      <div className="p-6 space-y-3">
        {category.skills.map((skill) => (
          <div key={skill} className="skill-chip">
            <span className={`material-symbols-outlined ${category.iconColor} text-base`}>{iconName}</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section id="technical-curation" className="relative py-32 overflow-hidden border-b-4 border-slate-900 bg-slate-50">
      <div
        className="parallax-layer parallax-bg absolute top-1/2 left-0 w-full h-full flex items-center justify-center opacity-[0.03] text-[20vw] font-black uppercase pointer-events-none select-none"
        data-speed="0.2"
      >
        STACK
      </div>

      <div className="max-w-7xl mx-auto px-8 mb-20 relative z-10">
        <h2 className="reveal reveal-left text-5xl font-black text-slate-900 uppercase italic">
          Technical <span className="text-primary">Curation</span>
        </h2>
        <p
          className="reveal reveal-left text-slate-600 font-bold uppercase tracking-widest mt-2"
          style={{ '--stagger-index': 1 } as React.CSSProperties}
        >
          System Modules Loaded: v2.0.4
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 stagger-container">
        {skillCategories.map((category, i) => (
          <SkillCard key={category.title} category={category} staggerIndex={i + 2} />
        ))}
      </div>
    </section>
  )
}
