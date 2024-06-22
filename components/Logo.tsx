import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

async function Logo() {
  const { userId }: { userId: string | null } = auth();
  return (
    <Link
      href={userId ? "/dashboard" : "/"}
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      WizForms
    </Link>
  );
}

export default Logo;
