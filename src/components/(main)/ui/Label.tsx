import { labelProps } from "@/types";

interface LabelComponentProps {
    label: labelProps;
}

export function Label({ label }: Readonly<LabelComponentProps>) {
    // Handle different variants
    if (label.variant === "outline") {
        return (
            <span className="justify-center text-base-white-background text-sm font-medium leading-normal">
                {label.label}
            </span>
        );
    }

    // Default to primary variant
    return (
        <span className="label label-solid-orange" aria-label={label.label}>
            {label.label}
        </span>
    );
}
