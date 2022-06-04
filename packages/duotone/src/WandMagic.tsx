import * as React from "react";
import { SVGProps } from "react";

const SvgWandMagic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="wand-magic_svg__fa-primary"
      d="M116.5 497.9c-18.72 18.7-49.12 18.7-67.86 0l-34.58-34.6c-18.746-18.7-18.746-49.1 0-67.9L284.7 124.7l102.5 102.5-270.7 270.7z"
    />
    <path
      d="m347.6 187.6 105-105.02-23.2-23.27L324.3 164.3l-39.6-39.6L395.4 14.06c18.8-18.746 49.2-18.746 67.9 0l34.6 34.58c18.7 18.74 18.7 49.14 0 67.86L387.2 227.2l-39.6-39.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWandMagic;
