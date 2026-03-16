import Image from "next/image";

export default function InvoiceA4({ invoice }) {
  if (!invoice) return null;

  return (
    <div
      id="invoice-a4"
      className="bg-white p-10 mx-auto shadow"
      style={{ width: "210mm", minHeight: "297mm" }}
    >
      {/* HEADER */}
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-3xl text-red-500 font-bold">INVOICE</h1>
          <p className="text-gray-500">Invoice #: {invoice.invoiceNumber}</p>
          <p className="text-gray-500">
            Date: {new Date(invoice.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="text-right">
          <Image
            src="/logo.png"
            alt="TinaSoft Nexus Logo"
            width={120}
            height={40}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">sales@tinasoftnexus.co.zw</p>
          <p className="text-sm text-gray-600">+263 71 247 1209</p>
        </div>
      </div>

      {/* CUSTOMER */}
      <div className="mb-10">
        <h3 className="font-semibold mb-2">Bill To:</h3>
        <p>{invoice.customerName}</p>
        <p className="text-gray-600">{invoice.customerPhone}</p>
      </div>

      {/* ITEMS */}
      <table className="w-full border text-sm mb-10">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3 text-left">Description</th>
            <th className="border p-3 text-left">Qty</th>
            <th className="border p-3 text-left">Price</th>
            <th className="border p-3 text-left">Total</th>
          </tr>
        </thead>

        <tbody>
          {invoice.items?.map((item, i) => (
            <tr key={i}>
              <td className="border p-3">{item.description}</td>
              <td className="border p-3">{item.qty}</td>
              <td className="border p-3">${item.price}</td>
              <td className="border p-3">${item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TOTALS */}
      <div className="flex justify-end">
        <div className="w-72 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${invoice.subtotal}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>${invoice.total}</span>
          </div>

          <div className="flex justify-between text-sm mt-2">
            <span>Status</span>
            <span className="font-medium">{invoice.status}</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-sm text-gray-500">
        <p>Thank you for doing business with us.</p>
      </div>
    </div>
  );
}
