import React from 'react'
import circleLayer from "../../../public/Circle Layer.png"
import bag from "../../../public/Bag.png";
import rocket from "../../../public/Rocket.png";
import userArrow from "../../../public/User Arrows.png";
import Image from 'next/image';

const data = [{
    icon: circleLayer,
    title: "Environmental Law",
    description: "Environmental legal issues might occur since the planned business activities are designed"
},
{
    icon: bag,
    title: "Corporate and Commercial",
    description: "We provide a complete range of services for the continuity of your business activities."
},
{
    icon: rocket,
    title: "Information and Technology",
    description: "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty."
},
{
    icon: userArrow,
    title: "Other Services",
    description: "In dealing with disruptive economic and legal challenge, our firm also provide various legal services."
}]


const Introduction2 = () => {
  return (
    <div className='bg-[#EEEEEE] flex gap-5 justify-between py-12 px-10 pb-32'>
        <div className='flex flex-col gap-5 w-[45%] p-5'>
            <h1 className='text-5xl text-gray-900 leading-normal'>Why do we help with legalization?</h1>
            <p className='text-gray-500 text-lg leading-normal'>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
        </div>
        <div className='flex flex-wrap justify-between w-[55%] gap-3'>
            {data.map((items) => (
                <div className='flex flex-col gap-5 w-[45%] bg-white py-3 px-5 rounded-lg'>
                    <Image alt='' src={items.icon}/>
                    <h1 className='font-semibold'>{items.title}</h1>
                    <p className='text-sm text-gray-400'>{items.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Introduction2