import type { HomeBlock } from "@/types";
import Hero from "../home/Hero";
import HomeAbout from "../home/HomeAbout";
import Services from "../home/Services";
import Values from "../home/Values";
import WorkProcess from "../home/WorkProcess";
import Testimonials from "../home/Testimonials";
import HomeBlog from "../home/HomeBlog";
import CallToAction1 from "./CallToAction1";
import FeaturedProjects from "../home/FeaturedProjects";

function blockRenderer(block: HomeBlock, index: number) {
    switch (block.__component) {
        case "blocks.hero-section":
            return <Hero {...block} key={index} />;
        case "blocks.home-about":
            return <HomeAbout {...block} key={index} />;
        case "blocks.home-services":
            return <Services {...block} key={index} />;
        case "blocks.home-values":
            return <Values {...block} key={index} />;
        case "blocks.home-featured-projects":
            return <FeaturedProjects {...block} key={index} />;
        case "blocks.home-work-process":
            return <WorkProcess {...block} key={index} />;
        case "blocks.testimonials":
            return <Testimonials {...block} key={index} />;
        case "blocks.home-blog":
            return <HomeBlog {...block} key={index} />;
        case "blocks.home-call-to-action":
            return <CallToAction1 {...block} key={index} />;
        default:
            return null;
    }
}

export function BlockRenderer({ blocks }: { blocks: HomeBlock[] }) {
    return blocks.map((block, index) => blockRenderer(block, index));
}