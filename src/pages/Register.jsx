import React from "react";
import logo from '../assets/images/amazon-logo-transparent.png';
import '../styles/index.css';

function Register() {
  return (
    <div className="login min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto " src={logo} alt="Amazon" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-6">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-300">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">Create Account</h2>

          <form className="space-y-4 mb-6" action="#" method="POST">
            <div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>


              <div className="mt-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="mt-1">
                  <input
                    id="phonenumber"
                    name="phonenumber"
                    type="phonenumber"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>



              <div className="mt-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>


            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Verify Mobile Number
              </button>
            </div>
          </form>

          <hr />

          <div className="mt-4 mb-4">
            <p className="font-base text-gray-600 font-semibold">  Buying for work?</p>
            <p className="text-blue-500 hover:underline text-sm">Create a free business account</p>
          </div>
            <hr />

          <div className="mt-4 mb-4">
            <p className="text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign in</a></p>
            <div className="mt-4 text-xs text-gray-600 capitalize">
            By creating an account or logging in, you agree to Amazon's <a href="#" className="text-blue-500 hover:underline">Conditions of Use</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Notice</a>.
          </div>
 
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

export default Register;
