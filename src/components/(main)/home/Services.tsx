import { HomeServicesProps } from "@/types";
import Image from "next/image";
import React from "react";
import { StrapiImage } from "../ui/StrapiImage";
import { Label } from "../ui/Label";

const Services = ({
  label,
  title,
  subtitle,
  services,
}: Readonly<HomeServicesProps>) => {

  console.log("ini services ", services);

  return (
    <>
      <section className="section-white" aria-labelledby="services-title">
        <div className="wrapper self-stretch px-5 py-10 lg:px-20 lg:py-20 flex flex-col justify-start items-start gap-20">
          <div className="self-stretch flex flex-col justify-center items-center gap-10">
            <Label label={label} />

            <div className="self-stretch flex flex-col justify-center items-center gap-6">
              <h2
                className="self-stretch text-center justify-start text-secondary-navy text-4xl font-medium leading-tight"
                id="services-title"
              >
                {title}
              </h2>
              <p className="max-w-[850px] text-center justify-start text-base-grey text-lg font-normal leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
          <ul
            className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-20 list-none p-0"
            aria-label="Service offerings"
          >
            {services.map((service, index) => (
              <li
                key={service.id} // Use the stable 'id' as the key, not 'index'
                className="w-full flex flex-col justify-start items-start gap-8"
              >
                <div className="self-stretch justify-start text-primary-orange text-xl font-normal leading-tight">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <h3 className="self-stretch justify-start text-base-black text-2xl font-medium leading-tight">
                    {
                      /* 3. Get translation using the service id */
                      service.name
                    }
                  </h3>
                  <p className="self-stretch justify-start text-base-grey text-base font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* 4. Use the dynamic image and alt text */}
                <StrapiImage
                  src={service.serviceImage.url}
                  alt={service.serviceImage.alternativeText || "image"}
                  width={400}
                  height={340}
                  className="h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
