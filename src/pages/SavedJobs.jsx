import { Link } from "react-router-dom";

function SavedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Studio",
      location: "Remote",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignPro",
      location: "Kabul",
      skills: ["Figma", "UI Design"],
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "Remote",
      skills: ["Node.js", "Express"],
    },
  ];

  return (
    <div
      className="
      min-h-screen
      py-12
      px-10
      bg-cover
      bg-center
    "
      style={{
        backgroundImage: "url('/6264675848577290336_121.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}

        <h1
          className="
          text-4xl
          font-bold
          text-blue-800
          mb-2
          translate-x-50
          translate-y-40
          
        "
        >
          ❤️ Saved Jobs
        </h1>

        <p
          className="
          text-blue-400
          mb-10
          text-lg
          translate-x-55
          translate-y-45
          

        "
        >
          Your bookmarked job opportunities.
        </p>

        {/* Cards */}

        <div
          className="
          h-60
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          translate-y-50
          translate-x-50
          
        "
        >
          {jobs.map((job) => (
            <div
              key={job.id}
              className="
                bg-white
                rounded-3xl
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                p-6
                 translate-x-6
                translate-y-8
              "
            >
              {/* Header */}

              <div className="flex justify-between">
                <div>
                  <h2
                    className="
                    text-xl
                    font-bold
                    text-blue-800
                    translate-x-6
                    translate-y-3
                  "
                  >
                    {job.title}
                  </h2>

                  <p
                    className="
                    text-blue-400
                    mt-2
                    translate-x-6
                    translate-y-3

                  "
                  >
                    {job.company}
                  </p>

                  <p
                    className="
                    text-blue-400
                    mt-1
                    translate-x-6
                    translate-y-9
                  "
                  >
                    📍 {job.location}
                  </p>
                </div>

                <span
                  className="
                  text-2xl
                  text-blue-600
                  
                  
                "
                >
                  🔖
                </span>
              </div>

              {/* Skills */}

              <div
                className="
                flex
                gap-2
                flex-wrap
                mt-6
                
                
              "
              >
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-blue-100
                      text-blue-700
                      px-4
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      translate-x-6
                      translate-y-16
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}

              <Link
                to={`/jobs/${job.id}`}
                className="
                  block
                  mt-8
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  text-center
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  translate-y-24
                "
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedJobs;
