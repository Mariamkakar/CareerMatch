import { Link } from "react-router-dom";

function SimilarJobs({ jobs, currentJob }) {
  const similarJobs = jobs
    .filter((job) => job.id !== currentJob.id)
    .filter((job) =>
      job.requiredSkills.some((skill) =>
        currentJob.requiredSkills.includes(skill),
      ),
    )
    .slice(0, 3);

  return (
    <div className="mt-10">
      <h2
        className="
      text-2xl
      font-bold
      text-blue-700
      mb-6
      "
      >
        Similar Jobs
      </h2>

      <div
        className="
      grid
      md:grid-cols-3
      gap-6
      "
      >
        {similarJobs.map((job) => (
          <div
            key={job.id}
            className="
            bg-white/20
            backdrop-blur-xl
            border
            border-white/30
            rounded-3xl
            shadow-lg
            p-6
            "
          >
            <h3
              className="
            text-xl
            font-bold
            text-blue-700
            "
            >
              {job.title}
            </h3>

            <p className="text-gray-600 mt-2">{job.company}</p>

            <p className="text-gray-500">📍 {job.location}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              to={`/jobs/${job.id}`}
              className="
              block
              mt-5
              bg-blue-600
              text-white
              text-center
              py-2
              rounded-xl
              "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarJobs;
