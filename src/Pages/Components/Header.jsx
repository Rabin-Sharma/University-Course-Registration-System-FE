import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { request } from "../../Services/api";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const HandelLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "You will be redirected to the login page.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        request("logout", "POST").then((res) => {
          if (!res.ok) {
            toast.error("Logout failed. Please try again.");
            return;
          }
          toast.success("Logged out successfully");
          localStorage.removeItem("token"); // or however you store auth
          navigate("/login");
        });
      }
    });
  };
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Student Portal
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, John Doe</span>
            <button
              onClick={HandelLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
