import mongoose from "mongoose";
import CourseModel from "@/model/Course";
import dbConnect from "@/lib/dbConnect";
import { useParams } from "next/navigation";

export async function POST(request: Request): Promise<Response> {

    const {
        id,
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

    console.log("Request Body: ", id, name, description, about, price, startDate, endDate, mentors, duration, imageUrl, videoUrl, syllabusLink, videos, categories, tag, syllabus, courseOfferings)


    await dbConnect();
    console.log("DB Connected")

    try {


        const existingCourse = await CourseModel.findOne({
            name: name,
        });

        if (existingCourse) {
            console.log("Course Already uploaded: ", existingCourse);

            return Response.json(
                {
                    success: false,
                    message: "Course already uploaded",
                },
                {
                    status: 400,
                }
            );
        }
        
        const newCourse = new CourseModel({
            id: id,
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
            courseOfferings: courseOfferings
        });

        console.log("New Course: ", newCourse)

        const result = await newCourse.save();

        if(!result){
            console.log("Error uploading course")

            return Response.json(
                {
                    success: false,
                    message: "Error uploading course",
                },
                { status: 400 }
            );
        }

        console.log("Course uploaded successfully")

        return Response.json(
            {
                success: true,
                message: "Course uploaded successfully",
            },
            { status: 200 }
        );
    
  } catch (error) {

    console.log("Error uploading course: ", error);

    return Response.json(
      {
        success: false,
        message: "Internal server error",
        error: error
      },
      { status: 500 }
    );
  }
}