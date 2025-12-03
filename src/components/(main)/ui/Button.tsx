import Link from "next/link";
import { ButtonProps } from "@/types";

interface ButtonComponentProps {
    button: ButtonProps;
    locale?: string;
}

export function Button({ button, locale }: Readonly<ButtonComponentProps>) {
    // Determine the className based on variant
    const getButtonClass = () => {
        switch (button.variant) {
            case "primary":
                return "btn group btn-solid-orange";
            case "light-primary":
                return "btn group btn-solid-white";
            case "outline":
                return "btn group btn-outline-dark";
            case "secondary":
                return "btn group btn-text-only";
            default:
                return "btn group btn-solid-orange"; // Default to primary
        }
    };

    // Construct the href with locale if provided
    const href = locale ? `/${locale}${button.url}` : button.url;

    return (
        <Link
            href={href}
            className={getButtonClass()}
            aria-label={button.text}
            tabIndex={0}
        >
            {button.text}
            <i
                className="btn-icon ph ph-arrow-right text-xl"
                aria-hidden="true"
            ></i>
        </Link>
    );
}
