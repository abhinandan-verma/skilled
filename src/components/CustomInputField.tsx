import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath, Form } from 'react-hook-form'
import * as z from "zod"
import { uploadCourseSchema } from '@/schemas/admin/uploadCourseSchema'

const formSchema = uploadCourseSchema

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    description?: string | undefined,
    type: 'text' | 'number' | 'password' | 'email' | 'url' | 'date' | 'time' | 'file' | 'image' | 'hidden' | 'reset' | 'submit'
}



function CustomInput({control, name, label, placeholder, description, type}: CustomInput ) {
  return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label font-semibold'>
                        {label}
                    </FormLabel>
                    <div className='w-full flex flex-col'>
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='input-class'
                                {...field}
                                type={type}
                                value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
                            />
                        </FormControl>
                        <FormDescription className='mt-2'>
                            {description}
                        </FormDescription>
                        <FormMessage className='form-message mt-1'/>
                    </div>
                </div>
            )}
            />

  )
}

export default CustomInput