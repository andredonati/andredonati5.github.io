// Central content store — real, verifiable facts only, per strategy-brief.md v3's
// "no invented facts" requirement. Sourced from pipeline-inputs/resume/Andrea_Donati_Resume_Master_Reference.md.

export interface ClientEntry {
  name: string
  annotation: string
  rotation: number
  offset: number
}

export const clients: ClientEntry[] = [
  {
    name: 'Telstra',
    annotation: 'platform rebuild, solo frontend',
    rotation: -2,
    offset: 0,
  },
  {
    name: 'Mercedes-Benz',
    annotation: 'Android, Fortune 500',
    rotation: 1.5,
    offset: 14,
  },
  {
    name: 'NRG Energy',
    annotation: 'Android, Fortune 500',
    rotation: -1,
    offset: -6,
  },
]

export interface WorkHistoryRow {
  dateRange: string
  role: string
  company: string
  location: string
  description: string
}

export const workHistory: WorkHistoryRow[] = [
  {
    dateRange: "Oct '24 — Present",
    role: 'Senior Software Developer (Technical Architect / Client Lead)',
    company: 'TBWA',
    location: 'Sydney, AUS',
    description:
      "Built the awards platform frontend from the ground up solo for Telstra — Next.js 15, React, Node.js — replacing a legacy monolith. Owned architecture, AWS infra (S3, Amplify, CloudFront), and delivery: shipped in 8 months against a 12-month target.",
  },
  {
    dateRange: "Nov '22 — Oct '24",
    role: 'Senior Android Developer',
    company: 'Credera',
    location: 'Chicago, USA',
    description:
      "Led a team of 4 developers to 100% on-time delivery across 50+ PR reviews. Cut deployment time 25% via CI/CD work in Jenkins, and drove a 15% user-satisfaction improvement on Mercedes-Benz's Android app.",
  },
  {
    dateRange: "Oct '21 — Nov '22",
    role: 'Android Developer',
    company: 'Credera',
    location: 'Chicago, USA',
    description:
      "Improved user-behavior insight 55% for NRG Energy across 5 Android apps via Adobe Analytics, and averted roughly $150K in budget overruns by re-planning a reduced-team release.",
  },
]

export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular'],
  },
  {
    label: 'Mobile',
    skills: ['Kotlin', 'Java', 'React Native (prior experience)'],
  },
  {
    label: 'Backend & Infra',
    skills: ['Node.js', 'AWS (S3, Amplify, CloudFront)', 'SQL', 'C++'],
  },
  {
    label: 'AI & Agentic Development',
    skills: [
      'Claude Code',
      'Codex',
      'Prompt Engineering',
      'Context Engineering',
      'Agent Workflow Design',
    ],
  },
  {
    label: 'Process & Leadership',
    skills: [
      'Architecture & Design Patterns',
      'CI/CD Pipeline Optimization',
      'Code Review & Mentorship',
      'Technical Documentation',
      'Team Leadership',
      'Agile Development',
    ],
  },
]

export const stats = [
  { value: '5+ yrs', label: 'architecture, delivery, and client leadership' },
  { value: '3', label: 'Fortune 500 / enterprise clients shipped for' },
  { value: '33%', label: 'ahead of schedule on a solo platform rebuild' },
]

export interface CapabilityEntry {
  number: string
  title: string
  body: string
}

export const capabilities: CapabilityEntry[] = [
  {
    number: '01',
    title: 'Full builds',
    body: "A site or tool that doesn't exist yet, built end to end: architecture, frontend, backend, and the infrastructure to run it. The same ownership I bring to enterprise platforms, applied to your business.",
  },
  {
    number: '02',
    title: 'Technical audits & fixes',
    body: "Something's broken, slow, or hard to maintain. I find the actual problem, explain it in plain language, and fix it myself, rather than handing over a checklist of vague recommendations.",
  },
  {
    number: '03',
    title: 'Small-business sites & tools',
    body: "Custom web work for service-based businesses that need to look and function like they mean it. Built clean, without templates or a bloated CMS to fight with later.",
  },
  {
    number: '04',
    title: 'Ongoing technical partner',
    body: "Ongoing technical support for businesses that don't want to start from scratch every time something comes up: I already know the system, so the next fix or feature moves faster.",
  },
]
