import * as React from "react";
import { SVGProps } from "react";

const SvgA = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m383.4 468.9-184-432.44c-2.5-5.943-12.22-5.943-14.72 0L.644 468.9c-1.734 4.066.156 8.758 4.219 10.51 4.125 1.595 8.765-.156 10.5-4.254l45.63-107.2h262l45.63 107.2C369.9 478.2 372.9 480 375.1 480c1.047 0 2.109-.219 3.141-.626C383.2 477.6 385.1 472.9 383.4 468.9zm-315.6-117L192 60.01l124.2 291.9H67.8z" />
  </svg>
);

export default SvgA;
