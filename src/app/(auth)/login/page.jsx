'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(data, error)
        if (error) {
            alert(error.message)
        }
        if (data) {
            alert("Login Successful")
        }
    }

    return (
        <div className="flex justify-center mt-40">
            <form
                onSubmit={handleLoginFunc}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-6"
            >

                <legend className="fieldset-legend text-lg font-semibold">
                    Login your account
                </legend>

                <label className="label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                    required
                />

                <label className="label mt-2">Password</label>
                <div className="relative">
                    <input
                        type={isShowPassword ? "text" : "password"}
                        name="password"
                        className="input w-full pr-10"
                        placeholder="Password"
                        required
                    />

                    <button
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>


                <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Login
                </button>

                <p className="text-center pt-3">
                    Don’t have an account?{' '}
                    <Link href="/register" className="font-bold text-red-500">
                        Register
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default LoginPage;