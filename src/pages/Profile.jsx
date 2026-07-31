import { useState } from "react";
import { supabase } from "../services/supabase";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    experience: "1-2 Years",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    interests: ["Frontend Development", "UI Design", "Web Applications"],
  });

  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill],
      });

      setNewSkill("");
    }
  };

  const addInterest = () => {
    if (newInterest.trim() !== "") {
      setProfile({
        ...profile,
        interests: [...profile.interests, newInterest],
      });

      setNewInterest("");
    }
  };

  // Save to Supabase

  const saveProfile = async () => {
    const { error } = await supabase.from("profiles").insert([
      {
        name: profile.name,
        experience: profile.experience,
        skills: profile.skills,
        interests: profile.interests,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Error saving profile");
      return;
    }

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-cover bg-gray-100 relative pt-80">
      {saved && (
        <div className="fixed top-1/2 right-10 -translate-y-1/2 w-96 bg-blue-400 rounded-3xl shadow-2xl p-8 text-center text-white z-50 flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-20">
            <span className="text-4xl text-blue-500">✓</span>
          </div>

          <h3 className="text-2xl font-bold">Profile Saved!</h3>

          <p className="mt-2">Your profile is saved successfully.</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-10 pt-40 pb-20 translate-y-16 translate-x-10">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-blue-800">Your Profile</h1>

          <p className="text-blue-300 mt-3 mb-10">
            Add your skills, experience and interests to get better job
            recommendations.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex justify-center translate-y-10">
              <img
                src="6258255018498658545_120.jpg"
                alt="profile"
                className="w-40 h-40 rounded-2xl object-cover shadow-md"
              />
            </div>

            <div className="md:col-span-3 translate-y-10">
              <label className="font-bold block mb-2 translate-y-2">
                Basic Information
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Bibi Mariam Abdul Shukoor"
                className="w-full border rounded-xl p-4 translate-y-3 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <label className="font-bold block mb-2 translate-y-5">
                Experience Level
              </label>

              <select
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 translate-y-6 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>1-2 Years</option>

                <option>2-4 Years</option>

                <option>5+ Years</option>
              </select>
            </div>
          </div>

          <div className="mt-10 translate-y-15">
            <h2 className="text-2xl font-bold mb-5">Skills</h2>

            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-10 translate-y-4">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="New Skill"
                className="border rounded-xl p-3"
              />

              <button
                onClick={addSkill}
                className="border border-blue-500 text-blue-600 px-5 py-3 rounded-xl active:bg-blue-100 transition"
              >
                + Add Skill
              </button>
            </div>
          </div>

          <div className="mt-10 translate-y-19">
            <h2 className="text-2xl font-bold mb-5">Interests</h2>

            <div className="flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-20 translate-y-4">
              <input
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                placeholder="New Interest"
                className="border rounded-xl p-3"
              />

              <button
                onClick={addInterest}
                className="border border-blue-500 text-blue-600 px-5 py-3 rounded-xl active:bg-blue-100 transition"
              >
                + Add Interest
              </button>
            </div>
          </div>

          <div className="mt-10 translate-y-26">
            <button
              onClick={saveProfile}
              className="w-full mt-12 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
