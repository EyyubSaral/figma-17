"use client";

import {
  Home,
  MessageCircle,
  User,
  HelpCircle,
  Phone,
  LogOut,
  Bot,
  Bell,
  Palette,
} from "lucide-react";



import CO2Chart from "../components/CO2Chart";
import VOCChart from "../components/VOCChart";
import PM25Chart from "../components/PM25Chart";
import WQIBar from "../components/WQIBar";
import TemperatureCard from "../components/TemperatureCard";
import HumidityCard from "../components/HumidityCard";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex bg-[#e8f3fc] min-h-screen">
      {/* Sidebar */}
      <nav className="bg-white rounded-xl w-[250px] m-7 p-4 h-[500px]">
        <div className="flex items-center space-x-2 mb-4">
          <img src="/namık.png" alt="User" className="h-10 w-10 rounded-full" />
          <p className="font-semibold">Namık Korona</p>
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-lg mb-2">Menu</h1>
          <div className="space-y-2">
            <p className="flex items-center space-x-2 text-blue-400">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-700">
              <MessageCircle className="h-4 w-4" />
              <Link href="/mails">
                <span>Messages</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-lg mb-2">Settings</h1>
          <div className="space-y-2">
            <p className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </p>
            <p className="flex items-center space-x-2">
              <HelpCircle className="h-4 w-4" />
              <span>FAQ's</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </p>
            <p className="flex items-center space-x-2 text-red-500">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/icon1.png" alt="EcoGuard" className="h-8" />
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-blue-600">Eco</span>
              <span className="text-green-500">Guard</span>
            </h1>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            <Bot className="h-4 w-4" />
            <span>Chat Bot</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mr-7 mt-7 space-y-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-white rounded-full shadow">
              <Palette className="h-5 w-5 text-gray-700" />
            </button>
            <button className="p-2 bg-white rounded-full shadow">
              <Bell className="h-5 w-5 text-gray-700" />
            </button>
            <button className="p-2 bg-white rounded-full shadow">
              <HelpCircle className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Rooms Tabs */}
        <div className="flex space-x-2">
          <button className="bg-white px-4 py-2 rounded-full shadow text-gray-700">
            Bedroom
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-full shadow text-white">
            Backyard
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow text-gray-700">
            Living Room
          </button>
        </div>

        {/* AQI Section */}
        <div className="bg-white rounded-xl p-6 shadow space-y-6">
          <h2 className="text-lg font-bold flex items-center space-x-2">
            <span>AQI</span>
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <PM25Chart />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <TemperatureCard value={25} />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <HumidityCard value={62} />
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <CO2Chart />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h1>VOC (volatile organic compounds)</h1>
              <VOCChart />
            </div>
          </div>
        </div>

        {/* WQI Section */}
        <div className="bg-white rounded-xl p-6 shadow space-y-6">
          <h2 className="text-lg font-bold flex items-center space-x-2">
            <span>WQI</span>
          </h2>
          <WQIBar label="Temperature" value={43} color="#EF4444" />
          <WQIBar label="PH Level" value={7.5} color="#3B82F6" />
          <WQIBar label="TDS Level" value={115} color="#10B981" />
        </div>
      </main>
    </div>
  );
}
