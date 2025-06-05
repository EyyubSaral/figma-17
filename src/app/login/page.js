import Link from "next/link";

export default function Login() {
  return (
    <div className="relative bg-cover bg-center min-h-screen bg-[url('/image1.png')]">
      {/* Sol üstte logo ve başlık */}
      <div className="absolute top-4 left-6 flex items-center space-x-2">
        <img src="/icon1.png" alt="health icon" />
        <h1 className="text-2xl font-bold text-white">
          <span className="text-blue-500">Eco</span>
          <span className="text-green-500">Guard</span>
        </h1>
      </div>

      {/* Giriş kutusu */}
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-black/75 p-8 rounded-xl shadow-lg max-w-sm w-full">
          <h2 className="text-white text-2xl font-bold mb-6">Sign In</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center mb-4 text-xs text-white">
            <input type="checkbox" className="mr-2" />
            <span>
              I agree <span className="underline">Terms and Conditions</span> &{" "}
              <span className="underline">Private Policy</span> by Signing in
            </span>
          </div>
          <Link href="/dashboard">
            <button className="w-full bg-white text-blue-700 font-bold py-2 rounded mb-3 hover:bg-gray-200">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-full border border-white text-white py-2 rounded hover:bg-white hover:text-black transition duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
