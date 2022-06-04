import * as React from "react";
import { SVGProps } from "react";

const Svg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M256 464c0 8.844-7.156 16-16 16H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h96V78.72L57.17 117.1c-7.22 5.1-17.22 3.3-22.28-3.9-5.06-7.3-3.31-17.23 3.94-22.29l80-55.1c4.891-3.438 11.28-3.875 16.56-1.094C140.7 36.57 144 42.04 144 48.01V448h96c8.8 0 16 7.2 16 16z" />
  </svg>
);

export default Svg1;
