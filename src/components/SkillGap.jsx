function SkillGap({ job, profile }) {
  const userSkills = profile?.skills || [];

  const missingSkills = job.requiredSkills.filter(
    (skill) => !userSkills.includes(skill),
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-blue-800">Skill Gap Analysis</h2>

      {missingSkills.length === 0 ? (
        <p className="mt-5 text-green-600 font-semibold">
          🎉 You have all required skills!
        </p>
      ) : (
        <div className="mt-5">
          <p className="text-red-600 font-bold">Missing Skills:</p>

          {missingSkills.map((skill) => (
            <p key={skill} className="text-blue-600 mt-2">
              ❌ {skill}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillGap;
