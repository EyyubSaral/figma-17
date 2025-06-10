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

const FAQPage = () => {
  return (
    <div className="flex bg-[#e8f3fc] min-h-screen">
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
              <Link href="/profile">
                <span>Profile</span>
              </Link>
            </p>
            <p className="flex items-center space-x-2 text-blue-400">
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

      <div className="flex-1 flex items-start justify-center p-10">
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">FAQ's</h1>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>How do I use the dashboard features?</li>
            <li>Where can I find sensor calibration info?</li>
            <li>How to reset my password?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
