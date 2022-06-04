import * as React from "react";
import { SVGProps } from "react";

const SvgBreadLoaf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bread-loaf_svg__fa-primary"
      d="M640 192c0 35.38-30.88 64-64 64v192c0 17.62-14.38 32-32 32H384c17.62 0 32-14.38 32-32V256c33.13 0 64-28.62 64-64 0-88.38-107.5-160-240-160h160c132.5 0 240 71.6 240 160z"
    />
    <path
      d="M480 192c0-88.38-107.5-160-240-160S0 103.6 0 192c0 35.38 30.88 64 64 64v192c0 17.62 14.38 32 32 32h288c17.62 0 32-14.38 32-32V256c33.1 0 64-28.6 64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBreadLoaf;
