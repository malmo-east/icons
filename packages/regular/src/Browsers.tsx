import * as React from "react";
import { SVGProps } from "react";

const SvgBrowsers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.35 28.7-64 64-64h352zM160 368h352c8.8 0 16-7.2 16-16V128H144v224c0 8.8 7.2 16 16 16zm-112 8c0 48.6 39.4 88 88 88h320c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.89 512 0 451.1 0 376V120c0-13.3 10.75-24 24-24s24 10.7 24 24v256z" />
  </svg>
);

export default SvgBrowsers;