import { HomeValuesProps } from "@/types";
import { getTranslations } from "next-intl/server";
import React from "react";
import { Label } from "../ui/Label";
import { Button } from "../ui/Button";
import { StrapiImage } from "../ui/StrapiImage";

const Values = async ({
  label,
  title,
  description,
  ctaValues,
  values,
}: Readonly<HomeValuesProps>) => {

  return (
    <>
      <section className="section-white" aria-labelledby="values-title">
        <div className="wrapper self-stretch px-5 pt-10 pb-20 lg:px-20 lg:pt-20 lg:pb-28 flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20">
          <div className="w-full lg:w-1/3 self-stretch inline-flex flex-col justify-between items-start">
            <div className="self-stretch flex flex-col justify-start items-start gap-10">
              <Label label={label} />

              <h2
                className="self-stretch justify-start text-secondary-navy text-4xl font-medium leading-tight"
                id="values-title"
              >
                {title}
              </h2>
            </div>
            <Button button={ctaValues} />
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-20">
            <p className="self-stretch justify-start text-base-grey text-2xl font-medium leading-tight">
              {description}
            </p>
            <div
              className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-10"
              aria-label="Company values"
            >
              {values?.map((value, index) => (
                <article key={value.id} className="w-full flex flex-col justify-start items-start gap-6">
                  <picture className="size-16 bg-primary-light-orange flex justify-center items-center">
                    <StrapiImage
                      src={value.icon.url}
                      alt={value.icon.alternativeText}
                      width={40}
                      height={40}
                      className="size-10"
                      aria-hidden="true"
                    />
                  </picture>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <h3 className="self-stretch justify-start text-secondary-navy text-2xl font-medium leading-tight">
                      {value.title}
                    </h3>
                    <p className="self-stretch justify-start text-base-grey text-base font-normal leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
