import { HomeAboutProps } from "@/types";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";
import { parseMarkdownBold } from "@/utils/parse-markdown";
import { Label } from "../ui/Label";
import { Button } from "../ui/Button";

const HomeAbout = async ({
  label,
  aboutText,
  ctaAbout,
  aboutStats,
}: Readonly<HomeAboutProps>) => {
  const t = await getTranslations("homeAbout");

  return (
    <section className="section-white" aria-labelledby="about-title">
      <div className="wrapper self-stretch px-5 py-10 items-center lg:items-start lg:px-20 lg:py-20 flex flex-col gap-20">
        <div className="self-stretch flex flex-col justify-start items-center lg:items-start gap-10">
          <Label label={label} />

          <div className="self-stretch flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between items-center lg:items-end">
            <div
              className="max-w-[800px] w-full text-secondary-navy text-3xl font-medium leading-tight lg:mr-5 text-center lg:text-left"
              id="about-title"
            >
              {parseMarkdownBold(aboutText)}
            </div>
            <Button button={ctaAbout} />
          </div>
        </div>
        <div
          className="self-stretch flex flex-col lg:flex-row justify-between items-center gap-y-20 lg:gap-y-0 lg:items-start"
          aria-label="Company statistics"
        >
          {aboutStats.map((stat, index) => (
            <div key={stat.id} className="pt-8 border-t-[0.80px] border-base-grey-stroke flex flex-col justify-center items-center gap-4">
              <div
                className="text-center justify-start text-secondary-navy text-6xl font-medium leading-tight"
                aria-label={stat.number + " " + stat.text}
              >
                {stat.number}
              </div>
              <div className="text-center justify-start text-base-grey text-lg font-normal leading-tight">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default HomeAbout;
