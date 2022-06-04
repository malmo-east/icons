import * as React from "react";
import { SVGProps } from "react";

const SvgAnkh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M296 272h-68.88c29.38-36.38 54.75-87.88 54.75-134.9C281.9 53 227.4 0 160 0S38.12 53 38.12 137.1c0 47 25.38 98.5 54.75 134.9H23.1C10.75 272 0 282.7 0 295.1S10.75 320 23.1 320H136v168c0 13.3 10.7 24 24 24s24-10.75 24-23.1V320h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zM160 48c44.25 0 73.88 35.88 73.88 89.12 0 53.88-49.63 119.5-73.88 133.4C135.8 256.6 86.12 191 86.12 137.1 86.12 83.88 115.8 48 160 48z" />
  </svg>
);

export default SvgAnkh;