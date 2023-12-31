import { type StaticImageData } from "next/image";
import { Icons } from "@/components/icons";

export type Menu = {
  title: string;
  url: string;
  icon: keyof typeof Icons;
};

export type SiteConfig = {
  name: string;
  description: string;
  socials: {
    instagram: string;
    github: string;
    whatsapp?: string;
    twitter?: string;
  };
};

export type Content = {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Icons;
};

export type Qualification = {
  title: string;
  subtitle: string;
  date: string;
};

export type Project = {
  image: StaticImageData | string;
  title: string;
  category?: string;
  siteUrl?: string;
  sourceUrl?: string;
};
