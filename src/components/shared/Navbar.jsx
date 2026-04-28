import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import NavLink from '@/components/shared/NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>

            <ul className='flex gap-5 justify-between items-center text-[#706F6F]'>
                <li>
                    <NavLink href='/'>Home</NavLink>
                </li>

                <li>
                    <NavLink href='/about-us'>About</NavLink>
                </li>

                <li>
                    <NavLink href='/career'>Career</NavLink>
                </li>
            </ul>

            <div className='flex gap-5 items-center'>
                <Image alt='user' src={user} width={40} height={40}></Image>
                <button className='btn btn-neutral px-8'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>

        </div>
    );
};

export default Navbar;