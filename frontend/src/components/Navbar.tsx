import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/discover" className="text-xl font-bold text-blue-600">
          ConnectPro
        </Link>

        <div className="flex gap-6">
          <Link to="/discover" className="hover:text-blue-600">
            Discover
          </Link>
          <Link to="/message" className="hover:text-blue-600">
            Messages
          </Link>
          <Link to="/profile" className="hover:text-blue-600">
            Profile
          </Link>
        </div>

      </div>
    </nav>
  );
}
