import * as React from "react";
import { SVGProps } from "react";

const SvgObjectsAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="objects-align-top_svg__fa-primary"
      d="M0 24C0 10.75 10.75 0 24 0h464c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 48 0 37.25 0 24z"
    />
    <path
      d="M176 128c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V176c0-26.5 21.49-48 48-48h64zm224 0c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgObjectsAlignTop;
