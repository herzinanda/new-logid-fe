import type { HomeBlock, AboutBlock } from "@/types";
import Hero from "../home/Hero";
import HomeAbout from "../home/HomeAbout";
import Services from "../home/Services";
import Values from "../home/Values";
import WorkProcess from "../home/WorkProcess";
import Testimonials from "../home/Testimonials";
import HomeBlog from "../home/HomeBlog";
import CallToAction1 from "./CallToAction1";
import FeaturedProjects from "../home/FeaturedProjects";
import AboutHeroSection from "../about/AboutHeroSection";
import LuckyNumber from "../about/LuckyNumber";
import AboutOurStory from "../about/StorySection";
import AboutIntroduction from "../about/AboutIntroduction";
import AboutProjects from "../about/AboutProjects";
import AboutCTA from "../about/AboutCTA";

/**
 * Union type for all possible block types across different pages
 */
export type Block = HomeBlock | AboutBlock;

/**
 * Component mapping for all block types
 * This makes it easy to add new blocks - just add the component here
 */
const BLOCK_COMPONENTS = {
    // Home page blocks
    "blocks.hero-section": Hero,
    "blocks.home-about": HomeAbout,
    "blocks.home-services": Services,
    "blocks.home-values": Values,
    "blocks.home-featured-projects": FeaturedProjects,
    "blocks.home-work-process": WorkProcess,
    "blocks.testimonials": Testimonials,
    "blocks.home-blog": HomeBlog,
    "blocks.home-call-to-action": CallToAction1,

    // About page blocks
    "blocks.about-hero-section": AboutHeroSection,
    "blocks.about-statistics": LuckyNumber,
    "blocks.about-our-story": AboutOurStory,
    "blocks.about-introduction": AboutIntroduction,
    "blocks.about-projects": AboutProjects,
    "blocks.about-cta": AboutCTA,
} as const;

/**
 * Renders a single block based on its component type
 * @param block - The block data from Strapi
 * @param index - Index for React key
 * @returns Rendered component or null if component not found
 */
function blockRenderer(block: Block, index: number) {
    const componentType = block.__component;

    if (!componentType) {
        console.warn('Block missing __component property:', block);
        return null;
    }

    const Component = BLOCK_COMPONENTS[componentType];

    if (!Component) {
        console.warn(`No component found for block type: ${componentType}`);
        return null;
    }

    // TypeScript will infer the correct props type based on the component
    return <Component {...(block as any)} key={index} />;
}

/**
 * Generic BlockRenderer component
 * Renders an array of blocks from any page type (Home, About, etc.)
 * 
 * @example
 * // For home page
 * <BlockRenderer blocks={homeData.blocks} />
 * 
 * @example
 * // For about page
 * <BlockRenderer blocks={aboutData.blocks} />
 */
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
    if (!blocks || blocks.length === 0) {
        return null;
    }

    return <>{blocks.map((block, index) => blockRenderer(block, index))}</>;
}