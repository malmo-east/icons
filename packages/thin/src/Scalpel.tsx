import * as React from "react";
import { SVGProps } from "react";

const SvgScalpel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 311.1c-4.406 0-8 3.594-8 8 0 38.35-17.41 77.1-44.31 98.69a4.93 4.93 0 0 0-.594.469c-57.81 45.91-131.1 72.69-208.1 76.41l161.2-170.1c3.031-3.22 2.906-8.281-.312-11.31C184.7 311.1 179.6 311.3 176.6 314.5L2.191 498.5a7.968 7.968 0 0 0-1.531 8.656C1.973 510.3 4.816 511.1 8.566 512c86.81 0 170.3-28.22 236.2-80.16.344-.187.656-.406.969-.656 30.56-24.56 50.31-68.19 50.31-111.2C296 315.6 292.4 311.1 288 311.1zM511.4 65.22c-2.625-21.28-13.66-39.85-31.09-52.25C449.47-9.06 405-2.38 379.01 28.09L183.1 256.1c-5.2 7.1-6.5 16.8-2.7 25.2s12.06 13.69 21.34 13.69h127.8c11.38 0 22.19-5 29.69-13.72l134.6-157.3C507.6 107.8 514 86.41 511.4 65.22zm-29.7 48.38L347.2 270.9c-4.438 5.156-10.84 8.125-17.53 8.125H201.8c-4.438 0-6.344-3.344-6.812-4.375s-1.788-5.55 1.212-8.15l195.1-228C403.83 23.78 421.68 16 439.18 16c11.28 0 22.47 3.25 31.94 10.03 13.72 9.781 22.44 24.41 24.5 41.19 1.98 16.69-3.12 33.58-13.92 46.38z" />
  </svg>
);

export default SvgScalpel;