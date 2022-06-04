import * as React from "react";
import { SVGProps } from "react";

const SvgCommentMiddle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 93.09 0 208c0 95.99 80.08 176.5 188.8 200.5l48.89 93.39C241.2 508.6 248.6 512 256 512s14.76-3.361 18.28-10.08l48.89-93.39C431.9 384.5 512 303.1 512 208 512 93.09 397.4 0 256 0zm56.8 361.7-21.8 4.8-35 66.8-35-66.86-21.82-4.814C110.2 342 48 278.8 48 208c0-88.22 93.31-160 208-160s208 71.78 208 160c0 70.8-62.2 134-151.2 153.7z" />
  </svg>
);

export default SvgCommentMiddle;
