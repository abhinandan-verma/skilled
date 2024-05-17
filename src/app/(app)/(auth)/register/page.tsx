"use client";

import React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState, useEffect,   } from 'react'
import {  useDebounceCallback} from "usehooks-ts"
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { signUpSchema } from '@/schemas/signUpSchema'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '@/types/ApiResponse'
import { CardWrapper } from '@/components/auth/card-wrapper'


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react';



export default function Register() {

  const [ username, setUsername ] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debounced = useDebounceCallback(setUsername, 500)
  const { toast } = useToast()
  const router = useRouter()
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess ] = useState<string | undefined>("")

  // zod implementation
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    })

    useEffect(() => {
      const checkUsernameUnique = async () => {
        if (username !== '') {
          setIsCheckingUsername(true)
          setUsernameMessage('')
        

        try {
          const response = await axios.get(`/api/check-username-unique?username=${username}`)
          console.log("Response: ",response.data)

          setUsernameMessage(response.data.message)

        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>
          if(username === ''){
            setUsernameMessage('')
            setError('')
          }else{
            setUsernameMessage(axiosError.response?.data.message || 'Error checking username')
            setError(axiosError.response?.data.message || 'Error checking username')
          }
          

          console.log("AxiosError: ",axiosError.response?.data)
          setUsernameMessage(axiosError.response?.data.message || 'Error checking username')
        }
        finally{
          setIsCheckingUsername(false)
        }
      }

        
      };
      checkUsernameUnique()
      
    }, [username])

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {

    setIsSubmitting(true)
    console.log("Submitting data: ",data)

    try {
      console.log("Data: ",data)

      const response = await axios.post<ApiResponse>('/api/register', data)

      if(!response.data){
        console.log("Error finding Response: ",response.data)
        setError(response.data)
        setIsSubmitting(false)
        return null
      }

      console.log("Response Data: ",response.data)
     
      console.log("Response Data Message: ",response.data.message)

      toast({
        title: 'Success',
        description: response.data.message
      })

      setSuccess(response.data.message)

      router.replace(`/verify/${username}`)
      setIsSubmitting(false)

    } catch (error) {

      console.log("Error is registering user: ",error)

      const axiosError = error as AxiosError<ApiResponse>

      setError(axiosError.response?.data.message || 'Error registering user')

      toast({
        title: 'Error',
        description: axiosError.response?.data.message || 'Error registering user',
        variant: "destructive"
      })

      setIsSubmitting(false)
    }
  }

  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  '>
    
    <CardWrapper 
        headerLabel="Create an Account"
        backButtonLabel="Already have an account?"
        backButtonHref="/sign-in"
        showSocial={true}
       >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                    <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isSubmitting}
                                            {...field}
                                            placeholder="Abhinandan"
                                            type="username"
                                            onChange={(e) => {
                                              field.onChange(e)
                                              debounced(e.target.value)
                                            }}
                                        />
                                        
                                    </FormControl>
                                     { isCheckingUsername && <Loader2 className='animate-spin'/> }
                                     <p className={`text-sm ${usernameMessage === "Username is available" ? 'text-green-500' : 'text-red-500'}`}>
                                         { usernameMessage}
                                     </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isSubmitting}
                                            {...field}
                                            placeholder="abhi@email.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                            disabled={isSubmitting}
                                        />
                                    </FormControl>                             
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError  message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-800"
                    type="submit"
                    disabled={isSubmitting}
                    >
                        {
                          isSubmitting ? (
                            <>
                              <Loader2 className='mr-3 h-4 w-4 animate-spin'/> Creating Account
                            </>
                          ) : ('Create an Account')
                        }
                    </Button>
                </form>
            </Form>
       </CardWrapper>
    
    </div>
  )
}
