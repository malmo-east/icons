import * as React from "react";
import { SVGProps } from "react";

const SvgCircle1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm64-128h-40V152c0-8.844-4.875-16.97-12.67-21.16a23.92 23.92 0 0 0-24.64 1.188l-52 34.66C179.7 174 176.7 188.9 184 199.1c7.328 11 22.23 13.97 33.28 6.656L232 196.8V336h-40c-13.25 0-24 10.75-24 24s10.8 24 24 24h128c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgCircle1;
