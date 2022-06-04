import * as React from "react";
import { SVGProps } from "react";

const SvgVenus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 94.5 74.54 171.4 168 175.6V408h-80c-4.41 0-8 3.6-8 8s3.594 8 8 8h80v80c0 4.4 3.6 8 8 8s8-3.594 8-8v-80h80c4.406 0 8-3.594 8-8s-3.594-8-8-8h-80v-56.4c93.5-4.2 168-81.1 168-175.6zm-336 0c0-88.22 71.78-160 160-160s160 71.78 160 160-71.78 160-160 160S32 264.2 32 176z" />
  </svg>
);

export default SvgVenus;
