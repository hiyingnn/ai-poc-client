import { Button, Card, Group, Text } from "@mantine/core";
import type { AiRecordType } from "../../types/ai-record";
import { HighlightWithTooltip } from "./HighlightWithTooltip";

interface AiCardProps {
    id: number,
    aiRecord: AiRecordType
}

export function AiCard({ id, aiRecord }: AiCardProps) {

    const title = `${aiRecord.recordType} detected`
    const description = `With the following fields detected: ${aiRecord.fields}`

    return (
        <Card key={id} shadow="sm" padding="lg" radius="md" withBorder>
            <Text fw={700} size="lg" mb="xs">
                {title}
            </Text>

            <Text fw={700} size="xs" mb="xs">
                <HighlightWithTooltip text={aiRecord.highlightedText} />
            </Text>

            <Group justify="flex-end" mt="md">
                <Button variant="light" color="blue" size="sm">
                    Create Record
                </Button>
            </Group>
        </Card>
    )
}