"use client";

import { UploadButton } from "@uploadthing/react";

export function ImageUploadButton({ onClientUploadComplete }) {
  return (
    <UploadButton
      endpoint="imageUploader"
      multiple
      onClientUploadComplete={onClientUploadComplete}
      onUploadError={(error) => {
        alert(`Upload failed: ${error.message}`);
      }}
    />
  );
}