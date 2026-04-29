import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex justify-center mt-40">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-6">

        <legend className="fieldset-legend text-lg font-semibold">
          Register your account
        </legend>

        <label className="label">Your Name</label>
        <input type="text" className="input w-full" placeholder="Enter Your Name" />

        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />

        <label className="label mt-2">Password</label>
        <input type="password" className="input w-full" placeholder="Password" />

        {/* ✅ Terms & Conditions */}
        <label className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span className="text-sm">
            Accept <span className="font-medium underline cursor-pointer">Terms & Conditions</span>
          </span>
        </label>

        <button className="btn btn-neutral mt-4 w-full">
          Register
        </button>

      </fieldset>
    </div>
  );
};

export default RegisterPage;