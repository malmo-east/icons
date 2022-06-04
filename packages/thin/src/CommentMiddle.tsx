import * as React from "react";
import { SVGProps } from "react";

const SvgCommentMiddle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 93.09 0 208c0 95.99 80.08 176.5 188.8 200.5l48.89 93.39C241.2 508.6 248.6 512 256 512s14.76-3.361 18.28-10.08l48.89-93.39C431.9 384.5 512 303.1 512 208 512 93.09 397.4 0 256 0zm56.4 394.5-52.34 99.99c-.36.71-1.96 1.51-4.06 1.51s-3.713-.764-4.1-1.504l-52.34-99.99C22.6 355.4 16 226.3 16 208 16 102.1 123.7 16 256 16s240 86.13 240 192c0 18.3-6.6 147.4-183.6 186.5z" />
  </svg>
);

export default SvgCommentMiddle;
