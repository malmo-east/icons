import * as React from "react";
import { SVGProps } from "react";

const SvgFeatherPointed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="feather-pointed_svg__fa-primary"
      d="M23.1 512a23.905 23.905 0 0 1-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94l303.1-303.1c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-303.1 303.1C36.28 509.7 30.16 512 23.1 512z"
    />
    <path
      d="m467.1 241.1-116 46.9h94.34c-7.711 14.85-16.29 29.28-25.87 43.01L287.07 384h85.65c-59.34 52.71-144.1 80.35-264.5 52.82l235.9-235.9c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L75.11 402.1C-2.957 61.97 362.5 8.436 478.9.085c18.87-1.354 34.41 14.19 33.05 33.05C508.7 78.53 498.5 161.8 467.1 241.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFeatherPointed;
