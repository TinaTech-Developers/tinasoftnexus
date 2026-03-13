"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProceedToCheckoutButton() {
  const { status } = useSession();
  const router = useRouter();

  const handleCheckout = () => {
    if (status === "unauthenticated") {
      signIn(undefined, {
        callbackUrl: "/checkout",
        redirect: true,
      });
      return;
    }

    router.push("/checkout");
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full mt-6 bg-[#00B3C6] text-white py-3 rounded-lg font-semibold hover:bg-[#0099aa] transition"
    >
      Proceed to Checkout
    </button>
  );
}
