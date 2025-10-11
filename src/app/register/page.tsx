"use client"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, RegisterSchemType } from './../../schema/register.schema';
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'



function Register() {

  const router = useRouter()

  const form = useForm<RegisterSchemType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },


    resolver: zodResolver(registerSchema)
  })

  async function handelRegister(values: RegisterSchemType) {
    console.log(values);




    try {

      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      console.error(data)

      toast.success(data.massage ,{
        position:"top-center",
        duration:2000
      })

      router.push("/login")

    } catch (error) {

        toast.error(error.response.data.message,{
        position:"top-center",
        duration:2000
      })
      console.log(error)

    }




  }





  return (
    <div className='mx-auto px-5 md:px-0 w-full my-10 md:w-1/2'>
      <h1 className='text-3xl text-center font-bold'>Register Now</h1>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handelRegister)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >User Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="User Name" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
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
                    <Input type="password" placeholder="your password" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name ="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Repassword</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Repassword" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="your phone " {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full mt-5  bg-green-700 hover:bg-green-600'>Register Now </Button>

          </form>
        </Form>
      </div>
    </div>
  )
}

export default Register