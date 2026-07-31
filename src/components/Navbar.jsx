import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold text-white translate-x-8"
          >
            Career<span className="text-blue-400">Match</span>
          </NavLink>

          {/* Menu */}
          <div className="flex items-center gap-10 translate-x-50">
            <NavLink
              to="/"
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/profile"
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Profile
            </NavLink>

            <NavLink
              to="/jobs"
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Jobs
            </NavLink>

            <NavLink
              to="/saved-jobs"
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Saved Jobs
            </NavLink>

            <NavLink
              to="/about"
              className="text-white text-lg hover:text-blue-400 transition"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-white text-lg hover:text-blue-400 transition"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
