"use client"

import React, { useContext } from 'react'
import Image from 'next/image';
import logo from "./../../../../public/freshcart-logo.svg"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { cartContext } from '@/Context/CartContext';
import { Badge } from "@/components/ui/badge";



export const Navbar = () => {

    const { data: Session, status } = useSession()

    const { numOfCart } = useContext(cartContext)




    return (
        <div className='bg-green-100 py-5'>
            <div className='w-full md:w-[80%] mx-auto flex  flex-col md:flex-row justify-between items-center text-center'>

                <ul className='flex flex-col md:flex-row gap-6 text-center'>

                    {status === "authenticated" && <>

                        <li>
                            <Link href="/">

                                <Image src={logo} alt="logo" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">

                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">

                                cart
                            </Link>
                        </li>
                        <li>
                            <Link href="/wishList">
                                Wish List
                            </Link>
                        </li>
                        <li>
                            <Link href="/productsPage">

                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/catogries">

                                Catogries
                            </Link>
                        </li>
                        <li>
                            <Link href="/brand">

                                Brand
                            </Link>
                        </li>
                        <li>
                            <Link href="/allorders">

                                All orders
                            </Link>
                        </li>
                    </>}


                    {status === "loading" && <><h1>Loading</h1></>}

                    {status === "unauthenticated" && <><Image src={logo} alt="logo" /></>}

                </ul>





                <div className='flex  flex-col md:flex-row gap-2'>





                    <div>
                        <i className="fa-brands fa-instagram mx-2"></i>
                        <i className="fa-brands fa-facebook mx-2"></i>
                        <i className="fa-brands fa-tiktok mx-2"></i>
                        <i className="fa-brands fa-twitter mx-2"></i>
                        
                    </div>
                    {status === "authenticated" && <>

                        <div>
                            <button className='cursor-pointer text-bold' onClick={() => signOut({
                                callbackUrl: "/login"
                            })}>
                                Logout
                            </button>

                        </div>

                        <div>
                            <h1 className='text-green-700 text-bold'> welcom {Session.user.name}</h1>


                        </div>

                        <div >
                            <Link href="/cart">
                                <Badge className='bg-green-300 text-black font-bold text-2xl mb-2' >
                                    <i className="fa-solid fa-cart-shopping text-2xl text-green-700 "></i>{numOfCart}
                                </Badge>
                            </Link>



                        </div>
                    </>}
                    {status === "unauthenticated" && <><div>
                        <Link href="/register">

                            Register
                        </Link>
                    </div>
                        <div>
                            <Link href="/login">

                                Login
                            </Link>
                        </div>
                    </>}





                </div>



            </div>

        </div>


    )
}

export default Navbar