import * as React from "react";
import { SVGProps } from "react";

const SvgSailboat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M510.5 339.4c1.8 2.4 2 4.7.6 8.3-1.4 2.6-5 4.3-7.1 4.3H263.1c-3.5 0-8-3.6-8-8V8c0-3.477 3.1-6.557 6.5-7.618a7.92 7.92 0 0 1 8.9 2.969l240 336.049zm-22-3.4L271.1 32.96V336h217.4zM218.1 96.29c3.5.96 5 4.11 5 7.71v240c0 4.4-2.7 8-8 8h-144c-1.98 0-4.64-1.5-6.06-4.1-1.42-2.5-1.38-5.5.1-8L209.1 99.88c1-3.08 5.6-4.55 9-3.59zM86.13 336H207.1V132.9L86.13 336zm468.77 48c10.6 0 18.2 10.1 15.4 20.3l-4 14.4C550.7 473.9 500.4 512 443 512H132.1c-56.48 0-106.83-38.1-122.355-93.3l-4.029-14.4C2.846 394.1 10.52 384 21.12 384H554.9zm0 16H21.12l4.03 14.3C38.73 462.6 82.79 496 132.1 496H443c50.2 0 94.3-33.4 107.8-81.7l4.1-14.3z" />
  </svg>
);

export default SvgSailboat;