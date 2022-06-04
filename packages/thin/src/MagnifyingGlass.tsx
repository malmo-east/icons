import * as React from "react";
import { SVGProps } from "react";

const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.7 498.3 360.5 349.1c34.3-37 54.6-86.5 54.6-141.1 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c54.55 0 104.1-21.17 141.2-55.54l149.2 149.2c2.4 1.54 4.4 2.34 5.6 2.34s4.094-.781 5.656-2.344c4.044-3.156 4.044-8.156.944-11.356zM207.1 400c-105.9 0-192-86.13-192-192s86.13-192 192-192 192 86.13 192 192-85.2 192-192 192z" />
  </svg>
);

export default SvgMagnifyingGlass;
