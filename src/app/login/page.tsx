import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl text-black mx-auto">
        <div className="card-body">
          <h2 className="text-center font-semibold text-3xl mb-7 mt-5">Login Now!</h2>
          <fieldset className="fieldset">
            <input type="email" className="border font-semibold text-[14px] p-3 rounded-md mb-3" placeholder="Email" />
            <input type="password" className="border font-semibold text-[14px] p-3 rounded-md" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-11">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
