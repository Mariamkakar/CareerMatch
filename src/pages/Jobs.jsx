import { useState } from "react";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Jobs() {
  const icons = ["💻", "🤖", "🌐"];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [category, setCategory] = useState("All Categories");

  const [selectedSkills, setSelectedSkills] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Skills checkbox
  const handleSkillChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((item) => item !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Apply Filter
  const applyFilters = () => {
    const result = jobs.filter((job) => {
      const searchMatch = job.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const locationMatch =
        location === "All Locations" || job.location === location;

      const categoryMatch =
        category === "All Categories" || job.category === category;

      const skillMatch =
        selectedSkills.length === 0 ||
        selectedSkills.every((skill) => job.requiredSkills.includes(skill));

      return searchMatch && locationMatch && categoryMatch && skillMatch;
    });

    setFilteredJobs(result);
  };

  return (
    <div
      className="
      h-300
      bg-cover
      bg-center
      bg-no-repeat
      py-12
      "
      style={{
        backgroundImage: "url('/6262533007788937584_121.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-[300px_1fr] gap-8">
          {/* SIDEBAR */}

          <div
            className="
       rounded-3xl
        p-6
        h-100
        w-90
        bg-white/30
        backdrop-blur-xl
        border
        border-white/40
        shadow-2xl
        gap-8
        translate-y-40
       translate-x-16
       "
          >
            <h2
              className="
            text-2xl
            font-bold
            mb-8
            translate-y-3
            translate-x-4
            "
            >
              Filters
            </h2>

            {/* SEARCH */}

            <label className="font-semibold">Search Jobs</label>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="
              w-full
              mt-2
              border
              rounded-xl
              p-3
              translate-y-3
              "
            />

            {/* LOCATION */}

            <label
              className="
            font-semibold
            block
            mt-6
            translate-y-3
            "
            >
              Location
            </label>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="
              w-full
              mt-2
              border
              rounded-xl
              p-3
              translate-y-3
              "
            >
              <option value="All Locations">All Locations</option>

              <option value="Remote">Remote</option>

              <option value="USA">USA</option>

              <option value="Canada">Canada</option>
            </select>

            {/* CATEGORY */}

            <label
              className="
            font-semibold
            block
            mt-6
            translate-y-3
            "
            >
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
              w-full
              mt-2
              border
              rounded-xl
              p-3
              translate-y-3
              "
            >
              <option value="All Categories">All Categories</option>

              <option value="Frontend">Frontend</option>

              <option value="AI">AI</option>

              <option value="Full Stack">Full Stack</option>

              <option value="UI/UX">UI/UX</option>
            </select>

            {/* SKILLS */}

            <h3
              className="
            font-bold
            mt-8
            mb-4
            translate-y-5
            "
            >
              Skills
            </h3>

            <div className="space-y-3">
              {["React", "JavaScript", "Node.js", "Python", "UI Design"].map(
                (skill) => (
                  <label
                    key={skill}
                    className="
                flex
                gap-3
                items-center
                translate-y-6
                "
                  >
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillChange(skill)}
                    />

                    {skill}
                  </label>
                ),
              )}
            </div>

            {/* BUTTON */}

            <button
              onClick={applyFilters}
              className="
              w-full
              mt-8
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
              translate-y-10
              "
            >
              Apply Filters
            </button>
          </div>

          {/* JOB LIST */}

          <div>
            <div
              className="
            flex
            justify-between
            items-center
            mb-8
            "
            >
              <div>
                <h1
                  className="
                text-4xl
                font-bold
                text-blue-800
                translate-y-10
                translate-x-40
                "
                >
                  Jobs Listings
                </h1>

                <p
                  className="
                text-blue-500
                mt-2
                translate-y-10
                translate-x-40
                "
                >
                  Find jobs that match your skills
                </p>
              </div>

              <span
                className="text-blue-500 translate-y-10
                translate-x-40 "
              >
                {filteredJobs.length} Jobs Found
              </span>
            </div>

            <div className="flex flex-col gap-9">
              {filteredJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  icon={icons[index % icons.length]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
