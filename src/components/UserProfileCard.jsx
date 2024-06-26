import React, { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { FiLock, FiBookOpen } from "react-icons/fi";

const UserProfileCard = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleShowChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleHideChangePassword = () => {
    setShowChangePassword(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!showChangePassword ? (
        <div className="w-full max-w-md p-8 text-center bg-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-32 h-32 bg-gray-400 rounded-full">
              <FaUser className="text-white text-8xl" />
            </div>
          </div>
          <h2 className="mb-3 text-2xl font-semibold">Harsh</h2>
          <p className="mb-6 text-gray-700">kricrit52@gmail.com</p>
          <div className="space-y-4">
            <button className="flex items-center justify-start w-full py-3 text-gray-700 bg-white rounded shadow hover:bg-gray-200">
              <FiBookOpen className="mr-2 text-3xl" />
              <span>My Bookings</span>
            </button>
            <button
              onClick={handleShowChangePassword}
              className="flex items-center justify-start w-full py-3 text-gray-700 bg-white rounded shadow hover:bg-gray-200"
            >
              <FiLock className="mr-2 text-3xl" />
              <span>Change Password</span>
            </button>
            <button className="flex items-center justify-start w-full py-3 text-gray-700 bg-white rounded shadow hover:bg-gray-200">
              <FaSignOutAlt className="mr-2 text-3xl" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="current-password"
              >
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="new-password"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="confirm-new-password"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-new-password"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={handleHideChangePassword}
                className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
