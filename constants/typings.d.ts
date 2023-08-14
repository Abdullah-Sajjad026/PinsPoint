import type { LucideIcon } from "lucide-react";

type PinsCategory = {
  slug: string;
  name: string;
  icon: LucideIcon;
};

type AppPin = {
  name: string;
  description: string;
  iconPath: string;
  url: string;
};
