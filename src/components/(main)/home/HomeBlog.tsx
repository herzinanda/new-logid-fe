import { HomeBlogProps } from '@/types'
import React from 'react'
import { Label } from '../ui/Label'
import BlogSection from './BlogSection'

const HomeBlog = async ({
    title,
    description,
    label,
}: Readonly<HomeBlogProps>) => {
    return (
        <>
            <section className="section-white py-20" aria-labelledby="blog-title">
                <div
                    className="wrapper self-stretch px-5 pt-10 py-20 lg:px-20 lg:pt-20 lg:pb-28 flex flex-col justify-center items-center gap-20"
                >
                    <div className="self-stretch flex flex-col justify-center items-center gap-10">
                        <Label label={label} />

                        <div className="self-stretch flex flex-col justify-center items-center gap-6">
                            <h2
                                className="self-stretch text-center justify-start text-base-black text-4xl font-medium leading-tight"
                                id="blog-title"
                            >
                                {title}
                            </h2>
                            <p
                                className="self-stretch text-center justify-start text-base-grey text-lg font-normal leading-relaxed"
                            >
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <BlogSection />
            </section>
        </>
    )
}

export default HomeBlog