import { PinsCategory } from "@/constants/typings";
import {
  BookOpen,
  Boxes,
  BrainCircuit,
  FileSearch,
  MonitorPlay,
  Workflow,
  Youtube,
} from "lucide-react";

export const appPinsCategories: PinsCategory[] = [
  {
    slug: "online-courses",
    name: "Online Courses",
    icon: MonitorPlay,
  },
  {
    slug: "interactive-tutorials",
    name: "Interactive Tutorials",
    icon: Boxes,
  },
  {
    slug: "youtube-channels",
    name: "Youtube Channels",
    icon: Youtube,
  },
  {
    slug: "readings",
    name: "Readings",
    icon: BookOpen,
  },
  {
    slug: "references-cheatsheets",
    name: "References & Cheatsheets",
    icon: FileSearch,
  },
  {
    slug: "problem-solving",
    name: "Problem Solving/Challenge",
    icon: BrainCircuit,
  },
  {
    slug: "blogs-communities",
    name: "Blogs/Communities",
    icon: Workflow,
  },
  {
    slug: "tools",
    name: "Tools",
    icon: Workflow,
  },
  {
    slug: "css-helpers",
    name: "CSS Helpers",
    icon: Workflow,
  },
  {
    slug: "design-inspirations",
    name: "Blogs/Communities",
    icon: Workflow,
  },
];
