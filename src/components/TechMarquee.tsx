import type { ComponentType, SVGProps } from 'react'
import {
  SiGo,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiExpress,
  SiSpringboot,
  SiGin,
  SiVite,
  SiDocker,
  SiGitlab,
  SiBitbucket,
  SiJenkins,
  SiRedux,
  SiIntellijidea,
  SiAnthropic,
  SiOpenai,
  SiGithubcopilot,
  SiGooglegemini,
} from 'react-icons/si'
import { VscCode, VscTerminalCmd, VscSymbolNamespace, VscServerProcess, VscDatabase, VscTools } from 'react-icons/vsc'
import { TbBrandCSharp, TbDatabase } from 'react-icons/tb'
import { FaMicrosoft } from 'react-icons/fa'
import { DiMsqlServer } from 'react-icons/di'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

type Skill = { name: string; Icon: IconType }

type Category = {
  title: string
  HeaderIcon: IconType
  dotColor: string
  iconColor: string
  skills: Skill[]
}

const skillCategories: Category[] = [
  {
    title: 'CORE_LANG.SYS',
    HeaderIcon: VscTerminalCmd,
    dotColor: 'bg-white',
    iconColor: 'text-primary',
    skills: [
      { name: 'Go', Icon: SiGo },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'C#', Icon: TbBrandCSharp },
      { name: 'Java', Icon: SiOpenjdk },
      { name: 'SQL', Icon: SiMysql },
    ],
  },
  {
    title: 'FRAMEWORKS.LIB',
    HeaderIcon: VscSymbolNamespace,
    dotColor: 'bg-tertiary',
    iconColor: 'text-tertiary',
    skills: [
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Redux', Icon: SiRedux },
      { name: '.NET Core', Icon: SiDotnet },
      { name: 'Vite', Icon: SiVite },
      { name: 'Express.js', Icon: SiExpress },
      { name: 'Spring Boot', Icon: SiSpringboot },
      { name: 'Gin', Icon: SiGin },
    ],
  },
  {
    title: 'INFRASTRUCTURE.EXE',
    HeaderIcon: VscServerProcess,
    dotColor: 'bg-primary',
    iconColor: 'text-primary',
    skills: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'Azure', Icon: FaMicrosoft },
      { name: 'GitLab', Icon: SiGitlab },
      { name: 'Bitbucket', Icon: SiBitbucket },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'MySQL / SQL Server', Icon: SiMysql },
      { name: 'Oracle DB', Icon: TbDatabase },
    ],
  },
  {
    title: 'UTILITIES.BIN',
    HeaderIcon: VscTools,
    dotColor: 'bg-slate-400',
    iconColor: 'text-slate-600',
    skills: [
      { name: 'VS Code', Icon: VscCode },
      { name: 'IntelliJ IDEA', Icon: SiIntellijidea },
      { name: 'Claude', Icon: SiAnthropic },
      { name: 'ChatGPT', Icon: SiOpenai },
      { name: 'GitHub Copilot', Icon: SiGithubcopilot },
      { name: 'Gemini', Icon: SiGooglegemini },
    ],
  },
]

function SkillCard({
  category,
  staggerIndex,
}: {
  category: Category
  staggerIndex: number
}) {
  const HeaderIcon = category.HeaderIcon
  return (
    <div
      className="reveal reveal-scale bg-white border-4 border-slate-900 shadow-retro overflow-hidden"
      style={{ '--stagger-index': staggerIndex } as React.CSSProperties}
    >
      <div className="window-header">
        <span className="text-white text-xs font-black tracking-tighter uppercase flex items-center gap-2">
          <HeaderIcon className="w-4 h-4" /> {category.title}
        </span>
        <div className="flex gap-1">
          <div className={`window-dot ${category.dotColor}`} />
        </div>
      </div>
      <div className="p-6 space-y-3">
        {category.skills.map(({ name, Icon }) => (
          <div key={name} className="skill-chip">
            <Icon className={`${category.iconColor} w-5 h-5 shrink-0`} />
            {name}
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
