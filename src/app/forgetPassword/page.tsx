
"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { toast } from 'sonner';
import Link from 'next/link'


export const forgetPassword = () => {

    const form = useForm({
        defaultValues: {
            email: ""
        }
    })



    async function handleVerify(values:{email:String}) {
        console.log(values);


        try {

            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values)

            console.log(data);


            if (data.statusMsg === "success") {
                toast.success(data.message, {
                    duration: 1000,
                    position: 'top-center'
                })

                    window.location.href =  "/VerifyResetCode"


            } else {
                toast.error("Email not found", {
                    duration: 1000,
                    position: 'top-center'
                })

            }


        } catch (error) {
            console.log(error);
        }


    }


    return (


        <div className='w-[50%] mx-auto px-5 my-10'>
            <div>
                <h1 className='font-bold text-2xl'>
                    please enter your Email to send code
                </h1>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleVerify)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel />
                                        <FormControl>
                                            <Input type='email'  {...field} />
                                        </FormControl>
                                        <FormDescription />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className=' bg-green-700 hover:bg-green-600' >verify</Button>

                        <Link href="/login"><p className=' text-black hover:text-green-500 mt-2'>Back To Login ?</p></Link>



                        </form>

                    </Form>


                </div>
            </div>
        </div>
    )
}

export default forgetPassword

//Form فيها input email → ينادي forgotPassword().

// Form فيها input code → ينادي verifyResetCode().

//Form فيها new password → ينادي resetPassword().
//Step 1: يدخل الإيميل → يوصله كود.

// Step 2: يدخل الكود → يتأكد أنه صح.

// Step 3: يكتب الباسورد الجديد → يتغير في السيرفر.