import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m438.6 278.6-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .002 273.7.002 256S14.33 224 32 224h306.8L233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.45 12.55 12.45 32.75-.05 45.25z" />
  </svg>
);

export default SvgArrowRight;
