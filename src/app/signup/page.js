import Link from "next/link";

export default function Signup() {
  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto"
      style={{ backgroundImage: "url('/image2.png')" }}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block"
          style={{
            width: "calc(108% + 1.3px)",
            height: "500px",
            transform: "rotateY(180deg)",
          }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Logo */}
      <div className="z-10 relative flex items-center space-x-2 p-6">
        <img src="/icon1.png" alt="EcoGuard" className="h-8" />
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">Eco</span>
          <span className="text-green-500">Guard</span>
        </h1>
      </div>

      {/* Form */}
      <div className="z-10 relative flex justify-center mt-8 px-4 pb-16">
        <div className="bg-black/75 bg-opacity-90 rounded-xl p-8 shadow-lg w-full max-w-[350px] text-white">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <div className="flex items-start text-xs mb-4">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>
              I agree Terms and Conditions & Private Policy by Signing in
            </span>
          </div>
          <Link href="/dashboard">
            <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-blue-100 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
