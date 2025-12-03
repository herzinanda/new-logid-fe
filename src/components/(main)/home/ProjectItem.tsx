import { getFeaturedProjects } from '@/data/loader'
import { HomeFeaturedProjectsProps } from '@/types'
import { getLocale } from 'next-intl/server'
import React from 'react'
import ProjectItemCard from './ProjectItemCard'

const ProjectItem = async () => {
    const locale = await getLocale()
    const response = await getFeaturedProjects()
    const projects: HomeFeaturedProjectsProps[] = response?.data || []

    if (!projects || projects.length === 0) {
        return (
            <div className="wrapper self-stretch px-5 lg:px-20">
                <div className="flex justify-center items-center py-20">
                    <p className="text-base-grey text-lg font-normal leading-relaxed text-center">
                        Sorry, there are no projects available at this time. Please check back later!
                    </p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id="slider-featured-projects" className="swiper w-full relative">
                <div className="swiper-wrapper w-full">
                    {
                        projects.map((project) => (
                            <ProjectItemCard key={project.id} project={project} locale={locale} />
                        ))
                    }
                </div>
                <nav
                    className="mt-20 lg:mt-0 lg:absolute right-0 bottom-0 z-10 w-full lg:w-[26%]"
                    aria-label="Project navigation"

                >
                    <div
                        id="slider-pagination-featured-projects"
                        className="flex justify-start items-center gap-3"
                    ></div>
                </nav>
            </div>
        </>
    )
}

export default ProjectItem