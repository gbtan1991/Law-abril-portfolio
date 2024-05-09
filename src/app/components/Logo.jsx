import React from 'react'
import Image from 'next/image';
import logo from "../../../public/logo.png";

const Logo = () => {
  return (
    <div>
        <Image src={logo} alt='logo' height={60} priority={true} />
    </div>
  )
}

export default Logo