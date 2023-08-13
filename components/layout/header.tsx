"use client";

import Link from "next/link";
import { useAuthContext } from "@/contexts/auth-context";

import { buttonVariants } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const { user } = useAuthContext();
  // getting current address
  const pathname = usePathname();

  return (
    <header className="bg-transparent py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">PinsPoint</Link>
        {pathname !== "/my-pins" && (
          <Link
            href={user ? "/my-pins" : "/sign-in"}
            className={buttonVariants() + " ms-auto"}
          >
            {
              // if user is logged in then show "My Pins" else show "Make Your Own Pins"
              user ? "My Pins" : "Make Your Own Pins"
            }
          </Link>
        )}
      </div>
    </header>
  );
};
