import {
  ArrowDownTrayIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, PropsWithChildren, useEffect, useRef, useState} from 'react';

import Page from '../../components/Layout/Page';
import {portfolioItems} from '../../data/data';
import {projectDetails} from '../../data/projectDetails';

interface ProjectPageProps {
  slug: string;
}

// Fades content up once it scrolls into view.
const Reveal: FC<PropsWithChildren<{className?: string}>> = memo(({children, className}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.1},
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={classNames(
        'transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      ref={ref}>
      {children}
    </div>
  );
});
Reveal.displayName = 'Reveal';

const ProjectPage: NextPage<ProjectPageProps> = memo(({slug}) => {
  const index = portfolioItems.findIndex(item => item.slug === slug);
  const item = portfolioItems[index];
  const detail = projectDetails[slug];
  const previous = portfolioItems[(index - 1 + portfolioItems.length) % portfolioItems.length];
  const next = portfolioItems[(index + 1) % portfolioItems.length];
  const blur = typeof item.image === 'string' ? 'empty' : 'blur';

  return (
    <Page description={detail.summary} title={`${item.title} — Alex Guo`}>
      <div className="min-h-screen bg-neutral-900 text-neutral-200">
        <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-neutral-900/70 px-4 py-3 backdrop-blur sm:px-8">
          <Link
            className="flex items-center gap-x-2 text-sm font-medium text-neutral-200 transition-colors hover:text-orange-400"
            href="/#portfolio">
            <ArrowLeftIcon className="h-4 w-4" />
            All projects
          </Link>
          <Link className="text-sm font-bold text-white transition-colors hover:text-orange-400" href="/">
            Alex Guo
          </Link>
        </nav>

        <header className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
          <Image
            alt={item.title}
            className="object-cover"
            fill
            placeholder={blur}
            priority
            sizes="100vw"
            src={item.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/75 to-neutral-900/20" />
          <div className="relative z-10 mx-auto w-full max-w-screen-lg animate-fade-up px-4 pb-10 sm:px-8">
            {item.context && (
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">{item.context}</p>
            )}
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl">{item.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-200 sm:text-lg">{detail.summary}</p>
          </div>
        </header>

        <main className="mx-auto max-w-screen-lg px-4 pb-16 sm:px-8">
          {detail.metrics && (
            <div className="grid animate-fade-up grid-cols-2 gap-4 md:grid-cols-4">
              {detail.metrics.map(metric => (
                <div className="rounded-lg bg-neutral-800 p-4 ring-1 ring-white/10" key={metric.label}>
                  <p className="text-2xl font-bold text-orange-400 sm:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-sm text-neutral-400">{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <article className="flex flex-col gap-y-10 lg:col-span-2">
              {detail.sections.map(section => (
                <Reveal key={section.heading}>
                  <h2 className="border-l-4 border-orange-500 pl-3 text-xl font-bold text-white">{section.heading}</h2>
                  {section.paragraphs?.map(paragraph => (
                    <p className="mt-4 leading-relaxed text-neutral-300" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  {section.points && (
                    <ul className="mt-4 flex flex-col gap-y-3">
                      {section.points.map(point => (
                        <li className="flex gap-x-3 leading-relaxed text-neutral-300" key={point}>
                          <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}

              {detail.gallery && (
                <Reveal>
                  <h2 className="border-l-4 border-orange-500 pl-3 text-xl font-bold text-white">Gallery</h2>
                  <div className="mt-4 grid gap-6">
                    {detail.gallery.map(({image, caption}) => (
                      <figure className="overflow-hidden rounded-lg bg-neutral-800 ring-1 ring-white/10" key={caption}>
                        <Image
                          alt={caption}
                          className="h-auto w-full"
                          placeholder={typeof image === 'string' ? 'empty' : 'blur'}
                          sizes="(min-width: 1024px) 640px, 100vw"
                          src={image}
                        />
                        <figcaption className="p-3 text-sm text-neutral-400">{caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </Reveal>
              )}
            </article>

            <aside className="flex flex-col gap-y-6 lg:sticky lg:top-20 lg:self-start">
              <Reveal className="rounded-lg bg-neutral-800 p-5 ring-1 ring-white/10">
                <dl className="flex flex-col gap-y-3">
                  {detail.facts.map(fact => (
                    <div key={fact.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{fact.label}</dt>
                      <dd className="mt-0.5 text-sm text-neutral-100">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal className="rounded-lg bg-neutral-800 p-5 ring-1 ring-white/10">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Tech & skills</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {detail.stack.map(skill => (
                    <li
                      className="rounded-full border border-orange-500/40 px-2.5 py-0.5 text-xs text-orange-300"
                      key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
                {detail.links?.map(link => (
                  <a
                    className="mt-4 flex items-center gap-x-2 text-sm font-semibold text-orange-400 hover:text-orange-300"
                    href={link.href}
                    key={link.href}
                    rel="noopener noreferrer"
                    target="_blank">
                    {link.label}
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                ))}
              </Reveal>

              <Reveal className="rounded-lg bg-orange-500/10 p-5 ring-1 ring-orange-500/40">
                <p className="text-sm text-neutral-200">
                  Open to internships (full-time Dec 2026 – Feb 2027) and graduate roles in Wellington.
                </p>
                <div className="mt-4 flex flex-col gap-y-2">
                  <a
                    className="flex items-center justify-center gap-x-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
                    href="/assets/resume.pdf">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Download CV
                  </a>
                  <Link
                    className="flex items-center justify-center gap-x-2 rounded-full border border-orange-500 px-4 py-2 text-sm font-semibold text-orange-300 transition-colors hover:bg-orange-500/20"
                    href="/#contact">
                    <EnvelopeIcon className="h-4 w-4" />
                    Get in touch
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>

          <nav className="mt-16 grid gap-4 border-t border-neutral-700 pt-8 sm:grid-cols-2">
            <Link
              className="group flex flex-col rounded-lg p-4 ring-1 ring-white/10 transition hover:ring-orange-500/60"
              href={`/projects/${previous.slug}`}>
              <span className="flex items-center gap-x-1 text-xs uppercase tracking-wider text-neutral-400">
                <ArrowLeftIcon className="h-3 w-3" />
                Previous
              </span>
              <span className="mt-1 font-semibold text-white group-hover:text-orange-400">{previous.title}</span>
            </Link>
            <Link
              className="group flex flex-col rounded-lg p-4 text-right ring-1 ring-white/10 transition hover:ring-orange-500/60"
              href={`/projects/${next.slug}`}>
              <span className="flex items-center justify-end gap-x-1 text-xs uppercase tracking-wider text-neutral-400">
                Next
                <ArrowRightIcon className="h-3 w-3" />
              </span>
              <span className="mt-1 font-semibold text-white group-hover:text-orange-400">{next.title}</span>
            </Link>
          </nav>
        </main>
      </div>
    </Page>
  );
});
ProjectPage.displayName = 'ProjectPage';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: portfolioItems.map(({slug}) => ({params: {slug}})),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({params}) => ({
  props: {slug: String(params?.slug)},
});

export default ProjectPage;
