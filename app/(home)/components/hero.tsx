"use client";

import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ResourceSuggestionForm } from "@/components/resource-suggestion-form";

import homeStyles from "./home.module.scss";

export const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  //
  return (
    <section
      className={`py-12 h-3/6 flex items-center ${homeStyles["home-hero"]}`}
    >
      <div className="container">
        <div className="text-white">
          <h1 className="text-5xl sm:text-7xl font-bold ">PinsPoint</h1>
          <p className="text-xl sm:text-2xl mt-4 font-normal">
            A compiled list of useful resources for developers and tech geeks.
          </p>
        </div>

        <Collapsible open={isFormOpen} onOpenChange={setIsFormOpen}>
          <CollapsibleTrigger>
            <div
              className={`mt-4 flex items-center gap-2 font-medium text-base underline underline-offset-2 ${
                isFormOpen ? "text-yellow-600" : "text-yellow-300"
              }`}
            >
              Suggest a resource
              {isFormOpen ? (
                <MinusCircle size={20} />
              ) : (
                <PlusCircle size={20} />
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="max-w-2xl mt-4 ">
              <ResourceSuggestionForm />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
