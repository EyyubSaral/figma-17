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
import Link from "next/link";

export default function Mail() {
  return (
    <div className="flex bg-[#e8f3fc] min-h-screen">
      {" "}
      {/* Sidebar */}
      <nav className="bg-white rounded-xl w-[250px] m-7 p-4 h-[500px]">
        <div className="flex items-center space-x-2 mb-4">
          <img src="/namık.png" alt="User" className="h-10 w-10 rounded-full" />
          <p className="font-semibold">Namık Korona</p>
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-lg mb-2">Menu</h1>
          <div className="space-y-2">
            <p className="flex items-center space-x-2 text-gray-700">
              <Home className="h-4 w-4" />
              <Link href="/dashboard">
                <span>Dashboard</span>
              </Link>
            </p>
            <p className="flex items-center space-x-2  text-blue-400">
              <MessageCircle className="h-4 w-4" />
              <span>Messages</span>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-lg mb-2">Settings</h1>
          <div className="space-y-2">
            <p className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <Link href="/profile">
                <span>Profile</span>
              </Link>
            </p>
            <p className="flex items-center space-x-2">
              <HelpCircle className="h-4 w-4" />
              <Link href="/faq">
                <span>FAQ's</span>
              </Link>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <Link href="/contact">
                <span>Contact Us</span>
              </Link>
            </p>
            <p className="flex items-center space-x-2 text-red-500">
              <LogOut className="h-4 w-4" />
              <Link href="/login">
                <span>Log out</span>
              </Link>
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
      {/* main */}
      <main className="flex-1 mr-7 mt-7 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
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
              <Link href="/faq"> 
              <HelpCircle className="h-5 w-5 text-gray-700" />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded w-[800px] h-[80px] flex flex-col justify-center p-3 ">
            <div className="flex gap-2">
              <h1 className="bg-red-500 w-auto rounded text-white text-sm text-center px-2 ">
                Alert
              </h1>
              <p className="text-sm">5 mins ago</p>
            </div>
            Benzene percentage is high. Long exposure to benzene can cause
            various lungs conditions
          </div>

          <div className="bg-white rounded w-[800px] h-[80px] flex flex-col justify-center p-3 ">
            <div className="flex gap-2">
              <h1 className="bg-red-500 w-auto rounded text-white text-sm text-center px-2 ">
                Danger
              </h1>
              <p className="text-sm">12 mins ago</p>
            </div>
            You Lost 8 mins worth of your lifespan
          </div>
        </div>
      </main>
    </div>
  );
}
