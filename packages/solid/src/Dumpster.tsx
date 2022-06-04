import * as React from "react";
import { SVGProps } from "react";

const SvgDumpster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 160c10.38 0 17.1-9.75 15.5-19.88l-24-95.1C549.8 37 543.3 32 536 32h-98.88l25.62 128H560zM272 32H171.5l-25.6 128H272V32zm132.5 0H304v128h126.1L404.5 32zM16 160h97.25l25.63-128H40c-7.25 0-13.75 5-15.5 12.12l-24 95.1C-2.001 150.2 5.625 160 16 160zm544 64h-20l4-32H32l4 32H16c-8.75 0-16 7.2-16 16v32c0 8.8 7.25 16 16 16h28l20 160v16c0 8.8 7.25 16 16 16h32c8.8 0 16-7.2 16-16v-16h320v16c0 8.75 7.25 16 16 16h32c8.75 0 16-7.25 16-16v-16l20-160h28c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgDumpster;
