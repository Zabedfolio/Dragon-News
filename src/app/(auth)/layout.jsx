import { montserrat } from '@/app/layout';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;