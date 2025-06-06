import { z } from 'zod';

export const biodataSchema = z.object({
    race: z.string().array().optional(),
    country: z.string()
})

export const addressSchema = z.object({
    postalCode: z.string(),
    address: z.string()
})

export const aiRecordSchema = z.object({
    recordType: z.enum(["address", "biodata"]),
    record: z.union([addressSchema, biodataSchema]),
    fields: z.string().array(),
    highlightedText: z.string()
})


// 2. Infer the TypeScript type directly from the Zod schema
export type AddressRecordType = z.infer<typeof addressSchema>;
export type BiodataRecordType = z.infer<typeof biodataSchema>;

export type AiRecordType = z.infer<typeof aiRecordSchema>;