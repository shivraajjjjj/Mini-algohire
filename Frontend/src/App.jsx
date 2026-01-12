import axios from "axios";
import { useState } from "react";
import Results from "./Result.jsx";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [page, setPage] = useState("landing");

  async function analyzeRepo() {
    if (!repoUrl.trim()) return;
    setLoading(true);
    setError(null);
    setData(null);
    const API_BASE = import.meta.env.VITE_API_BASE_URL;
    try {
      const res = await axios.post(`${API_BASE}/analyze/your-roles`, {
        repo: repoUrl.trim(),
      });

      const json = res.data;

      if (!json.supported) {
        setError(json.message || "Repository not supported");
        return;
      }

      // Prefer projectSignals if backend wraps it
      const payload = json.projectSignals ? json.projectSignals : json;
      setData(payload);
      setPage("result");
    } catch (err) {
      console.error("Error:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to analyze repository"
      );
    } finally {
      setLoading(false);
    }
  }

  function resetFlow() {
    setPage("landing");
    setError(null);
    setData(null);
  }

  if (page === "result" && data) {
    return (
      <Results
        data={data}
        onBack={resetFlow}
        onAnalyzeAgain={() => {
          resetFlow();
          analyzeRepo();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-930 to-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm border border-blue-500/30">
            <span>🔍</span>
            <span>RepoSense</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Discover what roles a repo aligns with</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Paste any public GitHub repo URL. We inspect manifests, languages, and signals to infer likely roles and stack details.
          </p>
        </div>

        <div className="w-full max-w-3xl bg-gray-900/70 border border-gray-800 rounded-2xl shadow-2xl p-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="flex-1 px-4 py-3 rounded-xl bg-gray-850 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
              placeholder="https://github.com/user/repo"
              value={repoUrl}
              onChange={e => setRepoUrl(e.target.value)}
            />
            <button
              onClick={analyzeRepo}
              disabled={loading}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 font-semibold shadow-lg shadow-blue-500/20 transition"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-900/30 border border-red-700 text-left text-sm">
              ❌ {error}
            </div>
          )}

          <div className="text-xs text-gray-500 text-left">
            We only read public metadata and manifests. Make sure the URL is public and accessible.
          </div>
        </div>
      </div>
    </div>
  );
}
