import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const BASE_URL = getStrapiURL();

function buildHomePageQuery(locale: string) {
    return qs.stringify({
        populate: {
            blocks: {
                on: {
                    "blocks.hero-section": {
                        populate: {
                            label: true,
                            bgImages: {
                                fields: ["url", "alternativeText"],
                            },
                            ctaButton: true,
                        },
                    },
                    "blocks.home-about": {
                        populate: {
                            label: true,
                            ctaAbout: true,
                            aboutStats: true,
                        },
                    },
                    "blocks.home-services": {
                        populate: {
                            label: true,
                            services: {
                                populate: {
                                    serviceImage: {
                                        fields: ["url", "alternativeText"],
                                    },
                                },
                            },
                        },
                    },
                    "blocks.home-values": {
                        populate: {
                            label: true,
                            ctaValues: true,
                            values: {
                                populate: {
                                    icon: {
                                        fields: ["url", "alternativeText"],
                                    },
                                },
                            },
                        },
                    },
                    "blocks.home-featured-projects": {
                        populate: "*",
                    },
                    "blocks.work-process": {
                        populate: {
                            label: true,
                            workProcesses: true,
                        },
                    },
                    "blocks.testimonials": {
                        populate: {
                            label: true,
                            testimonials: true,
                        },
                    },
                    "blocks.home-blog": {
                        populate: {
                            label: true,
                        },
                    },
                    "blocks.home-call-to-action": {
                        populate: {
                            ctaButton: true,
                            ctaBgImage: {
                                fields: ["url", "alternativeText"],
                            },
                        },
                    },
                },
            },
        },
        locale: locale,
    });
}

function buildArticlesHomepageQuery(locale: string) {
    return qs.stringify({
        filters: {
            isFeatured: {
                $eq: true,
            },
        },
        populate: {
            coverImage: {
                fields: ["url", "alternativeText"],
            },
            seo: true,
        },
        sort: ['publishedAt:desc'],
        pagination: {
            limit: 3,
        },
        locale: locale,
    });
}

export async function getHomePage(locale: string = "en") {
    const path = "/api/home-page";
    const url = new URL(path, BASE_URL);

    url.search = buildHomePageQuery(locale);

    return fetchAPI(url.href, { method: "GET" });
}

export async function getHomeArticles(locale: string = "en") {
    const path = "/api/articles";
    const url = new URL(path, BASE_URL);

    url.search = buildArticlesHomepageQuery(locale);

    return fetchAPI(url.href, { method: "GET" });
}

function buildFeaturedProjectsQuery(locale: string) {
    return qs.stringify({
        filters: {
            isFeatured: {
                $eq: true,
            },
        },
        populate: {
            thumbnailImage: {
                fields: ["url", "alternativeText"],
            },
            service: true,
            client: true,
            gallery: {
                fields: ["url", "alternativeText"],
            },
            project_testimonial: {
                populate: "*",
            },
            relatedProjects: true,
            seo: true,
        },
        sort: ['createdAt:desc'],
        pagination: {
            limit: 5,
        },
        locale: locale,
    });
}

export async function getFeaturedProjects(locale: string = "en") {
    const path = "/api/projects";
    const url = new URL(path, BASE_URL);

    url.search = buildFeaturedProjectsQuery(locale);

    return fetchAPI(url.href, { method: "GET" });
}
