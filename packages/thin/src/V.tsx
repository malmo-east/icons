import * as React from "react";
import { SVGProps } from "react";

const SvgV = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 480a7.98 7.98 0 0 1-7.359-4.881L.644 43.1c-1.735-4.06.156-8.75 4.218-10.5 4.063-1.63 8.768.15 10.498 4.25L192 451.6 368.6 36.9c1.734-4.094 6.406-5.875 10.5-4.25 4.062 1.75 5.953 6.438 4.219 10.5l-183.1 432C198.1 478.1 195.2 480 192 480z" />
  </svg>
);

export default SvgV;
