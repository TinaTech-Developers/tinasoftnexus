import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        src={"/loader.gif"}
        alt=""
        height={200}
        width={200}
        className="w-screen h-screen"
      />
    </div>
  );
}

// // https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxplanet.org%2Fusing-loading-animation-on-websites-and-apps-examples-and-snippets-to-use-cab0097be9f1&psig=AOvVaw3fsx6Z141pXu_s5x-Yt-qZ&ust=1716974494397000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCZ_sqCsIYDFQAAAAAdAAAAABAh
