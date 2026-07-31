import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../services/supabase";

function ApplyJob() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("applications").insert([
      {
        applicant_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        resume: formData.resume,
        cover_letter: formData.coverLetter,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Error submitting application");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-10 px-5"
      style={{
        backgroundImage: "url('/6285172171248177989_120.jpg')",
      }}
    >
      <div
        className="
        w-full
        max-w-3xl
        backdrop-blur-xl
        bg-white/20
        border
        border-white/30
        rounded-3xl
        shadow-2xl
        p-10
        "
      >
        <Link
          to="/jobs"
          className="
          inline-block
          mb-8
          bg-white/30
          hover:bg-white/40
          px-5
          py-2
          rounded-xl
          text-blue-500
          font-semibold
          transition
          "
        >
          ← Back to Jobs
        </Link>

        <h1 className="text-4xl font-bold text-blue-800 mb-10">
          Apply for this Job
        </h1>

        {submitted ? (
          <div className="bg-green-500 text-white p-5 rounded-xl text-center text-xl font-bold">
            ✅ Application Submitted Successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Full Name */}

            <div className="mb-8">
              <label className="block text-blue-600 font-semibold mb-3">
                Full Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/70
                border
                border-white
                text-black
                placeholder-blue-400
                outline-none
                "
              />
            </div>

            {/* Email */}

            <div className="mb-8">
              <label className="block text-blue-600 font-semibold mb-3">
                Email
              </label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/70
                border
                border-white
                text-black
                placeholder-blue-400
                outline-none
                "
              />
            </div>

            {/* Phone */}

            <div className="mb-8">
              <label className="block text-blue-600 font-semibold mb-3">
                Phone Number
              </label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Enter your phone number"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/70
                border
                border-white
                text-black
                placeholder-blue-400
                outline-none
                "
              />
            </div>

            {/* Resume */}

            <div className="mb-8">
              <label className="block text-blue-600 font-semibold mb-3">
                Upload Resume
              </label>

              <input
                name="resume"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    resume: e.target.files[0]?.name,
                  })
                }
                type="file"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/70
                border
                border-white
                text-blue-400
                "
              />
            </div>

            {/* Cover Letter */}

            <div className="mb-10">
              <label className="block text-blue-600 font-semibold mb-3">
                Cover Letter
              </label>

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="6"
                placeholder="Write your cover letter..."
                className="
                w-full
                p-4
                rounded-xl
                bg-white/70
                border
                border-white
                text-black
                placeholder-blue-400
                outline-none
                resize-none
                "
              ></textarea>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="
              w-full
              bg-blue-400
              hover:bg-blue-300
              text-white
              py-4
              rounded-xl
              text-lg
              font-bold
              transition
              shadow-lg
              "
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ApplyJob;
