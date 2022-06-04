import * as React from "react";
import { SVGProps } from "react";

const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M5.287 459.9c-7.126-12.5-7.043-27.8.216-40.1L221.5 51.75C228.7 39.52 241.8 32 256 32s27.3 7.52 34.5 19.75l216 368.05c7.3 12.3 7.3 27.6.2 40.1-7.1 12.4-20.4 20.1-34.7 20.1H40c-14.34 0-27.59-7.7-34.713-20.1zM276.7 59.85C272.4 52.51 264.5 48 256 48s-16.4 4.51-20.7 11.85L19.3 427.8c-4.35 7.5-4.4 16.7-.13 24.1A23.96 23.96 0 0 0 40 464h432c8.6 0 16.6-4.6 20.8-12.1 4.3-7.4 4.3-16.6-.1-24.1l-216-367.95z" />
  </svg>
);

export default SvgTriangle;
