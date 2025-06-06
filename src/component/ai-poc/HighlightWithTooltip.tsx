// src/components/HighlightWithTooltip.tsx
import { Text, Tooltip } from '@mantine/core'; // Assuming Mantine is set up
import React from 'react';

interface HighlightWithTooltipProps {
    /** The string containing the custom <extracted> tags */
    text: string;
}

// Regex to find <extracted field="fieldName">content</extracted>
// Group 1: fieldName
// Group 2: content
const EXTRACTED_TAG_REGEX = /<extracted field="([^"]+)">([^<]+)<\/extracted>/g;

export function HighlightWithTooltip({ text }: HighlightWithTooltipProps) {
    // Array to store the parsed React nodes
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    // Iterate through all matches found by the regex
    while ((match = EXTRACTED_TAG_REGEX.exec(text)) !== null) {
        const [fullMatch, fieldName, content] = match;
        console.log(fullMatch)
        console.log(fieldName)
        console.log(content)
        const startIndex = match.index;
        const endIndex = match.index + fullMatch.length;

        if (startIndex > lastIndex) {
            parts.push(text.substring(lastIndex, startIndex));
        }

        parts.push(
            <Tooltip key={`highlight-${startIndex}`} label={fieldName} withArrow position="top" transitionProps={{ duration: 100, transition: 'fade' }}>
                <Text component="span" fw={600} style={{ textDecoration: 'underline', cursor: 'help' }}>
                    {content}
                </Text>
            </Tooltip>
        );

        lastIndex = endIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return <>{parts}</>;
}