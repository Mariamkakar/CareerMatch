import { Link } from "react-router-dom";

function JobCard({ job, icon }) {
  return (
    <div
      className="
      rounded-3xl
      px-8 
      py-6
      h-50
      backdrop-blur-xl
      border-2
      border-blue-500
      shadow-xl
      hover:scale-[1.02]
      transition
      translate-y-12
      translate-x-40
      "
    >
      <div className="flex justify-between">
        {/* LEFT SIDE */}

        <div className="flex gap-10 translate-y-6">
          {/* ICON */}

          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            to-blue-600
            flex
            items-center
            justify-center
            text-3xl
            text-white
            shadow-lg
            translate-y-10
            translate-x-3
            "
          >
            {icon}
          </div>

          <div>
            <h2
              className="
              text-2xl
              font-bold
              text-blue-800
              "
            >
              {job.title}
            </h2>

            <p
              className="
              text-blue-700
              font-semibold
              mt-1
               translate-y-2
              "
            >
              {job.company}
            </p>

            <p
              className="
              text-gray-600
              mt-2
               translate-y-2
               -translate-x-2
              "
            >
              📍 {job.location}
            </p>

            {/* SKILLS */}

            <div
              className="
              flex
              flex-wrap
              gap-2
              mt-5
              translate-y-5
              "
            >
              {job.requiredSkills?.map((skill) => (
                <span
                  key={skill}
                  className="
                  bg-blue-100/80
                  text-blue-700
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
          flex
          items-center
          gap-5
          -translate-y-3
          -translate-x-1
          "
        >
          {/* SCORE CIRCLE */}

          <div
            className="
            flex
            flex-col
            items-center
            "
          >
            <div
              className="
              w-18
              h-18
              rounded-full
              flex
              items-center
              justify-center
              translate-x-10
              translate-y-12
              "
              style={{
                background: `conic-gradient(
                  ${
                    job.score >= 93
                      ? "#22c55e"
                      : job.score >= 90
                        ? "#f97316"
                        : job.score >= 85
                          ? "#eab308"
                          : "#3b82f6"
                  }
                  ${job.score}%,
                  #e5e7eb ${job.score}%
                )`,
              }}
            >
              <div
                className="
                w-14
                h-14
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                font-bold
                text-gray-700
                "
              >
                {job.score}%
              </div>
            </div>

            {/* MATCH */}

            <p
              className="
              mt-2
              text-blue-700
              font-bold
              translate-x-10
              translate-y-16
              "
            >
              Match
            </p>
          </div>

          {/* RIGHT INFO */}

          <div
            className="
            flex
            flex-col
            items-center
            gap-3
            "
          >
            {/* FAVORITE */}

            <button
              className="
              text-red-500
              text-3xl
              hover:scale-110
              transition
              -translate-y-4

              "
            >
              ❤️
            </button>
          </div>
        </div>
      </div>

      {/* BUTTON */}

      <div
        className="
        mt-6
        pt-5
        flex
        justify-end
        border-t
        border-white/40
        translate-y-15
        "
      >
        <Link
          to={`/jobs/${job.id}`}
          className="
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-blue-700
          transition
          shadow-lg
          translate-y-1
          -translate-x-8
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
