import React from "react";
import { FaBook, FaGraduationCap, FaTrophy, FaCog, FaSignOutAlt, FaInbox } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-5 text-xl font-bold text-gray-800">E-Learning</div>
        <ul className="space-y-4 p-4">
          <li className="flex items-center text-red-600 font-medium p-2 rounded-md hover:bg-red-100 cursor-pointer">
            <FaBook className="mr-2" /> Courses
          </li>
          <li className="flex items-center text-blue-600 font-medium p-2 rounded-md hover:bg-blue-100 cursor-pointer">
            <FaGraduationCap className="mr-2" /> Enrolled Courses
          </li>
          <li className="flex items-center text-black font-medium p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <FaTrophy className="mr-2" /> Achievements
          </li>
          <li className="flex items-center text-gray-600 font-medium p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <FaInbox className="mr-2" /> Messages
          </li>
          <li className="flex items-center text-gray-600 font-medium p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <FaCog className="mr-2" /> Settings
          </li>
          <li className="flex items-center text-red-500 font-medium p-2 rounded-md hover:bg-red-200 cursor-pointer">
            <FaSignOutAlt className="mr-2" /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-700">Welcome Back!</h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Courses</h2>
            <p className="text-sm">Browse new courses</p>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Enrolled Courses</h2>
            <p className="text-sm">Track your progress</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Achievements</h2>
            <p className="text-sm">View your milestones</p>
          </div>
        </div>

        {/* Announcements & Leaderboard */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700">📢 Announcements</h2>
            <p className="text-sm text-gray-600 mt-2">New courses added this week!</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700">🏆 Leaderboard</h2>
            <p className="text-sm text-gray-600 mt-2">Top 5 learners of the month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
