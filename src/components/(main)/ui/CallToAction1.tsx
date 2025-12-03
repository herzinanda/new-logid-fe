import { HomeCallToActionProps } from '@/types'
import React from 'react'
import { Button } from './Button'
import { getLocale } from 'next-intl/server';

const CallToAction1 = async ({
    ctaText,
    ctaButton,
    ctaBgImage,
}: Readonly<HomeCallToActionProps>) => {
    const locale = await getLocale();

    return (
        <>
            <section
                className="bg-secondary-light-navy"
                aria-labelledby="cta-title"

            >
                <div
                    className="wrapper px-5 py-20 lg:p-20 flex flex-col justify-center items-center gap-16"
                >
                    <div className="self-stretch flex flex-col justify-center items-center gap-6">
                        <h2
                            data-aos="fade"
                            className="max-w-[980px] text-center justify-start text-white text-4xl lg:text-[80px] font-medium leading-tight border-b border-base-white pb-16"
                            id="cta-title"
                        >
                            {ctaText}
                        </h2>
                    </div>

                    {/* <Button /> */}
                    <Button button={ctaButton} locale={locale} />
                </div>
            </section>
        </>
    )
}

export default CallToAction1