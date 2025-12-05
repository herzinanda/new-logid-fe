import { getFeaturedProjects } from '@/data/loader';
import { HomeFeaturedProjectsProps } from '@/types';
import { getLocale } from 'next-intl/server'
import React from 'react'
import { StrapiImage } from '../ui/StrapiImage';
import AboutFeaturedProjectItem from './AboutFeaturedProjectItem';

const AboutFeaturedProjects = async () => {
    const locale = getLocale();
    const response = await getFeaturedProjects();
    const projects: HomeFeaturedProjectsProps[] = response?.data || []

    if (!projects || projects.length === 0) {
        return (
            <ul
                className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 list-none p-0 m-0"
                aria-label="Featured projects"
            >
                <p className="text-base-grey text-lg font-normal leading-relaxed text-center">
                    Sorry, there are no projects available at this time. Please check back later!
                </p>
            </ul>
        )
    }

    return (
        <>
            <ul
                className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 list-none p-0 m-0"
                aria-label="Featured projects"
            >
                {
                    projects.map((project, index) => (
                        <AboutFeaturedProjectItem key={project.id} project={project} />
                    ))
                }
            </ul>
        </>
    )
}

export default AboutFeaturedProjects