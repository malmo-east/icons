import * as React from "react";
import { SVGProps } from "react";

const SvgDiceD6 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M431.9 116.1 239.9 4.2C235 1.438 229.5 0 224 0s-11 1.438-15.9 4.25l-192 111.9C6.125 121.1 0 132.7 0 144.5v223c0 11.75 6.125 22.48 16.12 28.36l192 111.9C213 510.6 218.5 512 224 512s11-1.438 15.88-4.25l192-111.9C441.9 390 448 379.3 448 367.5v-223c0-11.8-6.1-23.4-16.1-28.4zM224 50.6l152.4 88.76L224 228.2 71.63 139.4 224 50.6zM48 181.1l152 88.64v177.6L48 358.9V181.1zm200 266.3V269.8l152-88.64v177.8L248 447.4z" />
  </svg>
);

export default SvgDiceD6;
