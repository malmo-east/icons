import * as React from "react";
import { SVGProps } from "react";

const SvgN = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M376 480a8.03 8.03 0 0 1-6.094-2.812L16 61.72V472c0 4.4-3.59 8-8 8s-8-3.6-8-8V40a7.995 7.995 0 0 1 5.25-7.5c3.094-1.156 6.656-.219 8.844 2.312L368 450.3V40c0-4.41 3.6-8 8-8s8 3.59 8 8v432a7.995 7.995 0 0 1-5.25 7.5c-.85.3-1.85.5-2.75.5z" />
  </svg>
);

export default SvgN;
