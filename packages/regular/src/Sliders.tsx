import * as React from "react";
import { SVGProps } from "react";

const SvgSliders = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 416c0-13.3 10.75-24 24-24h59.66c10.2-32.5 40.54-56 76.34-56 35.8 0 66.1 23.5 76.3 56H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H236.3c-10.2 32.5-40.5 56-76.3 56s-66.14-23.5-76.34-56H24c-13.25 0-24-10.7-24-24zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm160-240c35.8 0 66.1 23.5 76.3 56H488c13.3 0 24 10.7 24 24s-10.7 24-24 24h-59.7c-10.2 32.5-40.5 56-76.3 56s-66.1-23.5-76.3-56H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h251.7c10.2-32.5 40.5-56 76.3-56zm32 80c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM488 72c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H268.3c-10.2 32.5-40.5 56-76.3 56s-66.1-23.5-76.3-56H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h91.7c10.2-32.46 40.5-56 76.3-56s66.1 23.54 76.3 56H488zM160 96c0 17.7 14.3 32 32 32s32-14.3 32-32c0-17.67-14.3-32-32-32s-32 14.33-32 32z" />
  </svg>
);

export default SvgSliders;