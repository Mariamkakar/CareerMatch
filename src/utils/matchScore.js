export function calculateMatchScore(userSkills, jobSkills) {
  const matchedSkills = jobSkills.filter((skill) => userSkills.includes(skill));

  return Math.round((matchedSkills.length / jobSkills.length) * 100);
}
