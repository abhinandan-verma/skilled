"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { verifySchema } from '@/schemas/verifySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '@/types/ApiResponse'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

function VerifyAccount() {
    const router = useRouter()
    const params = useParams<{username: string}>()
    const { toast } = useToast()
    

    const form = useForm<z.infer<typeof verifySchema>>({
        resolver: zodResolver(verifySchema),
        }
    )

    const onSubmit = async (data: z.infer<typeof verifySchema>) => {
        console.log("Data: ",data)
        console.log("Params: ",params)
        console.log("Username: ",params.username)

        try {
            
            const response = await axios.post<ApiResponse>('/api/verify-code', {
                username: params.username,
                code: data.code
            })

            console.log("Response: ",response.data)

            toast({
                title: response.data.message,
                variant: 'default',
                duration: 2000
            })

            router.replace('/sign-in')
            
        } catch (error) {
            console.error("Error in signup of user: ", error)

            const axiosError = error as AxiosError<ApiResponse>
            console.log("AxiosError: ",axiosError.response?.data)

            toast({
                title: "OTP verification failed",
                description: axiosError.response?.data.message || 'An error occurred',
                variant: 'destructive'
            })


        }

    }

  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
        <div>
            <CardWrapper
            headerLabel='Verify OTP'
            backButtonLabel='Resend OTP?'
            backButtonHref='/api/resend-otp'
            showSocial={false}
            >
                

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Enter OTP</FormLabel>
                            <FormControl>
                                <Input placeholder="OTP" {...field} />
                            </FormControl>
                            <FormDescription>
                                Sent OTP is valid for 10 minutes
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button 
                        type="submit"
                        className='w-full'
                        >
                            Verify OTP
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    </div>
  )
}

export default VerifyAccount