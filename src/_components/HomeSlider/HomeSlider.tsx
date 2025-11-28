import React from 'react'
import MySwiper from '../MySwiper/MySwiper'
import Image from 'next/image'
import img1 from '@images/labtop.jpg'
import img2 from '@images/phone2.png'
import img3 from '@images/phone.webp'
import blog1 from '@images/camera.jpg'
import blog2 from '@images/Mobile__1.webp'


export default function HomeSlider() {
    return (
        <div className=' pb-10 w-full flex'>

            <MySwiper imagesList={[img1.src, img2.src, img3.src]} />
            <div className='w-1/4'>
                <Image src={blog1} className='w-full h-[200px]' alt="" />

                <Image src={blog2} className='w-full h-[200px]' alt="" />

            </div>

        </div>

    )
}
