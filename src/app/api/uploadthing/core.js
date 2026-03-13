import { createUploadthing } from "uploadthing/next";

// Initialize UploadThing
const f = createUploadthing();
export const OurFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 5,
    },
  }).onUploadComplete(async ({ file }) => {
    return {
      url: file.ufsUrl,
    };
  }),
};
