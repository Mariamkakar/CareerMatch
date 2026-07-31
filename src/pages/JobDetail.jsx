import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import SimilarJobs from "../components/SimilarJobs";
import AIExplanation from "../components/AIExplanation";
import SkillGap from "../components/SkillGap";

import jobs from "../data/jobs";
import { supabase } from "../services/supabase";
import { calculateMatchScore } from "../utils/matchScore";

function JobDetail() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .limit(1);

      if (error) {
        console.log("Profile Error:", error);
      } else {
        console.log("Profile:", data[0]);
        setProfile(data[0]);
      }
    };

    getProfile();
  }, []);

  const matchScore = profile
    ? calculateMatchScore(profile.skills, job.requiredSkills)
    : 0;

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Job Not Found</h1>
      </div>
    );
  }

  const handleSave = () => {
    const savedJob = {
      id: job.id,

      title: job.title,

      company: job.company,

      location: job.location,

      category: job.category,

      description: job.description,

      skills: job.requiredSkills,
    };

    localStorage.setItem("savedJob", JSON.stringify(savedJob));

    setSaved(true);

    alert("❤️ Job saved successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          to="/jobs"
          className="
          inline-flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-full
          font-semibold
          shadow-lg
          transition
          translate-x-7
          translate-y-6
          "
        >
          ← Back to Jobs
        </Link>

        <div>
          <h1
            className="
          text-5xl
          font-bold
          text-blue-800
          leading-tight
          mt-3
          translate-x-6
          translate-y-10
          "
          >
            {job.title}
          </h1>

          <h2
            className="
          text-2xl
          text-blue-600
          font-semibold
          mt-4
          translate-x-6
          translate-y-10
          "
          >
            {job.company}
          </h2>

          <p
            className="
          mt-8
          text-blue-600
          leading-8
          translate-x-6
          translate-y-10
          "
          >
            {job.description}
          </p>

          <div
            className="
          space-y-5
          mt-10
          translate-x-6
          translate-y-10
          "
          >
            {job.requiredSkills.slice(0, 3).map((skill) => (
              <div key={skill} className="flex items-center gap-4">
                <div
                  className="
              w-10
              h-10
              rounded-xl
              bg-blue-100
              flex
              items-center
              justify-center
              "
                >
                  <span className="text-blue-600 font-bold">✓</span>
                </div>

                <span className="text-lg text-blue-600">{skill}</span>
              </div>
            ))}
          </div>

          <div
            className="
          absolute
          top-6
          left-6
          z-20
          flex
          flex-col
          gap-4
          translate-x-160
          translate-y-35
          "
          >
            <Link
              to="/apply"
              className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          transition
          text-center
          w-48
          shadow-lg
          "
            >
              Apply Now
            </Link>

            <button
              onClick={handleSave}
              className="
          border-2
          border-blue-600
          bg-white
          text-blue-600
          hover:bg-blue-600
          hover:text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          transition
          w-48
          shadow-lg
          "
            >
              {saved ? "❤️ Saved" : "🤍 Save Job"}
            </button>
          </div>
          <div className="relative">
            <img
              src="/6262533007788937579_121.jpg"
              alt="Job"
              className="
              w-[700px]
              h-[550px]
              object-cover
              rounded-[55px]
              shadow-6xl
              translate-x-230
              -translate-y-50
              "
            />

            <div
              className="
              absolute
              top-8
              right-8
              w-72
              rounded-3xl
              bg-white/20
              backdrop-blur-xl
              border
              border-white/30
              p-6
              shadow-xl
              translate-x-86
              -translate-y-40
              "
            >
              <p
                className="
              uppercase
              text-xs
              tracking-widest
              text-white
              translate-x-7
              translate-y-4
              "
              >
                MATCH SCORE
              </p>

              <h2
                className="
              text-3xl
              font-bold
              text-white
              mt-4
              translate-x-50
              "
              >
                {matchScore}%
              </h2>

              <p
                className="
              text-white
              mt-2
              translate-x-7
              -translate-y-3
              "
              >
                Strong Match
              </p>
            </div>

            <div
              className="
              absolute
              bottom-8
              left-8
              w-90
              rounded-3xl
              bg-white/20
              backdrop-blur-xl
              border
              border-white/30
              p-6
              shadow-xl
              translate-x-230
              -translate-y-60
              "
            >
              <AIExplanation job={job} profile={profile} />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="
              text-3xl
              font-bold
              text-blue-800
              mb-6
              translate-x-6
              -translate-y-120
              "
              >
                Job Description
              </h2>

              <p
                className="
              text-blue-600
              leading-8
              translate-x-6
              -translate-y-120
              "
              >
                {job.description}
              </p>

              <h2
                className="
              text-3xl
              font-bold
              text-blue-800
              mt-14
              mb-6
              translate-x-6
              -translate-y-120
              "
              >
                Requirements
              </h2>

              <div
                className="
              space-y-5
              translate-x-6
              -translate-y-120
              "
              >
                {job.requiredSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-4">
                    <div
                      className="
                    w-10
                    h-10
                    rounded-full
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    "
                    >
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>

                    <span className="text-blue-600 text-lg">
                      Strong knowledge of {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              w-[400px]
              h-[220px]
              -translate-x-160
              translate-y-10
              "
              >
                <h2
                  className="
                text-2xl
                font-bold
                text-blue-800
                mb-6
                "
                >
                  Job Information
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Company</span>

                    <span className="font-semibold">{job.company}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>

                    <span className="font-semibold">{job.location}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>

                    <span className="font-semibold">{job.category}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Match Score</span>

                    <span className="font-bold text-green-600">
                      {matchScore}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2
            className="
          text-2xl
          font-bold
          text-blue-800
          mb-8
          translate-x-6
          -translate-y-120
          "
          >
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {job.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="
            px-6
            py-3
            rounded-full
            bg-blue-100
            text-blue-800
            font-semibold
            hover:bg-blue-800
            hover:text-white
            transition
            translate-x-6
            -translate-y-120
            "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <section
          className="
        mt-20
        translate-x-6
        -translate-y-110
        "
        >
          <SkillGap job={job} profile={profile} />
        </section>

        <section
          className="
        mt-20
        translate-x-6
        -translate-y-110
        "
        >
          <SimilarJobs jobs={jobs} currentJob={job} />
        </section>
      </div>
    </div>
  );
}

export default JobDetail;
