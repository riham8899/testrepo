
"use client"
import React from 'react'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'


import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod'

import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { LoginSchemaType } from '@/schema/login.schema';
import { loginschema } from './../../schema/login.schema';

import { signIn } from "next-auth/react"
import Link from 'next/link';





function Login() {



  const router = useRouter()

  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: ""
    },


    resolver: zodResolver(loginschema)
  })

  async function handelLogin(values: LoginSchemaType) {
    console.log(values);




    // try {

    //   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
    //   console.error(data)

    //   toast.success(data.message,{
    //     position: "top-center",
    //     duration: 2000
    //   })
    //   router.push("/")

    // } catch (error) {

    //   toast.error(error.response.data.message || "Something went wrong, please try again",{
    //     position: "top-center",
    //     duration: 2000
    //   })
    //   // console.log(error)

    // }








    // {statusMsg: 'success', message: 'Reset code sent to your email'}message: "Reset code sent to your email"statusMsg: "success"[[Prototype]]: Object





    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/"

    })
    console.log(res);


    if (res?.ok) {

      toast.success("Login successful 🎉", {
        position: "top-center",
        duration: 2000
      })

      window.location.href = res.url || "/"

    }
    else {
      toast.error(res?.error || "Invalid credentials", {
        position: "top-center",
        duration: 2000
      })

    }




  }

  return (
    <div className='mx-auto px-5 md:px-0 w-full my-10 md:w-1/2'>
      <h1 className='text-3xl text-center font-bold'>Login Now</h1>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handelLogin)}>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email"   autoComplete="current-email" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="your password"   autoComplete="current-password" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />




            <Button className='w-full mt-5  bg-green-700 hover:bg-green-600'>Login Now </Button>



          </form>
        </Form>
        <Link href="/forgetPassword">
          <p className=' text-black hover:text-green-500 mt-2'>
            forget your password ?
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Login