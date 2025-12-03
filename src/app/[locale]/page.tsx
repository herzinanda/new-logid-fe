import FeaturedProjects from '@/components/(main)/home/FeaturedProjects';
import Hero from '@/components/(main)/home/Hero';
import HomeAbout from '@/components/(main)/home/HomeAbout';
import Partners from '@/components/(main)/home/Partners';
import Services from '@/components/(main)/home/Services';
import Values from '@/components/(main)/home/Values';
import WorkProcess from '@/components/(main)/home/WorkProcess';
import { BlockRenderer } from '@/components/(main)/ui/BlockRenderer';
import CallToAction1 from '@/components/(main)/ui/CallToAction1';
import { getHomePage } from '@/data/loader';
import { HomeBlock } from '@/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

async function loader(locale: string) {
  const data = await getHomePage(locale);
  if (!data) return notFound();
  console.log(data)
  return { ...data.data };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await loader(locale);
  const blocks = data?.blocks || [];

  // We can pass this `t` function down to server components if we want
  // or they can fetch their own translations.
  const t = await getTranslations('hero');

  return (
    <main id="main-content">
      {/* Each of these components should be created in `src/components/home/`
        Most will be Server Components, except for the ones with sliders.
      */}

      {/* <Hero {...blocks[0]} /> */}
      <BlockRenderer blocks={blocks} />
      {/* <Partners />
      <HomeAbout />
      <Services />
      <Values />
      <FeaturedProjects />
      <WorkProcess /> */}
      {/* <WorkProcess />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <CTA /> */}
    </main>
  );
}