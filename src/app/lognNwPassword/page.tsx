"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useRouter } from "next/navigation";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { toast } from 'sonner';


export const logNewPassword = () => {

    const router = useRouter();



    const form = useForm({
        defaultValues: {
            email: "",
            newPassword: "",
            confirmPassword: ""
        }

    })



    async function handlNewPassword(values: { email: string; newPassword: string; confirmPassword: string }) {

        

        if (values.newPassword !== values.confirmPassword) {
            toast.error("Passwords do not match", {
                duration: 1000,
                position: 'top-center'
            })
            return;
        }


        console.log(values);


        try {

            const { data } = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
                {
                    email: values.email,
                    newPassword: values.newPassword
                }


            )

            console.log(data);

            if (data.token) {
                toast.success("Password updated successfully"),{

                    duration: 1000,
                    position: 'top-center'

                }
                router.push("/")
            } else {
                toast.error("Something went wrong")
            }
            


        } catch (error) {
            console.log("Error response:", error.response?.data);

            toast.error("ronggg passworddd catchh", {
                duration: 1000,
                position: 'top-center'
            })

        }


    }


    return (
        <div className='w-[50%] mx-auto px-5 my-10'>
            <div>
                <h1 className='font-bold text-2xl mb-3'>
                    please enter your New password
                </h1>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handlNewPassword)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='mb-2'>Email </FormLabel>
                                        <FormControl>
                                            <Input type='email'  {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='mb-2'>Password</FormLabel>
                                        <FormControl>
                                            <Input type='password'  {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='mb-2' >Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type='password'  {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className='mb-2  bg-green-700 hover:bg-green-600'>Send</Button>


                        </form>

                    </Form>


                </div>
            </div>
        </div>
    )
}

export default logNewPassword