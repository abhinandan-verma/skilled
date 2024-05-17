import mongoose from "mongoose";
import CourseModel from "@/model/Course";
import dbConnect from "@/lib/dbConnect";



export async function PUT(request: Request): Promise<Response> {

    const {
        _id,
        name,
        description,
        about,
        price,
        startDate,
        endDate,
        mentors,
        duration,
        imageUrl,
        videoUrl,
        syllabusLink,
        videos,
        categories,
        tag,
        syllabus,
        courseOfferings,
    } = await request.json();

    console.log("Request Body: ", _id, name, description, about, price, startDate, endDate, mentors, duration, imageUrl, videoUrl, syllabusLink, videos, categories, tag, syllabus, courseOfferings)

    await dbConnect();
    console.log("DB Connected")

    try {

        const existingCourseByID = await CourseModel.findByIdAndUpdate(_id, {
            name: name,
            description: description,
            about: about,
            price: price,
            startDate: startDate,
            endDate: endDate,
            mentors: mentors,
            duration: duration,
            imageUrl: imageUrl,
            videoUrl: videoUrl,
            syllabusLink: syllabusLink,
            videos: videos,
            categories: categories,
            tag: tag,
            syllabus: syllabus,
            courseOfferings: courseOfferings,
        });

        console.log("Existing Course: ", existingCourseByID)

        if (!existingCourseByID) {
            console.log("Course not found: ", existingCourseByID);

            return Response.json(
                {
                    success: false,
                    message: "Course not found",
                },
                {
                    status: 400,
                }
            );
        }
       
            
        return Response.json(
            {
                success: true,
                message: "Course updated successfully",
            },
            {
                status: 200,
            }
        );

    }

    catch (error) {
        console.error("Error updating course: ", error);
        return Response.json(
            {
                success: false,
                message: "Error updating course",
            },
            {
                status: 500,
            }
        );
    }

}