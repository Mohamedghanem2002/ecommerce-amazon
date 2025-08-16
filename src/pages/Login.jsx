import React from "react";
import logo from '../assets/images/amazon-logo-transparent.png';
import '../styles/index.css';

function Login() {
  return (
    <div className="login min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto " src={logo} alt="Amazon" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-300">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">Sign in</h2>
          
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email or mobile phone number
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="mt-4 text-xs text-gray-600">
            By continuing, you agree to Amazon's <a href="#" className="text-blue-500 hover:underline">Conditions of Use</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Notice</a>.
          </div>
 
          <div className="mt-4 mb-4">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Need help?
            </a>
          </div>
          <hr />
          
          <div className="mt-4">
            <p className="font-base text-gray-600 font-semibold">  Buying for work?</p>
            <p className="text-blue-500 hover:underline">Shop on Amazon Business</p>
          </div>
        </div>
        

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">New to Amazon?</span>
            </div>
          </div>

          <div className="mt-6 mb-6">
            <button
              type="button"
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Create your Amazon account
            </button>
          </div>
        </div>
      </div>

      <hr />
      
      <div className="mt-8 text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-blue-500 hover:underline">Conditions of Use</a>
          <a href="#" className="text-blue-500 hover:underline">Privacy Notice</a>
          <a href="#" className="text-blue-500 hover:underline">Help</a>
        </div>
        <div>© 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
}

export default Login;
