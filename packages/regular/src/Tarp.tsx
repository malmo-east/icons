import * as React from "react";
import { SVGProps } from "react";

const SvgTarp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M80 176c0-17.7 14.33-32 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32c-17.67 0-32-14.3-32-32zm496 124.1c0 12.7-5.1 25-14.1 34l-99.8 99.8c-9 9-21.3 14.1-34 14.1H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v172.1zM48 128v256c0 8.8 7.16 16 16 16h352v-80c0-17.7 14.3-32 32-32h80V128c0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16z" />
  </svg>
);

export default SvgTarp;