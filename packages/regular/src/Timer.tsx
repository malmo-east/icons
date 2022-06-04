import * as React from "react";
import { SVGProps } from "react";

const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256c0-53.3 16.29-102.8 44.15-143.8 7.45-10.9 22.38-13.77 33.34-6.3 10.96 7.4 13.81 22.4 6.36 33.3C61.22 172.5 47.1 212.7 47.1 256c0 114.9 94 208 208 208C370.9 464 464 370.9 464 256c0-106.8-80.4-194.73-184-206.63V104c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24V24c0-13.25 11.6-24 24-24C397.4 0 512 114.6 512 256zm-239.9-17c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-80-80c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0l80 80z" />
  </svg>
);

export default SvgTimer;
