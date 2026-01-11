import { useLocation } from "react-router-dom";

const PAYMENT_LINKS = {
  "₹6000": "https://rzp.io/rzp/BgwBLU8",
  "₹5500": "https://rzp.io/rzp/XRlcasfy",
  "₹4500": "https://rzp.io/rzp/YZdjRoL",
  "₹3500": "https://rzp.io/rzp/Ad3GhnPV",
};

export default function Payment() {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-20">No plan selected.</p>;
  }

  const { plan, price } = state;
  const paymentUrl = PAYMENT_LINKS[price];

  const handlePayment = () => {
    if (!paymentUrl) {
      alert("Invalid payment option");
      return;
    }

    // Redirect to Razorpay hosted payment page
    window.location.href = paymentUrl;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          💳 Secure Payment
        </h1>

        <div className="space-y-2 mb-6 text-sm">
          <p>
            <strong>Hosting Plan:</strong> {plan}
          </p>
          <p>
            <strong>Amount Payable:</strong> {price}
          </p>
        </div>

        <div className="border rounded-xl p-4 mb-6 text-sm text-gray-600">
          🔒 You will be redirected to Razorpay’s secure payment page.
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Pay Now
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Payments are processed securely via Razorpay.
        </p>
      </div>
    </div>
  );
}
