import { articleProps } from '@/types'
import React from 'react'
import { StrapiImage } from '../ui/StrapiImage'
import Link from 'next/link'

interface BlogArticleCardProps {
    article: articleProps
    featured?: boolean
    locale: string
}

const BlogArticleCard = ({ article, featured = false, locale }: BlogArticleCardProps) => {
    const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <article
            className={`w-full flex flex-col justify-start items-start gap-6 pb-8 ${!featured ? 'border-b-[0.80px] border-base-grey-stroke' : ''}`}
        >
            {featured && (
                <Link
                    href={`/${locale}/blog/${article.id}`}
                    className="hover:opacity-50 transition-opacity w-full"
                    aria-label={`Read full article: ${article.title}`}
                >
                    <div className="w-full block aspect-[35/28] lg:aspect-[15/7] overflow-hidden">
                        <StrapiImage
                            src={article.coverImage.url}
                            alt={article.coverImage.alternativeText || article.title}
                            className="h-full w-full object-cover"
                            width={800}
                            height={450}
                        />
                    </div>
                </Link>
            )}

            <div className="self-stretch flex justify-between items-center">
                <Link
                    href={`/${locale}/blog/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:opacity-50 transition-opacity"
                    aria-label={`View articles in ${article.category} category`}
                >
                    <span className="label label-outline-dark" aria-label={article.category}>
                        {article.category}
                    </span>
                </Link>
                <time
                    className="justify-start text-base-grey text-lg font-normal leading-relaxed pl-5"
                    dateTime={article.publishedAt}
                >
                    {formattedDate}
                </time>
            </div>

            <Link
                href={`/${locale}/blog/${article.id}`}
                className="self-stretch flex flex-col justify-start items-start hover:opacity-50 transition-opacity"
                aria-label={`Read article: ${article.title}`}
            >
                <h3 className="self-stretch justify-start text-secondary-navy text-xl font-medium leading-snug">
                    {article.title}
                </h3>
            </Link>

            <div className="self-stretch inline-flex justify-start items-center gap-3">
                <Link
                    href={`/${locale}/blog/author/${article.authorName.toLowerCase().replace(/\s+/g, '-')}`}
                    className="justify-start text-secondary-navy text-lg font-medium leading-tight hover:opacity-50 transition-opacity"
                    aria-label={`View articles by ${article.authorName}`}
                >
                    {article.authorName}
                </Link>
                <span
                    className="bg-primary-orange size-3 rounded-full block"
                    aria-hidden="true"
                ></span>
                <span className="justify-start text-base-grey text-lg font-normal leading-tight">
                    {article.readingTime}
                </span>
            </div>
        </article>
    )
}

export default BlogArticleCard
