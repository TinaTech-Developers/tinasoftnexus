import QuotationA4 from "../_components/QuotationA4";
import QuotationPDFButton from "../_components/QuotationPDFButton";

export default async function Page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quotations/${params.id}`,
  );

  const quote = await res.json();

  return (
    <div className="p-10 space-y-6">
      <QuotationPDFButton />

      <QuotationA4 quote={quote} />
    </div>
  );
}
