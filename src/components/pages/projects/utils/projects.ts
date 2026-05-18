import Project1 from '@/../public/assets/images/project1.png';
import Project2 from '@/../public/assets/images/project2.jpg';
import Project3 from '@/../public/assets/images/project3.png';
import Project4 from '@/../public/assets/images/project4.jpg';
import { StaticImageData } from 'next/image';

type ProjectItem = {
  image: StaticImageData;
  href?: string;
  githubHref?: string;
  tags: string[];
};

export const PROJECTS_ITEMS: Record<string, ProjectItem> = {
  "Project_1": {
    image: Project1,
    href: "https://traska-iota.vercel.app/en",
    githubHref: "",
    tags: [
      "TypeScript",
      "React",
      "Tailwind",
      "Shadcn",
      "Firbase",
    ],
  },
  "Project_3": {
    image: Project3,
    // href and githubHref are optional, so no error
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Shadcn",
      "i18n",
      "Vercel",
    ],
  },
};