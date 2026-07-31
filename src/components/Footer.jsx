function Footer() {
  return (
    <footer className="bg-blue-300 text-white mt-10">
      <div className="max-w-7xl mx-auto px-10 py-10 translate-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 translate-x-12">
          {/* Logo Section */}

          <div>
            <h2 className="text-3xl font-bold">
              Career
              <span className="text-blue-700">Match</span>
            </h2>

            <p className="mt-4 text-white leading-7">
              AI-powered job matching platform that helps you find the best
              career opportunities.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <div className="space-y-2">
              <p className="hover:text-blue-700 cursor-pointer">Home</p>

              <p className="hover:text-blue-700 cursor-pointer">Profile</p>

              <p className="hover:text-blue-700 cursor-pointer">Jobs</p>

              <p className="hover:text-blue-700 cursor-pointer">Saved Jobs</p>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>

            <p className="flex items-center gap-2">
              📧
              <span>Email: info@careermatch.com</span>
            </p>

            <p className="flex items-center gap-2 mt-3">
              📞
              <span>Phone Number: +93 700 000 000</span>
            </p>

            <p className="flex items-center gap-2 mt-3">
              📍
              <span>Location: Afghanistan</span>
            </p>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          border-t
          border-white/40
          mt-10
          pt-5
          text-center
        "
        >
          <p>©️ 2026 CareerMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
