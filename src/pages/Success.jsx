import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-20">No deployment found.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          🎉 Deployment Successful
        </h1>

        <p className="text-gray-600 mb-2">
          Hosting Plan: <strong>{state.plan}</strong>
        </p>

        <p className="text-gray-600 mb-6">
          Your site is now live at:
        </p>

        <div className="bg-gray-100 p-3 rounded mb-6 text-sm break-all">
          {state.url}
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-2 bg-black text-white rounded-xl"
          >
            Visit Site
          </a>

          <Link
            to="/pricing"
            className="px-6 py-2 border rounded-xl"
          >
            Deploy Another
          </Link>
        </div>
      </div>
    </div>
  );
}
