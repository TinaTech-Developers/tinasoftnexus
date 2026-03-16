"use client";

import Image from "next/image";

export default function QuotationA4({ quote }) {
  const subtotal = quote.items.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <div
      id="quotation"
      className="bg-white p-10 text-sm"
      style={{
        width: "210mm",
        minHeight: "297mm",
      }}
    >
      {/* HEADER */}

      <div className="flex justify-between mb-10">
        <div>
          <Image
            src="/logo.png"
            alt="TinaSoft Nexus Logo"
            width={120}
            height={40}
            className="mb-4"
          />
          {/* <h1 className="text-2xl font-bold text-blue-700">TinaSoft Nexus</h1> */}

          <p>+263 712 471 209</p>
          <p>+263 773 059 753</p>
          <p>sales@tinasoftnexus.co.zw</p>
          <p>No. 17 Tredgold Dr, Belvedere</p>
        </div>

        <div className="text-right">
          <h2 className="text-xl font-semibold">Quotation</h2>

          <p>Quote No: {quote.quoteNumber}</p>
          <p>{quote.date}</p>
        </div>
      </div>

      {/* CUSTOMER */}

      <div className="mb-10">
        <h3 className="font-semibold mb-2">Quote To</h3>

        <p>{quote.customerName}</p>
        <p>Phone: {quote.customerPhone}</p>
      </div>

      {/* TABLE */}

      <table className="w-full border text-sm mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Service Description</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {quote.items.map((item, i) => (
            <tr key={i}>
              <td className="border p-2">{item.description}</td>

              <td className="border p-2 text-center">{item.price}</td>

              <td className="border p-2 text-center">{item.qty}</td>

              <td className="border p-2 text-right">{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TOTAL */}

      <div className="flex justify-end mb-10">
        <div className="w-64">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{subtotal}</span>
          </div>
        </div>
      </div>

      {/* TERMS */}

      <div className="mb-10">
        <h4 className="font-semibold">Terms & Conditions</h4>

        <p>A 40% deposit is required to kick-start the project.</p>

        <p>This quotation is valid for 30 days from the date of issue.</p>
      </div>

      {/* FOOTER */}

      <div className="flex justify-between mt-20">
        <div>
          <p>Signature</p>
        </div>

        <div className="text-right">
          <p>Thanks for your Business</p>
          <p className="font-semibold">TinaSoft Nexus</p>
        </div>
      </div>
    </div>
  );
}
