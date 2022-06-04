import * as React from "react";
import { SVGProps } from "react";

const SvgCoffin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M406.5 115.2 298.7 9.3C292.6 3.375 284.3 0 275.6 0H172.4c-8.7 0-17 3.375-23.2 9.375L41.46 115.2c-8.002 7.875-11.25 19.38-8.502 30.38l87.14 342.1C123.7 502 136.7 512 151.7 512h144.7c14.88 0 27.88-9.1 31.51-24.25l87.14-342.1a31.868 31.868 0 0 0-8.55-30.45zM284.5 464h-121L81.86 142.9 178.5 48h91.02l96.64 94.88L284.5 464z" />
  </svg>
);

export default SvgCoffin;