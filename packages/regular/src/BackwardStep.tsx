import * as React from "react";
import { SVGProps } from "react";

const SvgBackwardStep = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M32 88v336c0 13.3 10.75 24 24 24s24-10.75 24-24V318.2l173.4 123.9c5.5 3.9 12 5.9 18.6 5.9 5 0 10.03-1.156 14.66-3.531a32.023 32.023 0 0 0 17.34-28.48V96.01c0-12-6.687-22.98-17.34-28.48A32.242 32.242 0 0 0 272 64.001a31.847 31.847 0 0 0-18.59 5.967L80 193.8V88c0-13.25-10.75-24-24-24S32 74.75 32 88zm48 164.8 176-125.7v257.8L80 259.2v-6.4z" />
  </svg>
);

export default SvgBackwardStep;
