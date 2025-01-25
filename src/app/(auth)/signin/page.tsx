"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center text-[#626F86] bg-gray-50">
      <div className="w-full max-w-[25rem] bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xs tracking-tighter font-light text-left mb-1 uppercase">
          Procurement
        </h2>
        <h2 className="text-2xl font-medium text-gray-800 text-left mb-6">
          Sign in to your account
        </h2>
        <form>
          <div className="mb-8">
            <label className="block text-xs font-normal">
              Phone
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                🇳🇬
              </span>
              <input
                type="tel"
                placeholder="+234"
                className="w-full pl-10 px-3 py-2 border-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="my-8">
            <label className="block text-xs font-normal">
              Password
            </label>
            <div className="relative">
              <input
                placeholder="****"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="my-8 flex items-center content-center gap-4">
            <input
              checked={true}
              // placeholder="****"
              type="checkbox"
              className="w-auto px-2 py-2 checkbox appearance-auto focus:opacity-100 ring-2 focus:ring-offset-2 ring-blue-500 focus:outline-none border rounded-md border-blue-500 cursor-pointer "
            />
            <p className="text-xs font-medium">
              {" "}
              Keep me signed in
            </p>
          </div>
          <button className="w-full bg-blue-600 text-white text-xs py-2 rounded-md hover:bg-blue-700">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
