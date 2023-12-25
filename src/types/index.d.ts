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
