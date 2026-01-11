import { plans } from "../data/plans";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Choose Your Hosting Plan
      </h1>
      <p className="text-center text-gray-600 mb-12">
         Hosting platform for website & Marketing purposes
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
