import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#022c3b] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Centered Logo */}
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-orange-500">Shop-First</h1>
        </div>

        {/* Right Column: Nav + Socials, aligned to left of this column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Service</a>
            <a href="#">Client</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          {/* Social Section */}
          <div className="text-sm font-medium flex gap-5">
            <p className=" text-lg">Flow</p>
            <div className="flex gap-4 text-[#022c3b]">
              <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                <FaFacebookF />
              </div>
              <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                <FaInstagram />
              </div>
              <div className="bg-white p-2 rounded-full hover:scale-110 transition">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
