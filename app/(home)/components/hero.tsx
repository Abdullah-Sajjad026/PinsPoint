import Image from "next/image";
import homeStyles from "./home.module.scss";
import { ResourceSuggestionForm } from "@/components/resource-suggestion-form";

export const Hero = () => {
  //
  return (
    <section
      className={`py-12 h-2/6 flex items-center ${homeStyles["home-hero"]}`}
    >
      <div className="container">
        <div className="text-white">
          <h1 className="text-7xl font-bold ">PinsPoint</h1>
          <p className="text-2xl mt-4 font-normal">
            {/* A simple app to save good resources that you find across the web for
          later use. */}
            A compiled list of useful resources for developers and tech geeks.
          </p>
        </div>

        <div className="max-w-2xl mt-12">
          <ResourceSuggestionForm />
        </div>
      </div>
    </section>
  );
};
