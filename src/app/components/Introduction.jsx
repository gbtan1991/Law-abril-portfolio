import React from 'react'
import Image from 'next/image'
import attyProfile from "../../../public/attyprofile.png";
import partnership from "../../../public/partnership.png";

const Introduction = () => {
  return (
    <div className='flex items-center'>
        <div className='w-[60%] flex-col flex gap-5'>
          <div className='flex gap-3 items-center'>
            <p className='bg-gray-800 text-white py-1 px-7 rounded-full'>
              New
            </p>
            <p className='text-gray-950'>Stay connected to upcomming & Recent jobs</p>
          </div>
          <div className='flex flex-col gap-10'>
            <h1 className='text-7xl font-bold'>Your Solution <br/> Legal Consultacy</h1>
            <p className='text-gray-800 text-xl'>
              We are here to help you take care of your legality <br /> with the best service especially for you.
            </p>
            <div className='flex w-full justify-start'>
              <button className='bg-gray-800 text-white p-5 rounded-md uppercase'>Get started</button>
            </div>
            <p className='text-xl'>Trusted by 10+ companies in Philippines</p>
            <Image className='w-40' alt='partnership' src={partnership}/>
          </div>
        </div>
        <div className='w-[40%] '>
            <div className='flex h-full -left-1/4 relative w-full 
              before:bg-gray-300 before:w-[650px] before:h-[650px] before:-z-10 before:rounded-full before:opacity-50 before:absolute before:bottom-0 
              after:bg-gray-400 after:w-[500px] after:h-[500px] after:-z-10 after:rounded-full after:opacity-30 after:absolute after:!-top-5 after:inset-16'
            >
              <Image alt='atty profile' src={attyProfile}/>
              {/* <div>
                <h1>
                  Francis Dominick P. Abril
                </h1>
                <p>
                  -Lawyer
                </p>
              </div> */}
            </div>
         
        </div>
    </div>
  )
}

export default Introduction