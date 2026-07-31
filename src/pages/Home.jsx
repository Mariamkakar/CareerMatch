import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-[900px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/6285172171248178012_121.jpg')",
      }}
    >
      {/* ================= HERO SECTION ================= */}

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* LEFT */}

          <div className="translate-x-10 font-bold translate-y-1">
            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold"></span>

            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mt-8">
              Find Jobs That
              <br />
              <span className="text-blue-600">Match Your Future</span>
            </h1>

            <p className="text-gray-600 text-xl leading-9 mt-8 max-w-xl">
              Al-powered matching system that connects your skills, experience
              and interests with the perfect job opportunities.
            </p>

            <div className="flex gap-5 relative top-8">
              <Link
                to="/profile"
                className="bg-blue-600 hover:bg-blue-700 text-white w-50 h-8 rounded-xl font-semibold text-lg flex items-center justify-center shadow-lg"
              >
                Create Profile
              </Link>

              <Link
                to="/jobs"
                className="bg-white border border-blue-600 text-blue-600 w-50 h-8 rounded-xl font-semibold text-lg flex items-center justify-center"
              >
                Browse Jobs
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative flex justify-center">
            <img
              src="6251487185127281090_120.jpg"
              alt="career"
              className="rounded-3xl shadow-xl w-full max-w-xl translate-x-10 translate-y-20"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6 translate-y-26 translate-x-10">
          {/* Card 1 */}

          <div className="bg-white rounded-3xl p-8 shadow-lg h-[105px]">
            <h2 className="text-xl font-bold mb-6 text-blue-500 translate-x-20 translate-y-2">
              Smart Matching
            </h2>

            <div className="flex items-start gap-4 translate-x-2">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                🤖
              </div>

              <p className="text-blue-500 leading-7 mt-2 translate-y-2">
                AI analyzes your profile and finds the best job matches.
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl p-8 shadow-lg h-[105px]">
            <h2 className="text-xl font-bold mb-6 text-blue-500 translate-x-20 translate-y-2">
              AI Explanations
            </h2>

            <div className="flex items-start gap-4 translate-x-2">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                ⚡
              </div>

              <p className="text-blue-500 leading-7 mt-2 translate-y-2">
                Understand why each job matches your skills.
              </p>
            </div>
          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl p-8 shadow-lg h-[105px]">
            <h2 className="text-xl font-bold mb-6 text-blue-500 translate-x-20 translate-y-2">
              Discover More
            </h2>

            <div className="flex items-start gap-4 translate-x-2">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                🚀
              </div>

              <p className="text-blue-500 leading-7 mt-2 translate-y-2">
                Explore new career opportunities faster.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= JOBS ================= */}

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="flex justify-between mb-6 text-blue-500 translate-y-27 translate-x-13">
          <div>
            <h2 className="text-3xl font-bold">Top Recommended Jobs</h2>

            <p className="text-gray-800 mt-2">
              Based on your profile and AI matching
            </p>
          </div>

          <Link
            to="/jobs"
            className="text-blue-600 font-semibold translate-y-6 "
          >
            View All Jobs
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-blue-500 mt-80 translate-y-30 translate-x-10">
          {[
            {
              title: "Frontend Developer",
              company: "Google",
              match: "94%",
              color: "border-green-500 text-green-500",
              skills: ["React", "JavaScript", "CSS"],
            },

            {
              title: "AI Engineer",
              company: "OpenAI",
              match: "87%",
              color: "border-yellow-300 text-yellow-400",
              skills: ["Python", "Machine Learning", "TensorFlow"],
            },

            {
              title: "Full Stack Developer",
              company: "Microsoft",
              match: "82%",
              color: "border-yellow-500 text-yellow-500",
              skills: ["React", "Node.js", "Database"],
            },

            {
              title: "UI/UX Designer",
              company: "Adob",
              match: "90%",
              color: "border-yellow-800 text-yellow-800",
              skills: ["React", "Node.js", "Database"],
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg h-[110px] p-5"
            >
              <div className="flex items-center gap-5 translate-x-2 translate-y-2">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold"
                  style={{
                    background: `conic-gradient(
      ${
        index === 0
          ? "#22c55e" // کارت اول سبز
          : index === 1
            ? "#eab308" // کارت دوم زرد
            : index === 2
              ? "#3b82f6" // کارت سوم آبی
              : "#f97316" // کارت چهارم نارنجی
      }

      ${job.match},

      #e5e7eb ${job.match}

    )`,
                  }}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    {job.match}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl">{job.title}</h3>

                  <p className="text-blue-500">{job.company}</p>

                  <p className="text-blue-400">📍 Remote</p>
                </div>
              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-2 mt-6 translate-x-15 translate-y-2">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
