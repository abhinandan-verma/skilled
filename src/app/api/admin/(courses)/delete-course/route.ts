import mongoose from "mongoose";
import CourseModel from "@/model/Course";
import dbConnect from "@/lib/dbConnect";


export async function POST(request: Request): Promise<Response> {

    const {
        id,
        name
    } = await request.json();

    console.log("Request Body: ", id, name)

    await dbConnect();
    console.log("DB Connected")

    try {

        const existingCourseByID = await CourseModel.findById(id);
        console.log("Existing Course By ID: ", existingCourseByID)

        const existingCourseByName = await CourseModel.findOne({
            name: name,
        });
        console.log("Existing Course By Name: ", existingCourseByName)


        if (!existingCourseByID && !existingCourseByName) {
            console.log("Course Not Found: ", existingCourseByID, existingCourseByName);

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

        await CourseModel.deleteOne({ 
            _id: id,
            name: name
        });

        return Response.json(
            {
                success: true,
                message: "Course deleted successfully",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Error deleting course: ", error);
        return Response.json(
            {
                success: false,
                message: "Error deleting course",
            },
            {
                status: 500,
            }
        );
    }
}