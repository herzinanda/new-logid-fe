import { BlockRenderer } from '@/components/(main)/ui/BlockRenderer';
import { getHomePage } from '@/data/loader';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

async function loader(locale: string) {
  const data = await getHomePage(locale);
  if (!data) return notFound();
  return { ...data.data };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await loader(locale);
  const blocks = data?.blocks || [];

  return (
    <>
      <BlockRenderer blocks={blocks} />
    </>
  );
}