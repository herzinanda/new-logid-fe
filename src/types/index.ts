export interface ButtonProps {
    id: number;
    text: string;
    url: string;
    variant: string;
    size: string;
}

export interface labelProps {
    id: number;
    label: string;
    variant: string;
}

export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
}

export interface SeoProps {
    id: number;
    meta_title: string;
    meta_description: string;
    meta_image: ImageProps;
}

export interface aboutStatsProps {
    id: number;
    number: string;
    text: string;
}

export interface workProcessProps {
    id: number;
    title: string;
    description: string;
    url: string;
}

export interface serviceProps {
    id: number;
    name: string;
    description: string;
    serviceImage: ImageProps;
}

export interface valueProps {
    id: number;
    title: string;
    description: string;
    icon: ImageProps;
}

export interface testimonialProps {
    id: number;
    authorName: string;
    authorTitle: string;
    quote: string;
}

export interface articleProps {
    id: number;
    title: string;
    description: string;
    coverImage: ImageProps;
    seo: SeoProps;
    category: string;
    publishedAt: string;
    authorName: string;
    readingTime: string;
}

export interface homeFeaturedProjectsProps {
    id: number;
    thumbnailImage: ImageProps;
    title: string;
    slug: string;
    service: serviceProps[];
    projectDate: string;
    excerpt: string;
    location: string;
}

export interface projectProps {
    id: number;
    title: string;
    slug: string;
    publishDate: string;
    excerpt: string;
    isFeatured: boolean;
    projectDate: string;
    location: string;
    projectValue: string;
    projectContent: string;
    thumbnailImage: ImageProps;
    service: serviceProps[];
    gallery: ImageProps[];
    project_testimonial?: testimonialProps;
    relatedProjects: projectProps[];
    seo: SeoProps;
}

type ComponentType = "blocks.hero-section" | "blocks.home-about" | "blocks.home-services" | "blocks.home-values" | "blocks.home-work-process" | "blocks.home-featured-projects" | "blocks.testimonials" | "blocks.home-blog" | "blocks.home-call-to-action" | "blocks.about-hero-section" | "blocks.about-statistics" | "blocks.about-our-story" | "blocks.about-introduction" | "blocks.about-projects" | "blocks.about-cta";

interface Base<
    T extends ComponentType,
    D extends object = Record<string, unknown>
> {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
}

export type HomeBlock = HeroSectionProps | HomeAboutProps | HomeServicesProps | HomeValuesProps | HomeWorkProcessProps | HomeFeaturedProjectsProps | HomeTestimonialsProps | HomeBlogProps | HomeCallToActionProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
    label: labelProps;
    title: string;
    subtitle: string;
    bgImages: ImageProps[];
    ctaButton: ButtonProps;
}

export interface HomeAboutProps extends Base<"blocks.home-about"> {
    label: labelProps;
    aboutText: string;
    ctaAbout: ButtonProps;
    aboutStats: aboutStatsProps[];
}

export interface HomeServicesProps extends Base<"blocks.home-services"> {
    label: labelProps;
    title: string;
    subtitle: string;
    services: serviceProps[];
}

export interface HomeValuesProps extends Base<"blocks.home-values"> {
    label: labelProps;
    title: string,
    description: string,
    ctaValues: ButtonProps,
    values: valueProps[],
}

export interface HomeWorkProcessProps extends Base<"blocks.home-work-process"> {
    label: labelProps;
    title: string,
    description: string,
    workProcesses: workProcessProps[],
}

export interface HomeFeaturedProjectsProps extends Base<"blocks.home-featured-projects"> {
    title: string,
    description: string,
}

export interface HomeTestimonialsProps extends Base<"blocks.testimonials"> {
    label: labelProps;
    title: string,
    description: string,
    testimonials: testimonialProps[],
}

export interface HomeBlogProps extends Base<"blocks.home-blog"> {
    title: string,
    description: string,
    label: labelProps,
}

export interface HomeCallToActionProps extends Base<"blocks.home-call-to-action"> {
    ctaText: string,
    ctaButton: ButtonProps,
    ctaBgImage: ImageProps,
}

export type AboutBlock = AboutHeroSectionProps | AboutStatisticsProps | AboutIntroductionProps | AboutProjectsProps | AboutCTAProps;

export interface AboutHeroSectionProps extends Base<"blocks.about-hero-section"> {
    label: labelProps;
    title: string;
    subtitle: string;
    image: ImageProps;
}

export interface AboutStatisticsProps extends Base<"blocks.about-statistics"> {
    label: labelProps;
    text: string;
    statistics: aboutStatsProps[];
}

export interface AboutOurStoryProps extends Base<"blocks.about-our-story"> {
    label: labelProps;
    title: string;
    image: ImageProps;
    text: string;
    values: valueProps[];
}

export interface AboutIntroductionProps extends Base<"blocks.about-introduction"> {
    label: labelProps;
    title: string;
    text: string;
    embedVideoURL: string;
}

export interface AboutProjectsProps extends Base<"blocks.about-projects"> {
    label: labelProps;
    title: string;
    description: string;
    ctaButton: ButtonProps;
}

export interface AboutCTAProps extends Base<"blocks.about-cta"> {
    title: string;
    description: string;
    ctaButton: ButtonProps;
    ctaImage: ImageProps;
}
