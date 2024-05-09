import React from 'react';
import Link from 'next/link';


const navItems = [{
    text: "contact",
    url: "/contact"
}, {
    text: "testimonials",
    url: "/testimonials"
}, {
    text: "about",
    url: "/about"
}, {
    text: "terms",
    url: "/terms"
}];


const Nav = () => {
  return (
    <ul className='flex gap-x-5'>
        {navItems.map((nav, index) => (
            <li key={index}>
                <Link href={nav.url} className='uppercase text-sm'>{nav.text}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav