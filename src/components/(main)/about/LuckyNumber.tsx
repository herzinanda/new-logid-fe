import { AboutStatisticsProps } from '@/types'
import React from 'react'
import { Label } from '../ui/Label'
import { parseMarkdownBold } from '@/utils/parse-markdown'

const LuckyNumber: React.FC<AboutStatisticsProps> = ({ label, text, statistics }) => {
    return (
        <>
            <section className="section-white" aria-labelledby="metrics-title">
                <div
                    className="wrapper self-stretch px-5 pt-20 lg:p-20 flex flex-col justify-start items-start gap-20"
                >
                    <header
                        className="self-stretch flex flex-col justify-center items-center gap-10"
                    >
                        <div
                            className=""
                            data-aos="fade"
                            data-aos-delay="0"
                        >
                            <Label label={label} />
                        </div>

                        <h2
                            id="metrics-title"
                            data-aos="fade"
                            className="self-stretch text-center justify-start text-secondary-navy text-3xl lg:text-4xl font-medium leading-tight"
                        >
                            {parseMarkdownBold(text)}
                        </h2>
                    </header>
                    <ul
                        className="flex flex-col lg:flex-row justify-center items-center w-full mx-auto list-none p-0 m-0"
                        aria-label="Key metrics and statistics"
                    >
                        {
                            statistics.map((stat, index) => (
                                <li
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="py-6 lg:px-10 flex flex-col lg:flex-row w-full lg:w-auto justify-start items-center lg:items-end gap-6 lg:border-l-[0.80px] lg:border-l-base-grey-stroke lg:border-b-0 first:border-l-0 border-b-[0.80px] border-b-base-grey-stroke last:border-b-0"
                                >
                                    <strong
                                        className="text-center justify-start text-secondary-navy text-7xl lg:text-6xl font-medium leading-tight"
                                    >
                                        {stat.number}
                                    </strong>
                                    <span
                                        className="text-center lg:text-left w-full lg:w-24 justify-start text-base-grey text-lg lg:text-base font-medium lg:font-normal leading-relaxed"
                                    >
                                        {stat.text}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default LuckyNumber