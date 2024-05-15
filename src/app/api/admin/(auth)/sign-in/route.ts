import mongoose from "mongoose";
import AdminModel from "@/model/admin/Admin";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";


export async function POST(request: Request){
    await dbConnect();

    const { email, password, phoneNumber } =  await request.json()

    console.log("Request Body: ", email, password, phoneNumber)

    try {

        console.log("try block")

        const existingUserByEmail = await AdminModel.findOne(
            {
                email: email,
                phoneNumber: phoneNumber
            }
        )

        if(!existingUserByEmail){
            return Response.json(
                {
                    success: false,
                    message: "User does not exist with this email"
                },
                {
                    status: 404
                }
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUserByEmail.password)

        if(!isPasswordCorrect){
            return Response.json(
                {
                    success: false,
                    message: "Incorrect Password"
                },
                {
                    status: 400
                }
            )
        }

        console.log("existingUserByEmail: ", existingUserByEmail)

        if(existingUserByEmail.isVerified === false){
            return Response.json(
                {
                    success: true,
                    message: "User not verified"
                },
                {
                    status: 300
                }
            )
        }
        
        return Response.json(
            {
                success: true,
                message: "User is verified"
            },
            {
                status: 200
            }
        )

    } catch (error) {
        console.log("catch block")
        console.log(error)
        return Response.json(
            {
                success: false,
                message: "Internal Server Error"
            },
            {
                status: 500
            }
        )
    }
}