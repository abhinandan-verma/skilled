import mongoose, {Document, Schema } from "mongoose";

export interface CourseAbout {
    aboutTitle: string;
    aboutDetails: string[];
}

export const CourseAboutSchema: Schema<CourseAbout> = new Schema({
    aboutTitle: {
        type: String,
    },
    aboutDetails: [
        {
            type: String,
        }
    ]
})

export default CourseAbout