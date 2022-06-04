import * as React from "react";
import { SVGProps } from "react";

const SvgSeedling = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="seedling_svg__fa-primary"
      d="M64 95.1H0c0 123.8 100.3 224 224 224v128c0 18.5 14.4 32.9 31.1 32.9s32.9-14.4 32.9-32V320C288 196.3 187.7 95.1 64 95.1z"
    />
    <path
      d="M512 32c0 123.8-100.3 224-224 224v64c0-53.52-18.81-102.6-50.1-141.1C269.4 93.21 351.4 32 448 32h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSeedling;
