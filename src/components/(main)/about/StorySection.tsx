import { AboutOurStoryProps } from '@/types'
import React from 'react'
import { Label } from '../ui/Label'
import { StrapiImage } from '../ui/StrapiImage'

const StorySection: React.FC<AboutOurStoryProps> = ({
    label,
    title,
    image,
    text,
    values,
}) => {
    return (
        <>
            <section className="section-white" aria-labelledby="story-title">
                <div
                    className="wrapper self-stretch px-5 lg:px-20 pt-20 pb-28 flex flex-col justify-start items-start gap-20"
                >
                    <header
                        className="self-stretch flex flex-col justify-center items-start gap-10"
                    >
                        <div
                            className=""
                            data-aos="fade-up"
                            data-aos-delay="000"
                        >
                            <Label label={label} />
                        </div>

                        <h2
                            id="story-title"
                            data-aos="fade-up"
                            data-aos-delay="000"
                            className="self-stretch justify-start text-secondary-navy text-4xl font-medium leading-tight"
                        >
                            {title}
                        </h2>
                    </header>
                    <div
                        className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-10"
                    >
                        <picture
                            className="h-[600px]"
                            data-aos="fade-up"
                            data-aos-delay="000"
                        >
                            <StrapiImage
                                className="h-full w-full "
                                src={image.url}
                                width={620}
                                height={628}
                                alt={image.alternativeText}
                            />
                        </picture>
                        <div className="flex-1 flex flex-col justify-center items-start gap-10">
                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="self-stretch justify-start text-base-grey text-lg font-normal leading-relaxed"
                            >
                                {text}
                            </p>
                            <ul
                                className="self-stretch flex flex-col justify-start items-start list-none p-0 m-0"
                                aria-label="Our story milestones"
                            >
                                {
                                    values.map((value, index) => (
                                        <li
                                            key={value.id}
                                            data-aos="fade-up"
                                            data-aos-delay="000"
                                            className="self-stretch py-8 border-b-[0.50px] last:border-0 border-base-grey-stroke flex justify-start items-start gap-6"
                                        >
                                            <picture
                                                className="size-10"
                                                data-aos="fade-up"
                                                data-aos-delay="000"
                                            >
                                                <StrapiImage
                                                    src={value.icon.url}
                                                    alt={value.icon.alternativeText}
                                                    width={40}
                                                    height={40}
                                                    className="size-10"
                                                    aria-hidden="true"
                                                />
                                            </picture>
                                            <div
                                                className="flex-1 flex flex-col justify-start items-start gap-2"
                                            >
                                                <h3
                                                    className="self-stretch justify-start text-secondary-navy text-2xl font-medium leading-tight"
                                                >
                                                    {value.title}
                                                </h3>
                                                <p
                                                    className="self-stretch justify-start text-base-grey text-base font-normal leading-relaxed"
                                                >
                                                    {value.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StorySection