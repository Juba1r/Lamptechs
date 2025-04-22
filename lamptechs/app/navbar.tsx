export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 text-lg font-light">
      {/* Left - Logo */}
      <div className="text-[#002b38] font-semibold text-xl">Shop-First</div>

      {/* Center - Navigation Links */}
      <ul className="flex space-x-6">
        <li className=" text-[#002b38] font-light hover:bg-orange-500  ">
          <a href="#" className="text-[#002b38] hover:text-white ">
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[#002b38] hover:bg-orange-500 hover:text-white "
          >
            Brand
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[#002b38] hover:bg-orange-500 hover:text-white"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[#002b38] hover:bg-orange-500 hover:text-white"
          >
            Reviews
          </a>
        </li>
      </ul>

      {/* Right - Login & Signup */}
      <div className=" px-4 py-2 rounded-l-full flex items-center space-x-4 font-bold">
        <a href="#" className="text-orange-500">
          Log in
        </a>
        <a
          href="#"
          className="text-orange-500 border border-orange-500 px-4 py-1 rounded-full hover:bg-orange-500 hover:text-black transition"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
}
