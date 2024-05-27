import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';


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


const Nav = ({ isMenuOpen, isSmallDevice }) => {
  return (
    <ul className={clsx("flex gap-x-5", {
        "flex flex-col gap-y-5": isMenuOpen && isSmallDevice
    })}>
        {navItems.map((nav, index) => (
            <li key={index}>
                <Link href={nav.url} className={clsx('text-gray-500 hover:opacity-50 uppercase text-sm', {
                    "text-white underline": isMenuOpen && isSmallDevice
                })}>{nav.text}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav