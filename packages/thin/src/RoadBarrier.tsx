import * as React from "react";
import { SVGProps } from "react";

const SvgRoadBarrier = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M8 32c4.42 0 8 3.58 8 8v40h608V40c0-4.42 3.6-8 8-8s8 3.58 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V304H16v168c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V40a8 8 0 0 1 8-8zm616 256V96h-7.1l-96 192H624zm-600.94 0L119.1 96H16v192h7.06zM599.1 96H456.9l-96 192h142.2l96-192zM40.94 288H183.1l96-192H136.9L40.94 288zm159.96 0h142.2l96-192H296.9l-96 192z" />
  </svg>
);

export default SvgRoadBarrier;
