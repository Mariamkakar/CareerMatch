import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      px-10
      py-20
      "
      style={{
        backgroundImage: "url('/6285172171248178012_121.jpg')",
      }}
    >
      <div className="w-full max-w-7xl">
        {/* Titles Above Cards */}

        <div className="grid grid-cols-2 gap-10 mb-8">
          <h2
            className="
          text-center
          text-blue-800
          text-2xl
          font-semibold
          "
          >
            Contact Info Section
          </h2>

          <h2
            className="
          text-center
          text-blue-800
          text-2xl
          font-semibold
          "
          >
            Contact Form
          </h2>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-10">
          {/* Left Card */}

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            p-10
            "
          >
            <p className="text-blue-400 text-lg leading-8 mb-10">
              We're here to discuss your project and bring your ideas to life
              with premium design & development.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-2xl text-blue-300" />

                <span className="text-blue-400 text-lg">
                  info@careermatch.com
                </span>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-2xl text-blue-300" />

                <span className="text-blue-400 text-lg">
                  Kabul, Afghanistan
                </span>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-2xl text-blue-300" />

                <span className="text-blue-400 text-lg">+93 700 000 000</span>
              </div>
            </div>
          </div>

          {/* Right Card */}

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            p-10
            "
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                rounded-xl
                bg-white/20
                border
                border-white/20
                p-4
                text-white
                placeholder-blue-400
                outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                rounded-xl
                bg-white/20
                border
                border-white/20
                p-4
                text-white
                placeholder-blue-400
                outline-none
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                w-full
                rounded-xl
                bg-white/20
                border
                border-white/20
                p-4
                text-white
                placeholder-blue-400
                outline-none
                "
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="
                w-full
                rounded-xl
                bg-white/20
                border
                border-white/20
                p-4
                text-white
                placeholder-blue-400
                outline-none
                resize-none
                "
              ></textarea>

              <button
                className="
                w-full
                py-4
                rounded-full
                font-bold
                text-white
                text-lg
                bg-gradient-to-r
                from-blue-600
                to-blue-400
                hover:scale-105
                transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
