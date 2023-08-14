import Image from "next/image";
import { AppPin } from "@/constants/typings";

import { buttonVariants } from "./button";
import { Card, CardContent, CardDescription, CardTitle } from "./card";
import { ExternalLink } from "lucide-react";

export const PinCard = ({ name, description, iconPath, url }: AppPin) => {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col gap-6 h-full items-start">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src={"/pins-icons/" + iconPath}
            alt={name}
            width={70}
            height={70}
            className="rounded-lg"
          />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="group/link hover:scale-105 transition-all duration-300 ease-in flex gap-2 items-center justify-start"
        >
          <CardTitle className="group-hover/link:underline decoration-primary transition-all duration-300 ease-out">
            {name}
          </CardTitle>
          <ExternalLink
            size={18}
            className="group-hover/link:text-primary transition-all ease-out"
          />
        </a>

        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
