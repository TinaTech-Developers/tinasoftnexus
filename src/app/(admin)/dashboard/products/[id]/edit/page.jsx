"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ImageUploadButton } from "../../_components/ImageUploadButton";
import { ArrowLeft } from "lucide-react"; // optional icon

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  // Form state
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState("");
  const [stock, setStock] = useState(0);
  const [warranty, setWarranty] = useState("No warranty");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const [isFeatured, setIsFeatured] = useState(false);

  // Fetch product data
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      setProduct(data);

      // Fill form
      setName(data.name || "");
      setSlug(data.slug || "");
      setBrand(data.brand || "");
      setCategory(data.category || "");
      setPrice(data.price || 0);
      setSalePrice(data.salePrice || "");
      setStock(data.stock || 0);
      setWarranty(data.warranty || "No warranty");
      setDescription(data.description || "");
      setThumbnail(data.thumbnail || "");
      setImages(data.images || []);
      setIsFeatured(data.isFeatured || false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Update product
  const handleUpdate = async () => {
    const updatedProduct = {
      name,
      slug,
      brand,
      category,
      price,
      salePrice: salePrice ? Number(salePrice) : null,
      stock,
      warranty,
      description,
      thumbnail,
      images,
      isFeatured,
      isActive: product.isActive,
    };

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) throw new Error("Failed to update product");
      alert("Product updated successfully");
      router.push("/dashboard/products");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p className="p-4">Loading product...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="w-full mx-auto pb-10 px-4 space-y-6">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.push("/dashboard/products")}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </button>

      <h1 className="text-3xl font-bold">Edit Product</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="flex-1 border p-3 rounded"
        />
        <input
          type="number"
          placeholder="Sale Price"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          className="flex-1 border p-3 rounded"
        />
      </div>

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        className="w-full border p-3 rounded"
      />

      <input
        placeholder="Warranty"
        value={warranty}
        onChange={(e) => setWarranty(e.target.value)}
        className="w-full border p-3 rounded"
      />

      {/* Thumbnail */}
      <div>
        <p className="mb-2 font-semibold">Thumbnail</p>
        <ImageUploadButton
          onClientUploadComplete={(res) =>
            setThumbnail(res[0].ufsUrl || res[0].url)
          }
        />
        {thumbnail && <img src={thumbnail} className="h-24 mt-3 rounded" />}
      </div>

      {/* Gallery */}
      <div>
        <p className="mb-2 font-semibold">Product Images</p>
        <ImageUploadButton
          onClientUploadComplete={(res) => {
            const urls = res.map((f) => f.ufsUrl || f.url);
            setImages((prev) => [...prev, ...urls]);
          }}
        />
        <div className="flex gap-3 mt-3 flex-wrap">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              className="h-16 w-16 object-cover rounded"
            />
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isFeatured}
          onChange={(e) => setIsFeatured(e.target.checked)}
        />
        Featured Product
      </label>

      <button
        onClick={handleUpdate}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Update Product
      </button>
    </div>
  );
}
