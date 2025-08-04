"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import React from "react";
import GlassButtonWithText from "./GlassButtonWithText";

interface PoliciesPageProps {
  title: string;
  children: React.ReactNode;
  backLink?: string;
}

export default function PoliciesPage({
  title,
  children,
  backLink,
}: PoliciesPageProps) {
  return (
    <section className="!font-gellix py-16 sm:py-32 bg-background">
      <div className="mx-auto w-full px-4 lg:px-6 lg:max-w-3xl space-y-16 sm:space-y-32">
        <div className="pt-12 sm:pt-12">
          <div>
            <h1 className="text-3xl md:text-6xl font-semibold pb-8 mb-20 text-center border-b border-zinc-900">
              {title}
            </h1>
            <div className="prose prose-invert max-w-none text-primary prose-headings:font-normal prose-headings:mt-12 prose-h3:mt-10 prose-h4:mt-6 prose-h5:mt-6 prose-h6:mt-6 prose-strong:font-semibold prose-p:text-primary/85 prose-li:text-primary/85 prose-a:text-primary prose-a:underline prose-a:underline-offset-2 prose-hr:border-border">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
