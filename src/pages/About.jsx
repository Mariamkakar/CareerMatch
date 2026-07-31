import { FaRobot, FaBriefcase, FaUserCheck } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center px-8 py-20">
      {/* Main Card */}
      <div className="w-full max-w-7xl bg-white rounded-[40px] shadow-2xl px-16 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-800  translate-y-3">
            About CareerMatch
          </h1>

          <p className="text-blue-300 text-lg mt-5 max-w-3xl mx-auto leading-8  translate-x-3 translate-y-4">
            CareerMatch is an AI-powered personalized job matching platform
            designed to help job seekers find the best career opportunities
            based on their skills, experience, and interests.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-8 translate-x-3">
              Our Mission
            </h2>

            <p className="text-blue-300 leading-8 text-lg mb-8 translate-x-3">
              Our mission is to connect talented people with suitable jobs using
              Artificial Intelligence technology. CareerMatch analyzes user
              profiles and recommends jobs that match their abilities.
            </p>

            <p className="text-blue-300 leading-8 text-lg translate-x-3">
              We believe finding the perfect career should be simple,
              intelligent, and accessible to everyone. Our platform helps users
              discover opportunities with confidence.
            </p>
          </div>

          {/* Right */}
          <div>
            <img
              src="/6285076702715123148_120.jpg"
              alt="About CareerMatch"
              className="w-100px h-[400px] object-cover rounded-3xl shadow-xl translate-x-30"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-800 translat-y-40">
              Our Features
            </h2>

            <p className="text-blue-500 mt-4 text-lg">
              Everything you need to find your dream job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Matching */}
            <div className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-xl transition duration-300 translate-x-5">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaRobot className="text-4xl text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-blue-800 mb-4 translate-x-5">
                AI Matching
              </h3>

              <p className="text-blue-300 leading-7 translate-x-5">
                Our intelligent system analyzes your profile and recommends the
                best jobs that perfectly match your skills and experience.
              </p>
            </div>

            {/* Job Search */}
            <div className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <FaBriefcase className="text-4xl text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Job Search
              </h3>

              <p className="text-blue-300 leading-7">
                Browse thousands of available jobs and discover opportunities
                that fit your career goals and interests.
              </p>
            </div>

            {/* Profile Matching */}
            <div className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <FaUserCheck className="text-4xl text-purple-600" />
              </div>

              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Profile Matching
              </h3>

              <p className="text-blue-300 leading-7">
                Build your professional profile and receive personalized job
                recommendations based on your qualifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
