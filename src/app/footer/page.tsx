import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/freshcart-logo.svg'
import React from 'react'

const Footer = () => {
    return (
        <div className='  w-full flex flex-col justify-around items-center  p-10  md:flex-row bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-700'>
            <div className=''>



                <Image src={logo} alt="logo" className='w-full' />


            </div>

            <div className=' md:w-1/3'>
                <p >
                    He worked very hard to create the FreshCart; it contains a
                    lot of logic for producing a complete website waiting
                    for customers to come and buy it.
                </p>
            </div>
            <div className=''>
                <i className="fa-brands fa-instagram mx-2 text-2xl"></i>
                <i className="fa-brands fa-facebook mx-2 text-2xl"></i>
                <i className="fa-brands fa-tiktok mx-2 text-2xl"></i>
                <i className="fa-brands fa-twitter mx-2 text-2xl"></i>

            </div>

        </div>
    )
}

export default Footer