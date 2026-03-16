"use client";
import Link from "next/link";
import InvoiceA4 from "../../quotations/_components/invoice/InvoiceA4";

export default async function Page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/invoices/${params.id}`,
    { cache: "no-store" },
  );

  const invoice = await res.json();

  return (
    <div className="px-10">
      <div className="flex justify-end items-end pr-7">
        <Link
          href="/dashboard/invoices"
          className=" bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded my-4 "
        >
          {"<<"} Back
        </Link>
      </div>
      <InvoiceA4 invoice={invoice} />
    </div>
  );
}
