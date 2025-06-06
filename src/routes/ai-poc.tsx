import { Container, Space, Stack, Text, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import { AiCard } from '../component/ai-poc/AiCard';
import { type AiRecordType } from '../types/ai-record';


export const Route = createFileRoute('/ai-poc')({
  component: AiPoc,
})

// Helper function to generate dummy content
const generateAiRecords = (count: number): AiRecordType[] => {
  const aiRecords: AiRecordType[] = [];
  const addressRecord =
  {
    recordType: "address" as const,
    fields: ["address", "postalCode"],
    record: {
      address: "Ang Mo Kio Hub",
      postalCode: "123321",
    },
    highlightedText: "John lives in <extracted field=\"address\">Ang Mo Kio Hub </extracted> with postalCoode <extracted field=\"postalcode\"> 123321 </extracted>"

  }

  const biodataRecord =
  {
    recordType: "biodata" as const,
    fields: ["race", "country"],
    record: {
      race: ["Chinese", "Indian"],
      country: "Singaporean",
    },
    highlightedText: "John lives in <extracted field=\"country\">Singapore </extracted>. He is <extracted field=\"race\"> Chinese </extracted>"

  }
  for (let i = 1; i <= count; i++) {
    const record = i % 2 == 0 ? addressRecord : biodataRecord;
    aiRecords.push(record);
  }
  return aiRecords;
};


function AiPoc() {
  return (<Container size="md" py="md">
    <Title order={2} mb="lg" ta="center">
      AI generated records
    </Title>
    <Text c="dimmed" ta="center" mb="xl">
      Using AI to extract out records from Notes created
    </Text>

    <Stack >
      {(generateAiRecords(10)).map((aiRecord, id) => (
        <AiCard
          id={id}
          aiRecord={aiRecord}
        />
      ))}
    </Stack>
    <Space h="xl" />
    <Text ta="center" c="dimmed">
      End of cards.
    </Text>
  </Container>
  );
}