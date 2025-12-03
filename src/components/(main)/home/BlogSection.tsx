import React from 'react'
import { getHomeArticles } from '@/data/loader'
import BlogArticleCard from './BlogArticleCard'
import { articleProps } from '@/types'
import { getLocale } from 'next-intl/server'

const BlogSection = async () => {
    const locale = await getLocale()
    const response = await getHomeArticles()
    const articles: articleProps[] = response?.data || []

    // Empty state
    if (!articles || articles.length === 0) {
        return (
            <div className="wrapper self-stretch px-5 lg:px-20">
                <div className="flex justify-center items-center py-20">
                    <p className="text-base-grey text-lg font-normal leading-relaxed text-center">
                        Sorry, there are no articles available at this time. Please check back later!
                    </p>
                </div>
            </div>
        )
    }

    // Single article - center it
    if (articles.length === 1) {
        return (
            <div className="wrapper self-stretch px-5 lg:px-20">
                <div className="flex justify-center items-start">
                    <div className="w-full lg:w-1/2">
                        <BlogArticleCard article={articles[0]} featured={true} locale={locale} />
                    </div>
                </div>
            </div>
        )
    }

    // Multiple articles - use two-column layout
    // First article is featured (with image), rest are regular
    const [featuredArticle, ...regularArticles] = articles

    return (
        <div className="wrapper self-stretch px-5 lg:px-20">
            <ul
                className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-20 list-none p-0 m-0"
                aria-label="Blog articles"
            >
                {/* Featured article - left column */}
                <li className="flex-1 flex flex-col justify-start items-start gap-8">
                    <BlogArticleCard article={featuredArticle} featured={true} locale={locale} />
                </li>

                {/* Regular articles - right column */}
                <li className="flex-1 flex flex-col justify-start items-start gap-8">
                    {regularArticles.map((article) => (
                        <BlogArticleCard key={article.id} article={article} featured={false} locale={locale} />
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default BlogSection