import { AboutCTAProps } from '@/types'
import React from 'react'
import { Button } from '../ui/Button'
import { StrapiImage } from '../ui/StrapiImage'

const AboutCTA: React.FC<AboutCTAProps> = ({
    title,
    description,
    ctaButton,
    ctaImage,
}) => {
    return (
        <>
            <section
                data-variant="v2"
                data-version="dekstop"
                className="bg-primary-light-orange relative"
                aria-labelledby="cta-title"
            >
                <div className="wrapper flex flex-col lg:flex-row justify-start items-start lg:items-center">
                    <div
                        className="px-5 py-20 lg:p-20 w-full lg:w-1/2 flex flex-col justify-center items-start gap-10"
                    >
                        <div
                            className="self-stretch flex flex-col justify-start items-start gap-6"
                        >
                            <h2
                                id="cta-title"
                                className="self-stretch justify-start text-secondary-navy text-4xl font-medium leading-tight"
                            >
                                {title}
                            </h2>
                            <p
                                className="self-stretch justify-start text-secondary-navy text-lg font-normal leading-relaxed"
                            >
                                {description}
                            </p>
                        </div>
                        <Button button={ctaButton} />
                    </div>

                    <picture
                        className="flex justify-center items-center lg:absolute z-10 top-1/2 lg:-translate-y-1/2 right-0 aspect-square lg:aspect-auto lg:w-1/2"
                    >
                        <StrapiImage
                            className="h-full w-full object-cover"
                            src={ctaImage.url}
                            width={720}
                            height={486}
                            alt={ctaImage.alternativeText || ""}
                        />
                    </picture>
                </div>
            </section>
        </>
    )
}

export default AboutCTA