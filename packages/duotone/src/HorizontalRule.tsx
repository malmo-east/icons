import * as React from "react";
import { SVGProps } from "react";

const SvgHorizontalRule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      d="M640 255.1c0 18.5-14.4 32.9-32.1 32.9h-576C14.41 288 0 273.6 0 256s14.39-32 32.06-32h576c17.64 0 31.94 14.4 31.94 31.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHorizontalRule;
