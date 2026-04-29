'use client'

import Link from 'next/link';
import React from 'react';

const LoginPage = () => {

    const handleLoginFunc = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
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
                <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                    required
                />

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