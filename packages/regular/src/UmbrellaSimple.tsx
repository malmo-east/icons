import * as React from "react";
import { SVGProps } from "react";

const SvgUmbrellaSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 440c0 13.22-10.78 24-24 24s-24-10.78-24-24c0-13.2-10.7-24-24-24s-24 10.75-24 24c0 39.69 32.31 72 71.1 72s72.9-32.3 72.9-72V320h-48v120zm48-406.9v-9.44C280 10.59 269.4 0 256.3 0h-.6C242.6 0 232 10.59 232 23.66v9.434C112.8 43.984 17.9 135.194.3 251.594-2.436 270.8 13 288 32.55 288h446.9c19.55 0 34.99-17.19 32.24-36.38C494.1 135.2 399.2 43.98 280 33.1zM51.35 240C73.48 147.6 158.3 80 256 80s182.5 67.58 204.6 160H51.35z" />
  </svg>
);

export default SvgUmbrellaSimple;
