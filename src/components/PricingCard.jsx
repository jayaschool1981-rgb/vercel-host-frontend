import { useNavigate } from "react-router-dom";

export default function PricingCard({ plan }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow transition hover:shadow-xl hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

      <p className="text-3xl font-extrabold mb-4">{plan.price}</p>

      <ul className="space-y-2 text-sm mb-6">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>✅</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          navigate("/payment", {
            state: {
              plan: plan.name,
              price: plan.price,
            },
          })
        }
        className="w-full rounded-xl bg-black text-white py-2 font-medium
                   hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
      >
        Proceed to Payment
      </button>
    </div>
  );
}
