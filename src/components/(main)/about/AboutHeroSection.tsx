import React from 'react';
import Image from 'next/image';
import type { AboutHeroSectionProps } from '@/types';
import { getStrapiMedia } from '@/components/(main)/ui/StrapiImage';

/**
 * About page hero section component
 * Displays the main hero content for the about page
 */
const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
    label,
    title,
    subtitle,
    image,
}) => {
    // Get the full image URL from Strapi
    const imageUrl = image?.url ? getStrapiMedia(image.url) : null;

    return (
        <>
            <section
                className="self-stretch mt-[80px] lg:mt-[118px] px-5 lg:px-20 pt-20 pb-20 flex flex-col justify-center items-center gap-10 overflow-hidden"
                aria-labelledby="about-hero-title"
            >
                {/* Label */}
                {label && (
                    <p className="px-4 py-1.5 rounded-full mb-4 lg:mb-0 outline-[0.50px] outline-offset-[-0.50px] outline-secondary-navy inline-flex justify-center items-center gap-2">
                        <span className="size-3 flex items-center justify-center rounded-full bg-base-white-background">
                            <span className="size-[7px] rounded-full bg-secondary-navy border border-base-white"></span>
                        </span>
                        <span className="justify-center text-secondary-navy text-sm font-medium leading-normal">
                            {label.label}
                        </span>
                    </p>
                )}

                {/* Title and Subtitle */}
                <div className="self-stretch flex flex-col justify-center items-center gap-6 mb-4 lg:mb-0">
                    <h1
                        data-aos="fade"
                        id="about-hero-title"
                        className="self-stretch text-center justify-start text-secondary-navy text-4xl lg:text-[80px] font-medium leading-tight lg:leading-[88px] max-w-7xl mx-auto"
                    >
                        {title}
                    </h1>

                    {subtitle && (
                        <p
                            data-aos="fade"
                            data-aos-delay="300"
                            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px]"
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Hero Image - matches template structure */}
            {imageUrl && (
                <picture className="w-full h-[600px] -mt-8 lg:-mt-6 block">
                    <Image
                        className="h-full w-full object-cover object-[50%_71%]"
                        src={imageUrl}
                        alt={image?.alternativeText || "Modern city skyline with architectural structures"}
                        width={1920}
                        height={1280}
                        priority
                        sizes="100vw"
                        unoptimized
                    />
                </picture>
            )}
        </>
    );
};

export default AboutHeroSection;