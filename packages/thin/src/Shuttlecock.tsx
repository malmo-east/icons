import * as React from "react";
import { SVGProps } from "react";

const SvgShuttlecock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504 224h-90.91a7.98 7.98 0 0 0-7.219 4.562l-58.07 121.7-98.09 44.82L188.1 334.3l71.42-71.42 126.4-47.4a8.031 8.031 0 0 0 4.875-5.312l32-112c.812-2.781.031-5.781-2.031-7.844s-5.031-2.875-7.844-2.031l-112 32a8.03 8.03 0 0 0-5.312 4.875L249.1 251.6 177.7 323l-60.8-60.7 44.8-98 121.8-58.13a7.98 7.98 0 0 0 4.562-7.219V8c0-4.406-3.644-8-8.05-8H224.2c-3.2 0-6 1.844-7.3 4.688L100.7 259.4l-69.26 69.26c-41.88 41.88-41.88 110 0 151.9C52.35 501.5 79.88 512 107.4 512s55.04-10.47 75.97-31.41l69.27-69.27 254.7-116.4c2.86-1.32 4.66-4.12 4.66-7.22V232c0-4.4-3.6-8-8-8zm-193.9-89.4 94.29-26.94-26.94 94.29-107.8 40.41L310.1 134.6zM229.3 16h42.66v77.88L172 141.6 229.3 16zM172 469.3c-35.69 35.63-93.69 35.63-129.3 0-35.63-35.66-35.63-93.69 0-129.3l14.94-14.94 129.3 129.3L172 469.3zm26.3-26.3L68.97 313.7l38.38-38.38 129.3 129.3L198.3 443zm296.8-160.5-125.5 57.35 47.66-99.88h77.88v42.53z" />
  </svg>
);

export default SvgShuttlecock;