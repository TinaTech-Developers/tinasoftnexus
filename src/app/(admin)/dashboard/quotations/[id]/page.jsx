"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import QuotationA4 from "../_components/QuotationA4";
import QuotationPDFButton from "../_components/QuotationPDFButton";

export default function Page({ params }) {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(`/api/quotations/${params.id}`)
      .then((res) => res.json())
      .then(setQuote);
  }, [params.id]);

  const convertToInvoice = async () => {
    const res = await fetch(`/api/invoices/from-quotation/${params.id}`, {
      method: "POST",
    });

    const invoice = await res.json();

    window.location.href = `/dashboard/invoices/${invoice._id}`;
  };

  if (!quote) return <div className="p-10">Loading...</div>;

  return (
    <div className="px-10 space-y-6">
      <div className="flex justify-between items-center pr-14">
        <QuotationPDFButton />

        <button
          onClick={convertToInvoice}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Convert to Invoice
        </button>

        <Link
          href="/dashboard/quotations"
          className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
        >
          {"<<"} Back
        </Link>
      </div>

      <QuotationA4 quote={quote} />
    </div>
  );
}
