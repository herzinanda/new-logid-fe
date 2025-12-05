import { homeFeaturedProjectsProps } from '@/types'
import React from 'react'
import { StrapiImage } from '../ui/StrapiImage'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface ProjectItemCardProps {
    project: homeFeaturedProjectsProps
}

const AboutFeaturedProjectItem: React.FC<ProjectItemCardProps> = ({ project }) => {
    const t = useTranslations('common')

    return (
        <>
            <li
                className="flex-1 flex flex-col justify-start items-start gap-6"
            >
                <Link
                    href={`/project/${project.slug}`}
                    className="hover:opacity-50 transition-opacity w-full"
                    aria-label="Read full article"
                >
                    <picture className="w-full block aspect-[37/40]">
                        <StrapiImage
                            className="h-full w-full object-cover"
                            src={project.thumbnailImage.url}
                            width={370}
                            height={400}
                            alt={project.thumbnailImage.alternativeText || ""}
                        />
                    </picture>
                </Link>
                <Link
                    href={`/project/${project.slug}`}
                    className="hover:opacity-50 transition-opacity self-stretch justify-start text-secondary-navy text-2xl font-medium leading-tight line-clamp-2"
                >
                    {project.title}
                </Link>
                <Link
                    href={`/project/${project.slug}`}
                    className="transition-all group hover:text-primary-orange mt-auto flex justify-start items-center gap-3 text-center text-secondary-navy text-base font-medium leading-tight"
                >
                    {t('seeDetails')}
                    <i
                        className="ph ph-arrow-right text-xl transition-all transform-gpu duration-300 ease-in-out group-hover:translate-x-2"
                    ></i>
                </Link>
            </li>
        </>
    )
}

export default AboutFeaturedProjectItem