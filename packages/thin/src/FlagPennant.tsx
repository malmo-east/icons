import * as React from "react";
import { SVGProps } from "react";

const SvgFlagPennant = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496.5 201.8 16 25.02V8c0-4.418-3.58-8-8-8S0 3.582 0 8v496c0 4.4 3.594 8 8 8s8-3.594 8-8v-80.75l480.5-177c9.6-3.55 15.5-12.05 15.5-23.15 0-10-6.1-17.8-15.5-21.3zm-6.4 29.4L16 406.2V42.07l474.1 174.7c5.4 1.73 5.9 5.63 5.9 6.33 0 2.5-.5 6.4-5.9 8.1z" />
  </svg>
);

export default SvgFlagPennant;
