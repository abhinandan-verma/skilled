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
  // ...
  const addButtonRef = React.useRef<HTMLButtonElement>(null);
  const [fields, setFields] = React.useState<
    { 
      name: "category" | "mentor" | "videoLink" | "syllabusTitle" | "syllabusDetailPoint" | "aboutDetailPoint",
      type: 'text' | 'number' | 'password' | 'email' | 'url' | 'date' | 'time' | 'file' | 'image' | 'hidden' | 'reset' | 'submit'
    }[]
  >([]);

  function addInputField({ name, type }: { 
    name: "category" | "mentor" | "videoLink" | "syllabusTitle" | "syllabusDetailPoint" | "aboutDetailPoint", 
    type: 'text' | 'number' | 'password' | 'email' | 'url' | 'date' | 'time' | 'file' | 'image' | 'hidden' | 'reset' | 'submit'
  }) {
    setFields((prevFields) => {
      const index = prevFields.findIndex(field => field.name === addButtonRef.current?.name);
      const newFields = [...prevFields];
      newFields.splice(index, 0, { name, type });
      return newFields;
    });
  }

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* ... */}
        {fields.map((field, index) => (
          <CustomInput
            key={index}
            control={form.control}
            name={field.name}
            label={field.name}
            placeholder={`Enter the ${field.name} of the course`}
            description={`${field.name} must be a string`}
            type={field.type}
          />
        ))}
        <div className="flex flex-col w-fit bg-blue-600">
        <Button
          ref={addButtonRef}
          onClick={() =>
            addInputField({ name: "aboutDetailPoint", type: "text" })
          }
        >
          Add Category
        </Button>
        <Button type="submit">Submit</Button>
        <Button
          ref={addButtonRef}
          onClick={() =>
            addInputField({ name: "category", type: "text" })
          }
        >
          Add Category
        </Button>
        </div>
       
      </form>
    </Form>
  );
}