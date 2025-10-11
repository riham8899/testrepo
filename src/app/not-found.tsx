import React from 'react'
import Image from 'next/image'
import erorr from './../../public/404.jpg'

function Erorrpage() {
    return (
        <div className='w-full'>

            <Image src={erorr } alt="" />
        </div>
    )
}

export default Erorrpage