import * as React from "react";
import { SVGProps } from "react";

const SvgGalleryThumbnails = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="gallery-thumbnails_svg__fa-primary"
      d="M512 0c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h448zm0 64H64v224h448V64z"
    />
    <path
      d="M64 416c17.67 0 32 14.3 32 32v32c0 17.7-14.33 32-32 32H32c-17.67 0-32-14.3-32-32v-32c0-17.7 14.33-32 32-32h32zm160 0c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32zm96 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32zm224-32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGalleryThumbnails;
