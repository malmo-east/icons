import * as React from "react";
import { SVGProps } from "react";

const SvgGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M351.9 0H32.07C13.34 0-1.348 15.88.098 34.47l32.56 418.5C35.25 486.3 63.18 512 96.76 512h196.8c33.95 0 62.04-26.28 64.16-60.01l26.25-417.1C385.1 15.58 370.5 0 351.9 0zm-42.1 448.1c-.5 9.3-7.7 15.9-16.3 15.9H96.7c-8.463 0-15.6-6.494-16.24-14.78L59.26 176h267.7L309.8 448.1zM329.9 128H55.52l-6.225-80h285.7l-5.095 80z" />
  </svg>
);

export default SvgGlass;
