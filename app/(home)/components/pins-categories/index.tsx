"use client";

import { Button } from "@/components/ui/button";
import { PinsCategory } from "@/constants/typings";

type Props = {
  categories: PinsCategory[];
  selectedCategory: string;
  onChangeCategory: (category: string) => void;
};

export const PinsCategories = ({
  categories,
  selectedCategory,
  onChangeCategory,
}: Props) => {
  return (
    <div className="container my-8">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Button
              key={category.slug}
              variant={
                category.slug === selectedCategory ? "default" : "outline"
              }
              onClick={() => onChangeCategory(category.slug)}
              className="flex items-center gap-2"
            >
              <Icon size={18} />
              {category.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

// className={`${
//     selectedCategory === category.id
//       ? "bg-yellow-400 text-black"
//       : "bg-gray-800 text-white"
//   } px-4 py-2 rounded-md text-sm font-medium`}
