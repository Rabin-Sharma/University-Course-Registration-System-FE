import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { request } from "../Services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await request("login", "POST", { email, password });
      const data = await res.json();

      if (res.ok && data.status === true) {
        localStorage.setItem("token", data.token); // store token
        toast.success(data.message);
        navigate("/dashboard"); // redirect
      } else if (data.status === false) {
        toast.error(data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while logging in.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Student Portal
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form id="loginForm" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
            />
            <div id="emailError" className="text-red-500 text-sm mt-1 hidden">
              Please enter a valid email address
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
            <div
              id="passwordError"
              className="text-red-500 text-sm mt-1 hidden"
            >
              Password must be at least 6 characters
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-800 transition duration-200"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 transform hover:scale-105"
          >
            {/* show a spinning circle for loader */}
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.343A8.001 8.001 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.595zM20.071 17.657A8.001 8.001 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.929-1.595zM12 20a8 8 0 008-8h4c0 4.411-3.589 8-8 8v-4zM12 4a8 8 0 00-8 8H0c0-4.411 3.589-8 8-8v4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              Contact Admin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
