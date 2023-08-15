"use client";

import { Hero } from "./components/hero";
import { PinsCategories } from "./components/pins-categories";
import { PinCard } from "@/components/ui/pin-card";

import { appPinsCategories } from "@/data/app-pins-categories";
import { appPins } from "@/data/app-pins";
import { useAppPinsCategories } from "@/hooks/useAppPinsCategories";

export default function Home() {
  const { selectedCategory, setSelectedCategory } = useAppPinsCategories();

  return (
    <>
      <Hero />
      <PinsCategories
        categories={appPinsCategories}
        selectedCategory={selectedCategory}
        onChangeCategory={(id) => setSelectedCategory(id)}
      />

      <section className="app-pins py-8">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {appPins[selectedCategory].map((pin) => (
            <PinCard key={pin.url} {...pin} />
          ))}
        </div>
      </section>
    </>
  );
}
