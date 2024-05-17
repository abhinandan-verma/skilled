import mongoose, { Schema } from "mongoose";


export interface Admin extends Document{
    adminName: string;
    email: string;
    password: string;
    passCode: string;
    isVerified: boolean;
    phoneNumber: string;
}

const AdminSchema: Schema<Admin> = new Schema({
    adminName: {
        type: String,
        required: [true, "Admin Name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    passCode: {
        type: String,
        required: [true, "PassCode is required"]
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"]
    }
})


const AdminModel = mongoose.models && mongoose.models.Admin 
                    ? mongoose.models.Admin as mongoose.Model<Admin>
                    : mongoose.model<Admin>("Admin", AdminSchema)
export default AdminModel;
