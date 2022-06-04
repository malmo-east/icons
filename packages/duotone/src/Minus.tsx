import * as React from "react";
import { SVGProps } from "react";

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      d="M400 288H48c-17.69 0-32-14.32-32-32.01S30.31 224 48 224h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMinus;
