import * as React from "react";
import { SVGProps } from "react";

const SvgImagePolaroid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="image-polaroid_svg__fa-primary"
      d="M64 96v256h320V96H64zm64 32c17.62 0 32 14.38 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm222.1 183.6c-2.8 5.2-8.2 8.4-14.1 8.4H112a15.993 15.993 0 0 1-14.26-8.75 16 16 0 0 1 1.334-16.68l46.67-64C148.8 226.4 153.6 224 158.7 224s9.916 2.441 12.93 6.574l12.26 16.81 53.5-80.26C240.3 162.7 245.3 160 250.7 160s10.35 2.672 13.31 7.125l85.33 128c3.26 4.875 3.56 11.175.76 16.475z"
    />
    <path
      d="M400 32H48C21.6 32 0 53.6 0 80v352c0 26.4 21.6 48 48 48h352c26.4 0 48-21.6 48-48V80c0-26.4-21.6-48-48-48zm-16 320H64V96h320v256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgImagePolaroid;
