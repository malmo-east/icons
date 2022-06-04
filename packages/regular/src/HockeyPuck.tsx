import * as React from "react";
import { SVGProps } from "react";

const SvgHockeyPuck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 64C128.6 64 0 96.27 0 177.8V315c0 87.3 128.7 133 256 133s256-45.69 256-132.9V184c0-81.6-128.6-120-256-120zm208 251.1c0 46-95.3 84.9-208 84.9S48 361.11 48 315.08V258.9c39.56 26.11 105.8 45.07 207.1 45.07S424.4 285 464 258.9v56.2zM256 256c-114.9 0-208-32.2-208-72 0-33.9 83.6-72 208-72s208 38.12 208 72c0 39.8-93.1 72-208 72z" />
  </svg>
);

export default SvgHockeyPuck;