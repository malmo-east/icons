import * as React from "react";
import { SVGProps } from "react";

const SvgLinkSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 256C0 167.6 71.63 96 160 96h120c4.4 0 8 3.58 8 8 0 4.4-3.6 8-8 8H160c-79.53 0-144 64.5-144 144s64.47 144 144 144h120c4.4 0 8 3.6 8 8s-3.6 8-8 8H160C71.63 416 0 344.4 0 256zm480 160H360c-4.4 0-8-3.6-8-8s3.6-8 8-8h120c79.5 0 144-64.5 144-144s-64.5-144-144-144H360c-4.4 0-8-3.6-8-8 0-4.42 3.6-8 8-8h120c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-16-168c4.4 0 8 3.6 8 8s-3.6 8-8 8H176c-4.4 0-8-3.6-8-8s3.6-8 8-8h288z" />
  </svg>
);

export default SvgLinkSimple;
