import mongoose, {Schema, Document} from "mongoose";

export interface CourseOffer {
    offerTitle: string;
    offerDetails: string[];
}

export const CourseOfferSchema: Schema<CourseOffer> = new Schema({
    offerTitle: {
        type: String,
    },
    offerDetails: [
        {
            type: String,          
        }
    ]
})


export interface Syllabus {
    syllabusTitle: string;
    syllabusDetails: string[];
    syllabusImage: string;
}

export const SyllabusSchema: Schema<Syllabus> = new Schema({
    syllabusTitle: {
        type: String,
    },
    syllabusDetails: [
        {
            type: String,
        }
    ],
    syllabusImage: {
        type: String
    }
})