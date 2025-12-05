import { AboutProjectsProps } from '@/types'
import React from 'react'
import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import AboutFeaturedProjects from './AboutFeaturedProjects'

const AboutProjects: React.FC<AboutProjectsProps> = ({
    title,
    description,
    label,
    ctaButton,
}) => {
    return (
        <>
            <section className="section-white" aria-labelledby="projects-title">
                <div
                    className="wrapper self-stretch px-5 lg:px-20 pt-20 pb-20 lg:pb-28 flex flex-col lg:flex-row justify-start items-start gap-20"
                >
                    <div
                        className="w-full lg:w-96 self-stretch flex flex-col justify-center items-start gap-10"
                    >
                        <Label label={label} />

                        <div
                            className="self-stretch flex-1 flex flex-col justify-between items-start"
                        >
                            <header
                                className="self-stretch flex flex-col justify-start items-start gap-6 mb-20"
                            >
                                <h2
                                    id="projects-title"
                                    className="self-stretch justify-start text-secondary-navy text-4xl font-medium leading-tight"
                                >
                                    {title}
                                </h2>
                                <p
                                    className="self-stretch justify-start text-base-grey text-lg font-normal leading-relaxed"
                                >
                                    {description}
                                </p>
                            </header>
                            <Button button={ctaButton} />
                        </div>
                    </div>
                    <AboutFeaturedProjects />
                </div>
            </section>
        </>
    )
}

export default AboutProjects