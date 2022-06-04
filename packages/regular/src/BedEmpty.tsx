import * as React from "react";
import { SVGProps } from "react";

const SvgBedEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 160H48V56c0-13.26-10.75-24-24-24S0 42.74 0 56v400c0 13.3 10.75 24 24 24s24-10.75 24-24v-72h544v72c0 13.25 10.75 24 24 24s24-10.7 24-24V272c0-61.9-50.1-112-112-112zm64 176H48V208h480c35.25 0 64 28.75 64 64v64z" />
  </svg>
);

export default SvgBedEmpty;
