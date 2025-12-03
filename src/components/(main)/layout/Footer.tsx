import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className="bg-secondary-navy" aria-label="Site footer">
      <div className="wrapper px-5 pt-[120px] pb-8 lg:px-20 lg:pt-28 lg:pb-12 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:max-w-96 w-full flex flex-col justify-start items-center lg:items-start gap-14">
            <Link href="/" className="hover:opacity-50 transition-opacity" aria-label="Bricknet - Return to homepage">
              <picture>
                {/* SVG was empty, using png */}
                <Image
                  src="/images/logo-multi-color@1x.png"
                  alt="Bricknet Logo"
                  width={208}
                  height={40}
                />
              </picture>
            </Link>
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-center text-center lg:text-left lg:items-start gap-4">
                <h2 className="justify-center text-base-white text-2xl lg:text-xl font-medium leading-tight">
                  {t('subscribeTitle')}
                </h2>
                <p className="self-stretch justify-center opacity-80 text-base-white-background text-base font-normal leading-tight">
                  {t('subscribeText')}
                </p>
              </div>

              <form
                action="YOUR_MAILCHIMP_URL_HERE" // Update this
                method="post"
                target="_blank"
                noValidate
                className="self-stretch relative bg-base-white"
                aria-label="Newsletter subscription"
              >
                <label htmlFor="mce-EMAIL" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="text-secondary-navy w-full text-base font-normal leading-tight pl-5 pr-[120px] pt-[17px] pb-[19px] bg-base-white placeholder:text-base-grey lg:placeholder:text-base-grey-stroke"
                  placeholder={t('placeholder')}
                  aria-describedby="subscribe-description"
                />
                <div className="absolute top-0 right-2 bottom-0 flex items-center">
                  <button
                    type="submit"
                    className="btn btn-solid-orange px-4! pt-2! pb-2.5!"
                    aria-label="Subscribe to newsletter"
                  >
                    {t('subscribeCta')}
                  </button>
                </div>
                {/* Honeypot for spam prevention - update with your real mailchimp values */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="b_YOUR_U_ID_YOUR_LIST_ID"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
              </form>
            </div>
          </div>
          
          {/* Footer Navigation */}
          <nav
            className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-full lg:w-auto mt-20 lg:mt-0 gap-20 lg:gap-28"
            aria-label="Footer navigation"
          >
            <div className="flex flex-col justify-start items-center lg:items-start gap-8">
              <h3 className="justify-start text-base-white text-2xl lg:text-xl font-medium leading-tight" id="footer-menu-Company">
                {t('company')}
              </h3>
              <ul className="flex flex-col justify-start items-center lg:items-start gap-4" aria-labelledby="footer-menu-Company">
                <li><Link href="/" className="text-xl lg:text-base leading-tight text-base-white font-semibold hover:opacity-50 transition-opacity">{t('links.home')}</Link></li>
                <li><Link href="/about" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.about')}</Link></li>
                <li><Link href="/projects" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.projects')}</Link></li>
                <li><Link href="/blog" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.blog')}</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col justify-start items-center lg:items-start gap-8">
              <h3 className="justify-start text-base-white text-2xl lg:text-xl font-medium leading-tight" id="footer-menu-Social">
                {t('social')}
              </h3>
              <ul className="flex flex-col justify-start items-center lg:items-start gap-4" aria-labelledby="footer-menu-Social">
                <li><a href="https://x.com/peterdraw" target="_blank" rel="noopener noreferrer" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.twitter')}</a></li>
                {/* ... other social links ... */}
                <li><a href="https://www.linkedin.com/company/peterdraw-co/" target="_blank" rel="noopener noreferrer" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.linkedin')}</a></li>
              </ul>
            </div>

             <div className="flex flex-col justify-start items-center lg:items-start gap-8">
              <h3 className="justify-start text-base-white text-2xl lg:text-xl font-medium leading-tight" id="footer-menu-Support">
                {t('support')}
              </h3>
              <ul className="flex flex-col justify-start items-center lg:items-start gap-4" aria-labelledby="footer-menu-Support">
                <li><Link href="/contact" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.contact')}</Link></li>
                <li><Link href="/faq" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.faq')}</Link></li>
                <li><Link href="/help" className="justify-start text-xl lg:text-base leading-tight text-base-grey-stroke font-normal hover:opacity-50 transition-opacity">{t('links.help')}</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        
        {/* Copyright */}
        <div className="self-stretch mt-10 lg:mt-20 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center pt-8 border-t-[0.50px] border-base-grey-stroke">
          <p className="order-last lg:order-first opacity-70 text-center justify-start text-base-grey-stroke text-base font-normal leading-tight">
            {t('copyright')}
          </p>
          <Link href="/legal" className="order-first lg:order-last opacity-70 text-center justify-start text-base-grey-stroke text-base font-normal leading-tight hover:opacity-50 transition-opacity"
            aria-label="Privacy Policy and Terms of Use"
          >
            {t('legal')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;