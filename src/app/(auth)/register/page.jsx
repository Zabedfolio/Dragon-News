'use client'

import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // console.log(name, email, photo, password);

        const {data, error} = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })

        // console.log(data,error)
        if(error){
            alert(error.message);
        }
        if(data){
            alert("SignUp successful")
        }
    };

    return (
        <div className="flex justify-center mt-40">
            <form
                onSubmit={handleRegisterFunc}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-6"
            >

                <legend className="fieldset-legend text-lg font-semibold">
                    Register your account
                </legend>

                <label className="label">Your Name</label>
                <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Enter Your Name"
                    required
                />

                <label className="label">Photo URL</label>
                <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    placeholder="Enter Your Photo URL"
                />

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

                {/* Terms */}
                <label className="flex items-center gap-2 mt-4">
                    <input type="checkbox" className="checkbox checkbox-sm" required />
                    <span className="text-sm">
                        Accept <span className="font-medium underline cursor-pointer">Terms & Conditions</span>
                    </span>
                </label>

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Register
                </button>

            </form>
        </div>
    );
};

export default RegisterPage;