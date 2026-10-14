import {ArrowRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, useEffect, useMemo, useRef, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import testimonialImage from '../../images/testimonial.webp';
import Section from '../Layout/Section';

type Filter = 'all' | PortfolioItem['category'];
type TileSize = 'big' | 'wide' | 'small';

/**
 * Bento layout: a few 2×2 feature tiles and 2×1 wide tiles among 1×1 tiles.
 * Chooses how many of each so the cells fill whole rows of the 4-column grid.
 */
const bentoLayout = (count: number): TileSize[] => {
  const sizes: TileSize[] = Array(count).fill('small');
  if (count < 3) return sizes;
  const bigs = Math.max(1, Math.round(count / 6));
  const wides = (4 - ((count + 3 * bigs) % 4)) % 4;
  for (let i = 0; i < bigs; i++) {
    sizes[Math.floor((i * count) / bigs)] = 'big';
  }
  for (let i = count - 1, placed = 0; i >= 0 && placed < wides; i -= 2) {
    if (sizes[i] === 'small') {
      sizes[i] = 'wide';
      placed++;
    }
  }
  return sizes;
};

const tileSpan: Record<TileSize, string> = {
  big: 'sm:col-span-2 sm:row-span-2',
  wide: 'sm:col-span-2',
  small: '',
};

const filters: {id: Filter; label: string}[] = [
  {id: 'all', label: 'All'},
  {id: 'university', label: 'University'},
  {id: 'industry', label: 'Industry'},
];

const Portfolio: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const [filter, setFilter] = useState<Filter>('all');
  const visibleItems = useMemo(
    () => (filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter)),
    [filter],
  );
  const layout = useMemo(() => bentoLayout(visibleItems.length), [visibleItems.length]);

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
          <div className="mt-2 flex gap-x-2" role="group">
            {filters.map(({id, label}) => (
              <button
                aria-pressed={filter === id}
                className={classNames(
                  'rounded-full border px-4 py-1 text-sm font-medium transition-colors',
                  filter === id
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-neutral-600 text-neutral-300 hover:border-orange-500 hover:text-white',
                )}
                key={id}
                onClick={() => setFilter(id)}
                type="button">
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid auto-rows-[200px] grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[210px] lg:grid-cols-4">
          {visibleItems.map((item, index) => (
            <ProjectTile index={index} item={item} key={item.title} size={layout[index]} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

// Image-led tile: title and context sit on the photo; details live on the project page.
const ProjectTile: FC<{item: PortfolioItem; index: number; size: TileSize}> = memo(({item, index, size}) => {
  const {title, slug, context, image} = item;
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

  return (
    <div
      className={classNames(
        'transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        tileSpan[size],
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
      ref={ref}
      style={{transitionDelay: `${(index % 4) * 90}ms`}}>
      <Link
        aria-label={`View project: ${title}`}
        className="group relative block h-full overflow-hidden rounded-xl shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-300 hover:ring-2 hover:ring-orange-500/80"
        href={`/projects/${slug}`}>
        <Image
          alt={title}
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
          fill
          placeholder={typeof image === 'string' ? 'empty' : 'blur'}
          sizes={
            size === 'small'
              ? '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
              : '(min-width: 640px) 50vw, 100vw'
          }
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          {context && <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">{context}</p>}
          <h3
            className={classNames(
              'mt-1 font-bold leading-snug text-white',
              size === 'big' ? 'text-xl sm:text-2xl' : 'text-base',
            )}>
            {title}
          </h3>
          <span className="mt-1 flex max-h-0 items-center gap-x-1 overflow-hidden text-sm font-semibold text-orange-300 opacity-0 transition-all duration-300 group-hover:max-h-6 group-hover:opacity-100 touch:max-h-6 touch:opacity-100">
            View project
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </div>
  );
});

ProjectTile.displayName = 'ProjectTile';
