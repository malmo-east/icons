import * as React from "react";
import { SVGProps } from "react";

const SvgCowbell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="cowbell_svg__fa-primary"
      d="M336 48v48h-47.99V48H160v48h-47.9V48c0-25.6 22.4-48 48-48H288c25.6 0 48 22.4 48 48z"
    />
    <path
      d="M384.3 122.4c-2.8-15.3-16.2-26.4-31.7-26.4H95.37c-15.51 0-28.88 11.1-31.63 26.4L.5 474.4c-3.336 18.9 11 37.6 31.62 37.6h383.8c20.65 0 34.95-18.69 31.63-37.63L384.3 122.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCowbell;
