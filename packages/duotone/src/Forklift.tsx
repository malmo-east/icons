import * as React from "react";
import { SVGProps } from "react";

const SvgForklift = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="forklift_svg__fa-primary"
      d="M96 160V48c0-26.51 21.5-48 48-48h148.7c20.3 0 38.4 12.75 45.2 31.86l75.3 210.74c1.9 5.2 2.8 10.7 2.8 16.2v94.8c-20.3-20.7-48.7-33.6-80-33.6-56.4 0-103.1 41.7-110.9 96h-34.2c-7.8-54.3-54.5-96-110.9-96-31.34 0-59.67 12.9-80 33.6V208c0-26.5 21.49-48 48-48h48zm160 96h94L281.4 64H160v96l96 96z"
    />
    <path
      d="M544 384h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V32c0-17.67 14.3-32 32-32s32 14.33 32 32v352zm-384 48c0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80s35.82-80 80-80c44.2 0 80 35.8 80 80zm256 0c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgForklift;
