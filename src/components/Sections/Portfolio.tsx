import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useMemo, useRef, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import testimonialImage from '../../images/testimonial.webp';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  useEffect(() => {
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setParallaxEnabled(!isMobileDevice);
  }, []);

  const bgStyle = useMemo(() => ({backgroundImage: `url(${(testimonialImage as unknown as {src: string}).src})`}), []);
  return (
    <Section
      className={['bg-cover', 'bg-center', parallaxEnabled ? 'bg-fixed' : ''].join(' ')}
      sectionId={SectionId.Portfolio}
      style={bgStyle}>
      <div className="flex flex-col gap-y-8 rounded-xl bg-neutral-900/80 p-6">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <h2 className="text-xl font-bold text-white">Selected Projects</h2>
          <p className="text-sm text-neutral-300">
            Recent work at Victoria University of Wellington, plus highlights from 12 years in industry.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <ProjectCard index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

// Fades each card up as it scrolls into view, staggered across the row.
const ProjectCard: FC<{item: PortfolioItem; index: number}> = memo(({item, index}) => {
  const {title, description, context, tags, url, image} = item;
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
      {threshold: 0.15},
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const card = (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-neutral-800/90 shadow-lg shadow-black/30 ring-1 ring-white/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-orange-500/60">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          placeholder={typeof image === 'string' ? 'empty' : 'blur'}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={image}
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-2 p-4">
        <div className="flex items-start justify-between gap-x-2">
          <h3 className="font-bold text-white">{title}</h3>
          {url && <ArrowTopRightOnSquareIcon className="mt-1 h-4 w-4 shrink-0 text-orange-400" />}
        </div>
        {context && <p className="text-xs font-medium text-orange-400">{context}</p>}
        <p className="text-sm text-neutral-300">{description}</p>
        {tags && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map(tag => (
              <li className="rounded-full border border-orange-500/40 px-2 py-0.5 text-xs text-orange-300" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={classNames(
        'group h-full transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
      ref={ref}
      style={{transitionDelay: `${(index % 3) * 120}ms`}}>
      {url ? (
        <a className="block h-full" href={url} rel="noopener noreferrer" target="_blank">
          {card}
        </a>
      ) : (
        card
      )}
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
