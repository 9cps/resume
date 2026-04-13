import smartFeedImg from '../assets/work/smart-feed.svg'
import tdrTtbImg from '../assets/work/tdr-ttb.jpg'
import ntImg from '../assets/work/nt.png'
import eatshubImg from '../assets/work/eatshub.jpg'

const projects = [
  {
    title: 'Smart Feed Planning',
    subtitle: 'The control room behind every CPF feed formula',
    tag: 'Agri-Tech',
    image: smartFeedImg,
    hoverRotate: 'hover:rotate-1',
  },
  {
    title: 'Debt Restructuring System',
    subtitle: 'Credit scoring & debt rescue engine for ttb Bank',
    tag: 'Fintech',
    image: tdrTtbImg,
    hoverRotate: 'hover:-rotate-1',
  },
  {
    title: 'NT Online Payment',
    subtitle: 'Nationwide bill-pay gateway for everyday customers',
    tag: 'Payment',
    image: ntImg,
    hoverRotate: 'hover:rotate-1',
  },
  {
    title: 'POS EatsHub',
    subtitle: 'Front-of-house POS meets online ordering, in one stack',
    tag: 'F&B',
    image: eatshubImg,
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
        <a
          href="https://github.com/9cps"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal reveal-right inline-flex items-center gap-2 bg-tertiary border-4 border-slate-900 p-4 shadow-retro-sm font-black uppercase animate-float hover:bg-primary hover:text-white transition-colors"
          style={{ '--stagger-index': 2 } as React.CSSProperties}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
          </svg>
          Github
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-container">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} staggerIndex={i + 3} />
        ))}
      </div>
    </section>
  )
}
