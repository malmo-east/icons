import * as React from "react";
import { SVGProps } from "react";

const SvgDumpster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 160c10.38 0 17.1-9.75 15.5-19.88l-24-95.1C549.8 37 543.3 32 536 32h-98.88l25.62 128H560zM404.5 32H304v128h126.1L404.5 32zM552 224h-12l4-32H32l4 32H23.1C10.8 224 0 234.8 0 247.1S10.8 272 23.1 272h17.1L64 448v8c0 13.3 10.75 24 23.1 24s24.9-10.7 24.9-24v-8h352v8c0 13.3 10.7 24 24 24 13.25 0 24-10.75 24-23.1V448l21.1-176H552c13.2 0 24-10.8 24-24s-10.8-24-24-24zm-82.4 176H106.4l-20-160h403.4l-20.2 160zM16 160h97.25l25.63-128H40c-7.25 0-13.75 5-15.5 12.12l-24 95.1C-2 150.2 5.625 160 16 160zM272 32H171.5l-25.6 128H272V32z" />
  </svg>
);

export default SvgDumpster;