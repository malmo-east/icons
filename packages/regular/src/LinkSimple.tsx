import * as React from "react";
import { SVGProps } from "react";

const SvgLinkSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 256C0 167.6 71.63 96 160 96h104c13.3 0 24 10.7 24 24s-10.7 24-24 24H160c-61.86 0-112 50.1-112 112s50.14 112 112 112h104c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.63 416 0 344.4 0 256zm480 160H376c-13.3 0-24-10.7-24-24s10.7-24 24-24h104c61.9 0 112-50.1 112-112s-50.1-112-112-112H376c-13.3 0-24-10.7-24-24s10.7-24 24-24h104c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-56-184c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h208z" />
  </svg>
);

export default SvgLinkSimple;