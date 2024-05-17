import mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import AdminModel from "@/model/admin/Admin";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";


export async function POST(request: Request){
    await dbConnect()

    const {adminName, email, password, passCode, phoneNumber } =  await request.json()

        console.log("Request Body: ", adminName, email, password, passCode, phoneNumber)

    try { 
        
       const existingAdminVerifiedByUsername = await AdminModel.findOne({
        adminName: adminName,
        isVerified: true,
       })

       if(existingAdminVerifiedByUsername){

         console.log("Admin Already registerd: ", existingAdminVerifiedByUsername)

         return Response.json(
            {
                success: false,
                message: "Admin Name already taken"
            },
            {
                status: 400
            }
        )
       }

       const existingAdminByEmail = await AdminModel.findOne(
        {
            email: email
        }
       )

       const verifyCode = Math.floor(10000090 + Math.random() * 90000090).toString()

       if(existingAdminByEmail){
            console.log("Existing Admin: ", existingAdminByEmail)

            if(existingAdminByEmail.isVerified){
                console.log("Admin already exists with this email")
                return Response.json(
                    {
                        success: false,
                        message: "Admin already exists with this email" 
                    },
                    {
                        status: 500
                    }
                )
            }else{
                const hashedPassword = await bcrypt.hash(password, 10)
                console.log("Hashed Password", hashedPassword)

                existingAdminByEmail.password = hashedPassword;
                existingAdminByEmail.passCode = passCode;
                existingAdminByEmail.isVerified = false;
                existingAdminByEmail.phoneNumber = phoneNumber;
                existingAdminByEmail.adminName = adminName;

                await existingAdminByEmail.save();
                console.log("Existing Admin saved successfully, verify code sent ")
                console.log("Existing Admin: ", existingAdminByEmail)
            }
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)
            const newAdmin = new AdminModel({
                adminName,
                email,
                password: hashedPassword,
                passCode,
                isVerified: false,
                phoneNumber
            })
            await newAdmin.save()
            console.log("New Admin saved successfully, verify code sent")
            console.log("New Admin: ", newAdmin)
        }

        const sendEmail  = await sendVerificationEmail(email, adminName, verifyCode)
        console.log("Verification Email sent successfully: ", sendEmail)

        return Response.json(
            {
                success: true,
                message: "Admin registered successfully, verify code sent to email"
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.error("Error while registering Admin: ", error)
        return Response.json(
            {
                success: false,
                message: "Error while registering Admin"
            },
            {
                status: 500
            }
        )
    }
}

