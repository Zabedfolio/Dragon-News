import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg'>Login With</h2>
            <div className='flex flex-col gap-3 mt-4'>
                <button className='btn btn-outline btn-info'> <FaGoogle /> Login with Google</button>
                <button className='btn btn-outline'> <FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default RightSideBar;