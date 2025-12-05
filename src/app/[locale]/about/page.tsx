import { getAboutPage } from '@/data/loader';
import { notFound } from 'next/navigation';
import { BlockRenderer } from '@/components/(main)/ui/BlockRenderer';

type Props = {
    params: Promise<{ locale: string }>;
};

async function loader(locale: string) {
    const data = await getAboutPage(locale);
    if (!data || !data.data) return notFound();
    return { ...data.data };
}

const AboutPage = async ({ params }: Props) => {
    const { locale } = await params;
    const data = await loader(locale);

    return (
        <>
            <BlockRenderer blocks={data.blocks} />
        </>
    )
}

export default AboutPage