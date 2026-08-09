import {FC, memo, useEffect, useMemo, useState} from 'react';

import {education, experience, SectionId, skills, testimonial} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const {imageSrc} = testimonial;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  useEffect(() => {
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setParallaxEnabled(!isMobileDevice);
  }, []);

  return (
    <Section
      className={['bg-cover', 'bg-center', parallaxEnabled ? 'bg-fixed' : ''].join(' ')}
      sectionId={SectionId.Resume}
      style={resolveSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined}>
      <div className="flex flex-col gap-y-6">
        <div className="rounded-xl bg-neutral-900/80 p-6">
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
        <div className="rounded-xl bg-neutral-900/80 p-6">
          <ResumeSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        </div>
        <div className="rounded-xl bg-neutral-900/80 p-6">
          <ResumeSection title="Skills">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;