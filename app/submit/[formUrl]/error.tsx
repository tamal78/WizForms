"use client";

import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[300px] w-auto"
          />
          <div>
            <p className="mt-6 text-sm font-semibold">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl">We can&apos;t find that page</h1>
            <p className="mt-4">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
            <div className="mt-6 flex items-center space-x-3">
              <Button
                asChild
                variant={"secondary"}
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 "
              >
                <Link href={"/"}>
                  <FaArrowLeft size={16} className="mr-2" />
                  Go back
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2"
              >
                <FaArrowLeft size={16} className="mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* footer */}
      <div className="mx-auto flex max-w-7xl justify-center">
        <footer className="px-4 py-10">
          <p className="text-base font-semibold">© 2024 Wiz Forms</p>
        </footer>
      </div>
    </div>
  );
}
