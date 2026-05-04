import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {


    const token = await getToken({ req: request })
    const { pathname } = request.nextUrl

    const authPage = ["/login", "/register","/forgetpassword", "/VerifyResetCode", "/lognNwPassword"]

    const routes = ["/", "/cart", "/payment","/productDetails", "/categories", "/brand" ,"/allorders" ]



    if (!token && routes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url))

    }
    if (token && authPage.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url))

    }





    return NextResponse.next()
}

export const config = {
    matcher: ["/", "/cart", "/productDetails", "/payment","/categories", "/brand", "/login", "/register","/forgetpassword","/allOrders" ,"/VerifyResetCode" ,"/lognNwPassword"],
}