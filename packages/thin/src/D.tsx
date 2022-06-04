import * as React from "react";
import { SVGProps } from "react";

const SvgD = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M160 480H8c-4.422 0-8-3.6-8-8V40c0-4.41 3.578-8 8-8l152 .01c123.5 0 224 100.5 224 223.1S283.5 480 160 480zM16 464h144c114.7 0 208-93.31 208-208S274.7 48 160 48H16v416z" />
  </svg>
);

export default SvgD;
