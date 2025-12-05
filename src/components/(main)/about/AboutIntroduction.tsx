import { AboutIntroductionProps } from '@/types'
import React from 'react'
import { Label } from '../ui/Label'

const AboutIntroduction: React.FC<AboutIntroductionProps> = ({
    label,
    title,
    text,
    embedVideoURL,
}) => {
    return (
        <>
            <section className="bg-primary-orange relative" aria-labelledby="video-title">
                <div
                    className="wrapper px-5 lg:px-20 pt-20 pb-28 flex flex-col justify-start items-start gap-20"
                >
                    <header
                        className="self-stretch flex flex-col justify-center items-center gap-10"
                    >
                        <div
                            className=""
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                        >
                            <Label label={label} />
                        </div>

                        <div
                            className="self-stretch flex flex-col justify-end items-center gap-6 text-center"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        >
                            <h2
                                id="video-title"
                                className="self-stretch text-center justify-start text-white text-4xl lg:text-5xl font-medium leading-tight"
                            >
                                {title}
                            </h2>
                            <p
                                className="self-stretch text-center justify-start text-white text-lg font-normal leading-relaxed"
                            >
                                {text}
                            </p>
                        </div>
                    </header>
                    <div className="w-full">
                        <div
                            className="plyr__video-embed"
                            id="player"
                            aria-labelledby="video-title"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                        >
                            <iframe
                                src={embedVideoURL}
                                title="BrickNet Construction Company Introduction Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                aria-describedby="video-description"
                            ></iframe>
                        </div>
                        <div id="video-description" className="sr-only">
                            {text}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutIntroduction