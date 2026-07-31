const API_URL = "https://openrouter.ai/api/v1/chat/completions";

console.log("ENV TEST:", import.meta.env);
console.log("KEY TEST:", import.meta.env.VITE_OPENROUTER_API_KEY);
export async function getAIExplanation(job, profile) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an AI career advisor. Explain why a user matches a job in 2-3 short sentences.",
          },
          {
            role: "user",
            content: `
Job Title: ${job.title}

Company: ${job.company}

Required Skills:
${job.requiredSkills.join(", ")}

User Skills:
${profile.skills.join(", ")}

Experience:
${profile.experience}

Interest:
${profile.interest}
`,
          },
        ],
      }),
    });

    const data = await response.json();

    return (
      data?.choices?.[0]?.message?.content || "No AI explanation available."
    );
  } catch (error) {
    console.log(error);
    return "AI service unavailable.";
  }
}
