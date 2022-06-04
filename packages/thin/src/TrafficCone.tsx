import * as React from "react";
import { SVGProps } from "react";

const SvgTrafficCone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M107.4 336 63.53 458.7c-1.48 4.2-6.06 6.3-10.22 4.8-4.16-1.5-6.33-6-4.84-10.2L202.8 21.24C207.3 8.501 219.4 0 232.9 0h46.2c13.5 0 25.6 8.501 30.1 21.24L463.5 453.3c1.5 4.2-.6 8.7-4.8 10.2s-9.6-.6-10.2-4.8L404.6 336H107.4zM232.9 16c-6.7 0-12.8 4.25-15.1 10.62L170.2 160h171.6L294.2 26.62C291.9 20.25 285.8 16 279.1 16h-46.2zm114.6 160h-183l-51.4 144h285.8l-51.4-144zM0 504c0-4.4 3.582-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8z" />
  </svg>
);

export default SvgTrafficCone;
