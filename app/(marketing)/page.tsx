import LandinngPage from "@/components/LandingPage";
import React from "react";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const { userId }: { userId: string | null } = auth();
  return (
    <div className="w-full">
      {/* navbar */}
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex items-center justify-between gap-4">
          <ThemeSwitcher />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Button asChild>
              <Link href={"/dashboard"}>
                Dashboard
                <span className="ml-2">
                  <ChevronRight size={12} strokeWidth={4} />
                </span>
              </Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button asChild variant={"secondary"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={"/sign-up"}>Get Started</Link>
            </Button>
          </SignedOut>
        </div>
      </nav>
      {/* client landping page */}
      <LandinngPage />
    </div>
  );
}
