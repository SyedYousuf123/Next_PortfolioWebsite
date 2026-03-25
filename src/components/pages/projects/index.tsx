import SectionTitle from '@/components/sections/title';
import { GlobalMessageKeys } from '@/i18n/keys';
import { useTranslations } from 'next-intl';
import React from 'react';
import { PROJECTS_ITEMS } from './utils/projects';
import ProjectsItem from './item';

const PROJECT_TAG_COUNTS = [1, 1, 1, 2];

const ProjectsPage = () => {
  const t = useTranslations(GlobalMessageKeys.Projects);

  const getProjectTags = (key: string, tagAmount: number, tags: string[]) => {
    const translatedTags = Array.from({ length: tagAmount }, (_, i) =>
      t(`${key}.tag_${i + 1}`)
    );
    return [...translatedTags, ...tags];
  };

  return (
    <main className="page-container">
      <SectionTitle
        title={t('title')}
        description={t('content')}
      />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1440px]">
        {Object.entries(PROJECTS_ITEMS).map(([key, { image, href, githubHref, tags }], index) => (
          <div key={key}>
            <ProjectsItem
              image={image}
              title={t(`${key}.title`)}
              description={t(`${key}.description`)}
              tags={getProjectTags(key, PROJECT_TAG_COUNTS[index] ?? 0, tags)}
              href={href}
              githubHref={githubHref}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;