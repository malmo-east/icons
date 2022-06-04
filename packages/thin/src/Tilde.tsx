import * as React from "react";
import { SVGProps } from "react";

const SvgTilde = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 160v83.59C448 303.4 399.4 352 339.6 352c-36.88 0-69.84-16.94-90.13-45.3l-65.97-92.1c-17.3-24.2-45.4-38.6-75.1-38.6-50.96 0-92.4 41.5-92.4 92.4V352c0 4.422-3.594 8-8 8s-8-3.6-8-8v-83.6C0 208.6 48.63 160 108.4 160c34.88 0 67.84 16.94 88.13 45.3l65.94 92.09C279.8 321.6 307.9 336 337.6 336c53 0 94.4-41.5 94.4-92.4V160c0-4.422 3.594-8 8-8s8 3.6 8 8z" />
  </svg>
);

export default SvgTilde;
