import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const Partners = async () => {
  const t = await getTranslations('partners');
  
  // We can also define this data in the component or in en.json
  const partners = [
    { id: '01', altKey: 'partner1', img: '/images/logo-01@1x.webp', w: 163, h: 36 },
    { id: '02', altKey: 'partner2', img: '/images/logo-02@1x.webp', w: 149, h: 36 },
    { id: '03', altKey: 'partner3', img: '/images/logo-03@1x.webp', w: 201, h: 36 },
    { id: '04', altKey: 'partner4', img: '/images/logo-04@1x.webp', w: 143, h: 36 },
    { id: '05', altKey: 'partner5', img: '/images/logo-05@1x.webp', w: 202, h: 36 },
  ];

  return (
    <section className="section-white" aria-labelledby="partners-title">
      <div className="wrapper self-stretch px-5 lg:px-20 pt-20 pb-20 lg:pt-20 lg:pb-32 flex flex-col gap-20">
        <div
          className="flex flex-col lg:flex-row justify-start lg:justify-between gap-14 lg:gap-0 lg:items-start"
          aria-label="Partner logos"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="h-9 mx-5"
            >
              <Image
                className="h-full w-full object-contain"
                src={partner.img}
                width={partner.w}
                height={partner.h}
                alt={t(partner.altKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;