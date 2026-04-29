import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center mt-40">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-6">

        <legend className="fieldset-legend text-lg font-semibold">
          Login your account
        </legend>

        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />

        <label className="label mt-2">Password</label>
        <input type="password" className="input w-full" placeholder="Password" />

        <button className="btn btn-neutral mt-4 w-full">
          Login
        </button>

        <p className='text-center pt-3'>Dont’t Have An Account ? <span className='font-bold text-red-500'>Register</span> </p>

      </fieldset>
    </div>
  );
};

export default LoginPage;