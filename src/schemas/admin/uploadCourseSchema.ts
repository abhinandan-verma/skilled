import { start } from "repl"
import * as z from "zod"

export const uploadCourseSchema = z.object({
    name: z.string().min(1, {message: "Name must be at least of 1 characters"}).max(20, {message: 'Name must be at max 20 characters'}),
    description: z.string().min(1, {message: "Description must be at least of 1 characters"}).max(80, {message: 'Description must be at max 80 characters'}),
    price: z.number().int().positive(),
    thumbnail: z.string().url(),
    video: z.string().url(),
    startDate: z.date(),
    endDate: z.date(),
    duration: z.string(),
    imageUrl: z.string().url(),
    syllabusLink: z.string().url(),
    category: z.string(),
    tag: z.string(),
    mentor: z.string(),
    videoLink: z.string().url(),
    syllabusTitle: z.string(),
    syllabusDetailPoint: z.string(),
    aboutTitle: z.string(),
    aboutDetailPoint: z.string(),
})