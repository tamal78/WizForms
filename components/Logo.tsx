import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/font.woff2",
});

export default function Logo() {
  const { userId }: { userId: string | null } = auth();
  return (
    <Link href={userId ? "/dashboard" : "/"}>
      <div className="items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <div
          className={cn(
            "font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer",
            headingFont.className,
            "hidden md:block",
          )}
        >
          WizForms
        </div>
      </div>
    </Link>
  );
}
