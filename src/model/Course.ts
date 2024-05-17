import mongoose, {Schema, Document } from "mongoose";
import { Video, VideoSchema } from "./Video";
import VideoModel from "./Video";
import { CourseOffer, CourseOfferSchema, Syllabus } from "./CourseParts";
import { CourseAboutSchema, CourseAbout } from "./CourseAbout";

export interface Course {
    name: string;
    description: string;
    about?: CourseAbout;
    price: number;
    startDate: Date;
    endDate: Date;
    mentors?: string[];
    duration: string;
    imageUrl: string;
    videoUrl?: string;
    syllabusLink: string;
    videos?: string[];
    categories: string[];
    courseOfferings?: CourseOffer[];
    tag?: string;
    syllabus?: Syllabus[];
}


const CourseSchema: Schema<Course> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    about: {
        aboutTitle: {
            type: String,
        },
        aboutDetails: [
            {
                type: String,
            }
        ]
    },
    price: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    mentors: [
        {
            type: String,
            default: ["Vijay Singh"]
        }
    ],
    duration: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    syllabusLink: {
        type: String,
        required: true
    },
    videos: {
        type: [String],
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    tag: {
        type: String
    },
    syllabus: [
        {
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
        }
    ],
    courseOfferings: [
        {
            offerTitle: {
                type: String,
            },
            offerDetails: [
                {
                    type: String,
                }
            ]
        }
    ]
})

const CourseModel = mongoose.models && mongoose.models.Course ? mongoose.models.Course as mongoose.Model<Course> : mongoose.model<Course>("Course", CourseSchema);
export default CourseModel;