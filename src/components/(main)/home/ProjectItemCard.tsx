import { projectProps } from '@/types'
import React from 'react'
import { StrapiImage } from '../ui/StrapiImage'

interface ProjectItemCardProps {
    project: projectProps
    locale: string
}

const ProjectItemCard = ({ project, locale }: ProjectItemCardProps) => {
    const year = project.projectDate?.split('-')[0] ?? 'N/A'

    return (
        <div
            className="swiper-slide bg-primary-orange self-stretch flex flex-col lg:!flex-row justify-start lg:justify-between items-start relative gap-10 lg:gap-0"
        >
            <div
                className="aspect-[35/52] lg:aspect-[15/8] w-full lg:w-[71%] relative"
            >
                {/* <picture className="absolute inset-0 z-10"> */}
                <StrapiImage
                    className="h-full w-full object-cover"
                    src={project.thumbnailImage.url}
                    width={900}
                    height={480}
                    alt={project.thumbnailImage.alternativeText || 'Project Image'}
                    loading="lazy"
                />
                {/* </picture> */}
                <div
                    className="absolute inset-0 z-20 px-4 py-6 lg:p-6 bg-gradient-to-t from-black/50 from-[17%] to-black/0 flex flex-col justify-end items-start text-white text-base font-normal leading-relaxed [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.50)]"
                >
                    {project.excerpt}
                </div>
            </div>
            <div
                className="w-full lg:w-[26%] flex flex-col justify-start items-center"
            >
                <div
                    className="self-stretch flex flex-col justify-center items-center lg:items-start gap-10"
                >
                    <span className="label label-outline-white" aria-label={project.service?.name || 'Project'}>
                        {project.service?.name || 'Project'}
                    </span>

                    <div
                        className="self-stretch flex flex-col justify-center items-center text-center lg:text-left lg:items-start gap-1.5"
                    >
                        <h3
                            className="self-stretch justify-center line-clamp-2 text-base-white text-2xl font-medium leading-tight"
                        >
                            {project.title}
                        </h3>
                        <p
                            className="self-stretch justify-center text-base-grey-stroke text-base font-normal leading-relaxed"
                        >
                            {year}
                        </p>
                        <p
                            className="self-stretch justify-center text-base-grey-stroke text-base font-normal leading-relaxed"
                        >
                            {project.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItemCard