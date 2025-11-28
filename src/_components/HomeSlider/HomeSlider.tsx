import React from 'react'
import MySwiper from '../MySwiper/MySwiper'
import Image from 'next/image'
import img1 from '@images/istockphoto-178716575-612x612.jpg'
import img2 from '@images/hero_endframe__cvklg0xk3w6e_large 2.png'
import img3 from '@images/23-12-29_19-47-23-850x478-1-780x470.webp'
import blog1 from '@images/41VnHdPlzZL._SR290,290_.jpg'
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
