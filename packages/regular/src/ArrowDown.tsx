import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m377.4 296.6-168 176c-4.6 4.7-10.8 7.4-17.4 7.4s-12.84-2.688-17.38-7.438l-168-176C-2.5 286.1-2.156 271.8 7.438 262.6c9.5-9.156 24.75-8.812 33.94.813L168 396.1V56.02c0-13.25 10.75-24.01 23.1-24.01S216 42.77 216 56.02v340.1l126.6-132.7c9.156-9.625 24.41-9.969 33.94-.813 9.66 9.193 9.96 23.493.86 33.993z" />
  </svg>
);

export default SvgArrowDown;
