import mongoose, {Schema, Document} from "mongoose"
import { Course } from "./Course";
import { CourseSchema } from "@/app/(app)/courses/CourseSchema";

export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})


export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean,
    messages: Message[],
    courses: [
        name: string,
        courseId: string
    ]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: [true, "VerifyCode is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry is required"],
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [
        MessageSchema
    ],
    courses: [
        {
            name: {
                type: String,
                required: true
            },
            courseId: {
                type: Schema.Types.ObjectId,
                ref: "Course",
                required: true
            }
        }
    ]
})


const UserModel = mongoose.models && mongoose.models.User 
                    ? mongoose.models.User as mongoose.Model<User> 
                    : mongoose.model<User>("User", UserSchema);
export default UserModel