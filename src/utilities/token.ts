"use server"
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';


export async function getMyToken() {

    const x = (await cookies()).get("next-auth.session-token")?.value



    const token = await decode({

        token: x,

        secret: process.env.NEXTAUTH_SECRET!,



    })

    console.log(token,"Test at line 22");

    




    return token?.accessToken



}



