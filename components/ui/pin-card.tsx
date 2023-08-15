import Image from "next/image";
import { AppPin } from "@/constants/typings";

import { Card, CardContent, CardDescription, CardTitle } from "./card";
import { ExternalLink } from "lucide-react";

export const PinCard = ({ name, description, iconPath, url }: AppPin) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 ease-in">
      <CardContent className="p-4 flex flex-col gap-6 h-full items-start">
        <div className="w-20 h-16 md:h-20 flex items-center">
          <Image
            src={"/pins-icons/" + iconPath}
            alt={name}
            width={70}
            height={70}
            className="rounded-lg w-14 md:w-16"
          />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="group/link hover:scale-105 transition-all duration-300 ease-in "
        >
          <CardTitle className="group-hover/link:underline decoration-primary transition-all duration-300 ease-out">
            {name}
            <ExternalLink
              size={18}
              className="group-hover/link:text-primary duration-300 transition-all ease-out inline-block ml-2"
            />
          </CardTitle>
        </a>

        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
