import Image from "next/image";
import { getStrapiURL } from "@/utils/get-strapi-url";
import type { ImageProps as NextImageProps } from "next/image";

interface StrapiImageProps extends Omit<NextImageProps, 'src'> {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export function StrapiImage({
    src,
    alt,
    className,
    width,
    height,
    fill,
    ...rest
}: Readonly<StrapiImageProps>) {
    const imageUrl = getStrapiMedia(src);
    if (!imageUrl) return null;

    // Don't set style.width/height when using fill prop
    const imageStyle = fill
        ? { objectFit: "cover" as const }
        : {
            width: width ? `${width}px` : 'auto',
            height: height ? `${height}px` : 'auto',
            objectFit: "cover" as const,
        };

    return (
        <Image
            src={imageUrl}
            alt={alt}
            className={className}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            style={imageStyle}
            unoptimized
            {...rest}
        />
    );
}

export function getStrapiMedia(url: string | null) {
    if (url == null) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return getStrapiURL() + url;
}
