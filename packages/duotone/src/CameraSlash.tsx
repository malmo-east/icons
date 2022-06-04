import * as React from "react";
import { SVGProps } from "react";

const SvgCameraSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="camera-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M415.2 300.2c.5-4 .8-8.1.8-12.2 0-53.9-43-96-96-96-12.2 0-23.8 2.3-34.6 6.4L154.8 96h47.9l10.4-31.18C219.6 45.22 237.9 32 258.6 32h122.8c20.7 0 39 13.22 45.5 32.82L437.3 96H512c35.3 0 64 28.7 64 64v256c0 3.3-.2 6.5-.7 9.6L415.2 300.2zM320 384c12.9 0 25.2-2.5 36.4-7.2l131 103.2H128c-35.35 0-64-28.7-64-64V160c0-4.3.43-8.5 1.24-12.6l159.86 126c-.7 4.7-1.1 9.6-1.1 14.6 0 53 42.1 96 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCameraSlash;
