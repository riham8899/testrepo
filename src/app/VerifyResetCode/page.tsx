
"use client"
import React from 'react'


import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSlot, } from "@/components/ui/input-otp"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from "next/navigation";
import Link from 'next/link'
const VerifyResetCode = () => {
    const router = useRouter();


    const form = useForm({
        defaultValues: {
            resetCode: ""
        }
    })
    



    async function handleRsetCode(values: { resetCode: string }) {


        try {

            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values)

            console.log(data);


            if (data.status === "Success") {
                toast.success("success", {
                    duration: 1000,
                    position: 'top-center'
                })

                router.push("/lognNwPassword")
            }

        } catch (error) {
            console.log(error);


            toast.error("ronggg code", {
                duration: 1000,
                position: 'top-center'
            })
        }
        console.log("Sending data: ", values);
    }






    return (

        <div className='w-[100%] mx-auto  my-20 flex justify-around items-center flex-col'>
            <div className='border-1  mx-[20%] rounded-2xl shadow-2xl py-15'>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleRsetCode)} className="w-100 space-y-6 flex flex-col justify-center items-center">
                        <FormField
                            control={form.control}
                            name="resetCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-2xl font-bold mb-10  '>Enter your code.</FormLabel>
                                    <FormControl >
                                        <InputOTP maxLength={6} {...field} className='ps-56'>
                                            <InputOTPGroup >
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    {/* <FormDescription>
                                    Please enter the one-time password sent to your phone.
                                </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='w-[55%] bg-green-700 hover:bg-green-600' type="submit">Submit</Button>

                        <Link href="/forgetPassword"><p className=' text-black hover:text-green-500 mt-2'>Back To page</p></Link>
                    </form>
                </Form>
            </div>



        </div>




    )
}

export default VerifyResetCode