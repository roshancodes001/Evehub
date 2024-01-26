

import React from 'react'

const OrganiserAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Conx
                </span>
            </h3>
            <p className='text__para'>
            Conx is a dynamic event organizer specializing in creating unparalleled concert experiences. With a fervent dedication to music and entertainment, Conx has emerged as a premier name in the industry. Our vision is to redefine the concert landscape, infusing each event with passion, creativity, and a commitment to excellence.
Backed by years of expertise, our talented team meticulously plans and executes every detail, from artist selection to venue logistics, ensuring each performance is nothing short of extraordinary. At Conx, quality is our cornerstone, and we strive to surpass expectations, delivering memorable moments that resonate with audiences.
Beyond entertainment, Conx is deeply engaged in community enrichment, supporting local artists and charitable causes to foster positive impact.
Join us for an unforgettable journey through the world of music. Experience the magic of live performances with Conx and discover the transformative power of sound.


            </p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>23 June ,2004</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default OrganiserAbout