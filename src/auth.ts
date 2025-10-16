import { AuthOptions } from 'next-auth'
import { jwtDecode } from "jwt-decode";

import CredentialsProvider from 'next-auth/providers/credentials';




export const authOptions: AuthOptions = {



    pages: {
        signIn: "/login"

    },

    providers: [
        CredentialsProvider({
            name: 'Credentials',


            credentials: {
                email: { label: "email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },


            // login


            authorize: async function (credentials) {
                const respons = await fetch(`${process.env.API}/auth/signin`, {
                    method: 'POST',
                    body: JSON.stringify({

                        email: credentials?.email,
                        password: credentials?.password

                    }),
                    headers: { "Content-Type": "application/json" }
                })

                const payload  = await respons.json()


                console.log(payload );


                if (payload .message === 'success') {

                    const { id }: { id: string } = jwtDecode(payload.token)

                    return {
                        id: id,
                        user: payload .user,
                        token: payload .token,
                    };
                }

                throw new Error(payload.message);

            }
        }),
    ],


    callbacks: {

        async jwt({ token, user }) {

            if (user) {
                token.user = user?.user
                token.accessToken = user?.token
            }

            console.log(user);
            

            return token
        },

        async session({ session, token }) {

            if(token){
                session.user =token?.user
                session.accessToken = token?.accessToken  as string
            }


            return session
        },



    }

}

