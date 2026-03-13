"use client";

import html2pdf from "html2pdf.js";

export default function QuotationPDFButton() {
  const generatePDF = () => {
    const element = document.getElementById("quotation");

    html2pdf()
      .set({
        margin: 0,
        filename: "quotation.pdf",
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(element)
      .save();
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Download PDF
    </button>
  );
}
