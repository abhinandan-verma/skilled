"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { uploadCourseSchema } from "@/schemas/admin/uploadCourseSchema"
import CustomInput from "@/components/CustomInputField"

const formSchema = uploadCourseSchema

export default function UploadCourse() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "er",
      description: "er",
      price: 4,
      thumbnail: "http://localhost:3000/skilledup/courses/upload-course",
      video: "http://localhost:3000/skilledup/courses/upload-course",
      startDate: new Date(),
      endDate: new Date(),
      duration: "er",
      imageUrl: "http://localhost:3000/skilledup/courses/upload-course",
      syllabusLink: "http://localhost:3000/skilledup/courses/upload-course",
      category: "er",
      tag: "tag",
      mentor: "vsingh",
      videoLink: "http://localhost:3000/skilledup/courses/upload-course",
      syllabusTitle: "df",
      syllabusDetailPoint: "df",
      aboutTitle: "df",
      aboutDetailPoint: "df",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values)

  }


  function addInputField({name, type}: 
    { 
      name :  "category" | "mentor" | "videoLink" | "syllabusTitle" | "syllabusDetailPoint" | "aboutDetailPoint",
      type : 'text' | 'number' | 'password' | 'email' | 'url' | 'date' | 'time' | 'file' | 'image' | 'hidden' | 'reset' | 'submit'
    }
  ){

    console.log(name, type)
    console.log("Adding input field")
    return (
      <CustomInput control={form.control} name={name} label={name} placeholder={`Enter the ${name} of the course`} description={`${name} must be a string`} type={type} />
    )
  }
  
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

       <CustomInput control={form.control} name="name" label="Name" placeholder="Enter the name of the course" description="Name must be at least of 1 characters" type="text" />
        <CustomInput control={form.control} name="description" label="Description" placeholder="Enter the description of the course" description="Description must be at least of 1 characters" type="text" />
        {/* <CustomInput control={form.control} name="price" label="Price" placeholder="Enter the price of the course" description="Price must be a positive integer" type="number" /> */}
        <CustomInput control={form.control} name="thumbnail" label="Thumbnail" placeholder="Enter the thumbnail of the course" description="Thumbnail must be a valid URL" type="url" />
        <CustomInput control={form.control} name="video" label="Video" placeholder="Enter the video of the course" description="Video must be a valid URL" type="url" />
        <CustomInput control={form.control} name="startDate" label="Start Date" placeholder="Enter the start date of the course" description="Start Date must be a valid date" type="date" />
        <CustomInput control={form.control} name="endDate" label="End Date" placeholder="Enter the end date of the course" description="End Date must be a valid date" type="date" />
        <CustomInput control={form.control} name="duration" label="Duration" placeholder="Enter the duration of the course" description="Duration must be a string" type="text" />
        <CustomInput control={form.control} name="imageUrl" label="Image URL" placeholder="Enter the image URL of the course" description="Image URL must be a valid URL" type="url" />
        <CustomInput control={form.control} name="syllabusLink" label="Syllabus Link" placeholder="Enter the syllabus link of the course" description="Syllabus Link must be a valid URL" type="url" />
        {/* <CustomInput control={form.control} name="categories" label="Categories" placeholder="Enter the categories of the course" description="Categories must be an array of strings" type="text" /> */}
        <CustomInput control={form.control} name="tag" label="Tag" placeholder="Enter the tag of the course" description="Tag must be a string" type="text" />
        <CustomInput control={form.control} name="mentor" label="Mentor" placeholder="Enter the mentor of the course" description="Mentor must be a string" type="text" />
        <CustomInput control={form.control} name="videoLink" label="Video Link" placeholder="Enter the video link of the course" description="Video Link must be a valid URL" type="url" />
        <CustomInput control={form.control} name="syllabusTitle" label="Syllabus Title" placeholder="Enter the syllabus title of the course" description="Syllabus Title must be a string" type="text" />
        <CustomInput control={form.control} name="syllabusDetailPoint" label="Syllabus Detail Point" placeholder="Enter the syllabus detail point of the course" description="Syllabus Detail Point must be a string" type="text" />
        <CustomInput control={form.control} name="category" label="Category" placeholder="Enter the categories of the course" description="Categories must be an array of strings" type="text" />
        <Button onClick={() => addInputField({name: "category", type: "text"})}>Add Category</Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
