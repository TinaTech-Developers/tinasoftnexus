"use client";

import { useState } from "react";
import { ImageUploadButton } from "../_components/ImageUploadButton";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState("");

  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [warranty, setWarranty] = useState("No warranty");

  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);

  const [specifications, setSpecifications] = useState({});
  const [variants, setVariants] = useState([]);

  const [isFeatured, setIsFeatured] = useState(false);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async () => {
    const generatedSKU = `SKU-${Date.now()}`; // simple unique SKU

    const product = {
      name,
      slug,
      brand,
      category,
      price,
      salePrice: salePrice ? Number(salePrice) : null,
      currency: "USD",
      description,
      stock,
      warranty: "No warranty",
      thumbnail,
      images,
      specifications: {},
      variants: [],
      isFeatured,
      isActive: true,
      sku: generatedSKU, // ✅ assign unique SKU
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Failed to create product:", err);
        alert("Failed to create product");
        return;
      }

      alert("Product created successfully!");

      // Reset fields
      setName("");
      setSlug("");
      setBrand("");
      setCategory("");
      setPrice(0);
      setSalePrice("");
      setStock(0);
      setDescription("");
      setWarranty("No warranty");
      setThumbnail("");
      setImages([]);
      setSpecifications({});
      setVariants([]);
      setIsFeatured(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the product");
    }
  };

  return (
    <div className="w-full space-y-6">
      <h1 className="text-3xl font-bold">Add Product</h1>

      {/* BASIC INFO */}
      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded"
      />
      <input
        placeholder="Slug (example: iphone-13)"
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

      {/* PRICE & STOCK */}
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

      {/* WARRANTY */}
      <input
        placeholder="Warranty"
        value={warranty}
        onChange={(e) => setWarranty(e.target.value)}
        className="w-full border p-3 rounded"
      />

      {/* THUMBNAIL */}
      <div>
        <p className="mb-2 font-semibold">Thumbnail</p>
        <ImageUploadButton
          onClientUploadComplete={(res) => setThumbnail(res[0].ufsUrl)}
        />
        {thumbnail && <img src={thumbnail} className="h-24 mt-3 rounded" />}
      </div>

      {/* IMAGES */}
      <div>
        <p className="mb-2 font-semibold">Product Images</p>
        <ImageUploadButton
          onClientUploadComplete={(res) => {
            const urls = res.map((f) => f.ufsUrl);
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

      {/* FEATURED */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isFeatured}
          onChange={(e) => setIsFeatured(e.target.checked)}
        />
        Featured Product
      </label>

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Create Product
      </button>
    </div>
  );
}
