import { useEffect, useState } from "react";
import { getAIExplanation } from "../services/openrouter";

function AIExplanation({ job, profile }) {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateExplanation = async () => {
      if (!profile || !job) return;

      const result = await getAIExplanation(job, profile);

      setExplanation(result);
      setLoading(false);
    };

    generateExplanation();
  }, [job, profile]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800">AI Explanation</h2>

      {loading ? (
        <p className="mt-4 text-gray-500">🤖 AI is generating explanation...</p>
      ) : (
        <p className="mt-4 text-blue-600 leading-7">{explanation}</p>
      )}
    </div>
  );
}

export default AIExplanation;
