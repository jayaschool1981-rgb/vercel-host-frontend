import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fakeDeploy } from "../utils/fakeDeploy";

export default function Deploy() {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const steps = fakeDeploy();
    let index = 0;

    const interval = setInterval(() => {
      setLogs((prev) => [...prev, steps[index]]);
      index++;

      if (index === steps.length) {
        clearInterval(interval);

        setTimeout(() => {
          const siteId = Math.random().toString(36).substring(2, 8);
          navigate("/success", {
            state: {
              url: `https://vercel-host-demo.vercel.app/site/${siteId}`,
              plan: location.state?.plan || "Basic Host",
            },
          });
        }, 1000);
      }
    }, 900);

    return () => clearInterval(interval);
  }, [navigate, location.state]);

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-black border border-green-500 rounded-xl p-6 font-mono text-sm">
        <h2 className="text-green-300 mb-4">
          Deploying your site…
        </h2>

        <div className="space-y-2">
          {logs.map((log, i) => (
            <p key={i}>› {log}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
