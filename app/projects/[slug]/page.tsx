import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Globe,
  Info,
  Lock,
  MessageCircle,
} from "lucide-react";
import { getCategory, getProject, projects, type Project } from "@/lib/projects";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const image = project.cover ?? project.screenshots?.[0]?.src;
  return {
    title: `${project.title} | Muneer Iqbal`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Muneer Iqbal`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

const visibilityLabel: Record<Project["visibility"], string> = {
  public: "Open source",
  private: "Private code",
  client: "Client work",
  fork: "Course fork",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold tracking-tight mb-4">{children}</h2>;
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const category = getCategory(project.category);
  const learning = project.kind === "learning";
  const parent = project.partOf ? getProject(project.partOf) : undefined;
  // A real screenshot makes the best top image; the designed 4:3 cover is the fallback.
  const firstShot = project.screenshots?.[0]?.src;
  const hero = firstShot ?? project.cover;
  const heroIsCover = !firstShot && !!project.cover;
  const gallery = (project.screenshots ?? []).filter((s) => s.src !== hero);

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="relative pt-28 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          All projects
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-medium text-purple-400">
              {category.icon} {category.name}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
              {project.visibility === "public" ? <Github size={12} /> : <Lock size={12} />}
              {visibilityLabel[project.visibility]}
            </span>
            {project.live && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{project.title}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{project.summary}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-purple-500/15"
              >
                <Globe size={16} />
                Visit live site
                <ExternalLink size={13} className="opacity-70" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card text-sm font-medium hover:text-purple-400 transition-all"
              >
                <Github size={16} />
                View code on GitHub
                <ExternalLink size={13} className="opacity-50" />
              </a>
            )}
          </div>
        </header>

        {/* Hero visual */}
        <div className={`rounded-2xl overflow-hidden glass-card mb-12 ${heroIsCover ? "max-w-3xl" : ""}`}>
          {hero ? (
            <Image
              src={hero}
              alt={`${project.title} preview`}
              width={heroIsCover ? 1600 : 1440}
              height={heroIsCover ? 1200 : 900}
              priority
              sizes={heroIsCover ? "(min-width: 768px) 768px, 100vw" : "(min-width: 1152px) 1152px, 100vw"}
              className="w-full h-auto"
            />
          ) : (
            <div className={`relative aspect-[16/7] bg-gradient-to-br ${category.color} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative text-center px-6">
                <div className="text-6xl mb-4">{category.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-white">{project.title}</p>
                <p className="text-white/80 mt-2">{category.name}</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {project.tryLive && project.live && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-5">
                <div className="flex gap-3 flex-1">
                  <Globe size={20} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-emerald-300 mb-1">Try it live</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.tryLive}</p>
                  </div>
                </div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 text-sm font-medium transition-all whitespace-nowrap"
                >
                  Open {project.live.replace(/^https?:\/\//, "")}
                  <ExternalLink size={13} />
                </a>
              </div>
            )}

            {project.note && (
              <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200/90">
                <Info size={18} className="flex-shrink-0 mt-0.5 text-amber-400" />
                <p>{project.note}</p>
              </div>
            )}

            <section>
              <SectionTitle>{learning ? "What it covers" : "The problem"}</SectionTitle>
              <p className="text-muted-foreground leading-relaxed text-[17px]">{project.problem}</p>
            </section>

            <section>
              <SectionTitle>{learning ? "What I did" : "How it was built"}</SectionTitle>
              <ol className="space-y-4">
                {project.approach.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {project.features && project.features.length > 0 && (
              <section>
                <SectionTitle>Key features</SectionTitle>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 rounded-xl glass-card p-4 text-sm">
                      <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <SectionTitle>{learning ? "What I took from it" : "Benefits"}</SectionTitle>
              <ul className="space-y-3">
                {project.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <ArrowRight size={18} className="flex-shrink-0 text-purple-400 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            {gallery.length > 0 && (
              <section>
                <SectionTitle>Screenshots</SectionTitle>
                <div className="space-y-8">
                  {gallery.map((shot) => (
                    <figure key={shot.src}>
                      <a
                        href={shot.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-colors"
                        aria-label={`Open full-size screenshot: ${shot.alt}`}
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={1440}
                          height={900}
                          sizes="(min-width: 1024px) 740px, 100vw"
                          className="w-full h-auto"
                        />
                      </a>
                      <figcaption className="text-sm text-muted-foreground mt-3">{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl glass-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Project details</h2>
              <dl className="space-y-4 text-sm">
                {project.role && (
                  <div>
                    <dt className="text-muted-foreground mb-1">Role</dt>
                    <dd className="font-medium">{project.role}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted-foreground mb-1">Category</dt>
                  <dd className="font-medium">{category.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Status</dt>
                  <dd className="font-medium">
                    {project.live ? "Live, " : ""}
                    {visibilityLabel[project.visibility].toLowerCase()}
                  </dd>
                </div>
                {parent && (
                  <div>
                    <dt className="text-muted-foreground mb-1">Part of</dt>
                    <dd>
                      <Link href={`/projects/${parent.slug}`} className="font-medium text-purple-400 hover:underline">
                        {parent.title}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="border-t border-white/10 mt-6 pt-6 space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tech stack</h2>
                {project.stack.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs text-muted-foreground mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {!learning && (
              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-6">
                <h2 className="font-semibold mb-2">Need something like this?</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Tell me what you want to build or automate, and I&apos;ll explain how I would approach it.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all"
                >
                  <MessageCircle size={15} />
                  Get in touch
                </Link>
              </div>
            )}
          </aside>
        </div>

        {/* Previous / next */}
        <nav className="grid sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-white/10" aria-label="More projects">
          <Link href={`/projects/${prev.slug}`} className="group rounded-xl glass-card p-5">
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <ArrowLeft size={12} /> Previous project
            </span>
            <p className="font-semibold mt-1 group-hover:text-purple-400 transition-colors">{prev.title}</p>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group rounded-xl glass-card p-5 sm:text-right">
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
              Next project <ArrowRight size={12} />
            </span>
            <p className="font-semibold mt-1 group-hover:text-purple-400 transition-colors">{next.title}</p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
