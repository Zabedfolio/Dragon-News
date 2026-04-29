'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from '@/components/shared/NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    console.log(user, "session")


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

            {isPending ?
                (<span className="loading loading-ring loading-xl"></span>)
                :
                user ?
                    (<div className='flex gap-2 items-center'>
                        <h2>Hello, <span className='text-red-600 font-bold'>{user.name}</span></h2>
                        <Image alt='user' src={user.image || userAvatar} width={40} height={40}></Image>
                        <button className='btn btn-neutral px-8' onClick={async()=> await authClient.signOut()}>Logout</button>
                    </div>)
                    :
                    (<button className='btn btn-neutral px-8'>
                        <Link href={'/login'}>Login</Link>
                    </button>)
            }

        </div>
    );
};

export default Navbar;