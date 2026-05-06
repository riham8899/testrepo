"use client"

import React, { useContext } from 'react'
import Image from 'next/image';
import logo from "./../../../../public/freshcart-logo.svg"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { cartContext } from '@/Context/CartContext';
import { Badge } from "@/components/ui/badge";
import { wishListContext } from '@/Context/wishListContext';
import { usePathname } from 'next/navigation';



export const Navbar = () => {

    const { data: Session, status } = useSession();

    const { numOfCart } = useContext(cartContext);
    const { numOfWishList } = useContext(wishListContext);
    const pathname = usePathname();




    return (
        <div className='bg-green-100 py-5 md:w-full w-12/12 flex  md:flex-row justify-between md:justify-around md:px-5 items-center mx-auto '>
            {status === "authenticated" && <>
                <div className=' md:w-auto'>

                    <Link href="/" >

                        <Image src={logo} alt="logo" className=' md:w-full' />
                    </Link>

                </div>
            </>}


            <div className=' md:flex-row justify-between items-center text-center '>



                {status === "authenticated" && <>


                    <div className='flex  md:flex-row gap-2 text-center  '>
                        <ul className='flex  flex-col md:flex-row gap-2 text-sm md:font-bold md:gap-4 sm:w6/12'>
                            <li>
                                <Link href="/" className={pathname=== "/" ? " font-bold  transition hover:scale-105 bg-emerald-200 text-white border rounded-2xl p-2 ":" border-transparent hover:scale-105  hover:bg-emerald-200  transition-all duration-300  hover:border-emerald-200 hover:text-white border hover:rounded-2xl p-2 "}>

                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/wishList" className={pathname==="/wishList"?" font-bold transition hover:scale-105 bg-emerald-200 text-white border rounded-2xl p-2  " :" border-transparent   hover:bg-emerald-200 hover:text-white hover:border hover:rounded-2xl p-2 transition-all duration-300 hover:scale-105 "}>
                                    Wish List
                                </Link>
                            </li>
                            <li>
                                <Link href="/productsPage" className={pathname==="/productsPage"?" font-bold transition hover:scale-105 bg-emerald-200 text-white border rounded-2xl hover:p-2  hover:bg-emerald-200 hover:text-white p-2":" border-transparent transition-all duration-300 hover:scale-105 hover:bg-emerald-200 hover:text-white hover:border hover:rounded-2xl p-2 "}>

                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories"  className={pathname==="/categories"?" font-bold transition hover:scale-105 bg-emerald-200 text-white border rounded-2xl p-2 ":"border-transparent  transition-all duration-300 hover:scale-105 hover:bg-emerald-200 hover:text-white hover:border hover:rounded-2xl p-2 "}>

                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand"  className={pathname==="/brand"?" font-bold transition hover:scale-105 bg-emerald-200 text-white border rounded-2xl p-2" :"  border-transparent transition-all duration-300 hover:scale-105 hover:bg-emerald-200 hover:text-white hover:border hover:rounded-2xl p-2  "} >

                                    Brands
                                </Link>
                            </li>
                            <li>
                                <Link href="/allorders"  className={pathname==="/allorders"?" bg-emerald-200 font-bold transition hover:scale-105  text-white  rounded-2xl p-2 border-transparent  ":" border  border-transparent hover:rounded-2xl p-2 transition-all duration-300 hover:scale-105 hover:bg-emerald-200 hover:text-white hover:border-emerald-200"}>

                                    All orders
                                </Link>
                            </li>
                        </ul>

                    </div>


                </>}


                {status === "loading" && <><h1>Loading</h1></>}

                {status === "unauthenticated" && <><Image src={logo} alt="logo" /></>}


            </div>

            <div className='flex   md:flex-row '>





                {status === "authenticated" && <>



                    <div className=' flex-col'>
                        <div className=' flex gap-1 justify-around items-center md:flex-row flex-col'>
                            <Link href="/cart">
                                <Badge className=' text-black font-bold text-2xl bg-green-100' >
                                    <i className="fa-solid fa-cart-shopping text-2xl text-green-700 "></i>{numOfCart}
                                </Badge>
                            </Link>
                            <Link href="/wishList">
                                <Badge className='font-bold text-2xl text-black bg-green-100'>
                                    <i className="fa-solid fa-heart text-red-700 "></i>{numOfWishList}
                                </Badge>

                            </Link>
                            <button className='cursor-pointer ' onClick={() => signOut({
                                callbackUrl: "/login"
                            })}>
                                <Badge className='font-bold text-2xl text-black  bg-green-100'>
                                    <i className="fa-solid fa-person-running"></i>
                                    <i className="fa-solid fa-right-from-bracket "></i>
                                </Badge>


                            </button>
                            
                        </div>


                        <p className='text-green-700 text-sm text-center'> Welcome {Session.user.name}</p>



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


    )
}

export default Navbar