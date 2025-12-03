import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSectionProps } from '@/types';
import { getLocale } from 'next-intl/server';
import { Label } from '../ui/Label';
import { Button } from '../ui/Button';

const Hero = async ({
  label,
  title,
  subtitle,
  ctaButton,
  bgImages,
}: Readonly<HeroSectionProps>) => {
  const locale = await getLocale();

  return (
    <section
      className="bg-[#222222]/40 flex flex-col justify-start items-start relative pb-10"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <Image
        id="hero-parallax"
        src="/images/home/hero.jpg" // Use next/image
        alt="Modern city skyline with architectural structures"
        fill
        priority // Load this image first
        style={{ objectFit: 'cover', zIndex: -20 }}
      />
      {/* The <header> is now in layout.tsx */}

      <section
        className="self-stretch mt-[80px] lg:mt-[118px] px-5 lg:px-20 pt-20 pb-20 flex flex-col justify-center items-center gap-10 overflow-hidden"
        aria-labelledby="hero-title"
      >
        <p className="px-4 py-1.5 rounded-full mb-4 lg:mb-0 outline-[0.50px] outline-offset-[-0.50px] outline-base-white inline-flex justify-center items-center gap-2">
          <span
            className="bg-base-white size-2 rounded-full block"
            aria-hidden="true"
          ></span>
          <Label label={label} />
        </p>
        <div className="self-stretch flex flex-col justify-center items-center gap-6 mb-4 lg:mb-0">
          <h1
            id="hero-title"
            className="self-stretch text-center justify-start text-base-white-background text-4xl lg:text-[80px] font-medium leading-tight lg:leading-[88px] max-w-7xl mx-auto"
          >
            {title}
          </h1>
          <p
            className="text-center justify-start text-base-white-background text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px]"
          >
            {subtitle}
          </p>
        </div>
        <Button button={ctaButton} locale={locale} />
      </section>
    </section>
  );
};

export default Hero;