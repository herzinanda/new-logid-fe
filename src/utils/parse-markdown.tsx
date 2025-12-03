import React from 'react';

/**
 * Parses text with **bold** markdown syntax and converts it to JSX with custom styling
 * @param text - The text containing **bold** markdown
 * @returns JSX elements with styled spans
 */
export function parseMarkdownBold(text: string): React.ReactNode {
    if (!text) return null;

    // Split by **text** pattern
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        // Check if this part is wrapped in **
        if (part.startsWith('**') && part.endsWith('**')) {
            // Remove the ** and wrap in span with orange color
            const content = part.slice(2, -2);
            return (
                <span key={index} className="text-primary-orange">
                    {content}
                </span>
            );
        }
        // Return regular text as-is
        return part;
    });
}
