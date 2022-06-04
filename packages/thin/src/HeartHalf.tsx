import * as React from "react";
import { SVGProps } from "react";

const SvgHeartHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M236.7 476.9 47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.52-129.52 119.4-141 44.7-7.59 92 7.27 124.6 39.92L256 96v372.5c0 6.4-5.1 11.5-11.5 11.5-2.9 0-5.7-1.1-7.8-3.1zm3.3-374.3-7.3-7.27c-29-28.99-70.2-42.19-110.6-35.45-61.24 10.2-107 63.12-107 125.22v5.8c0 36.2 16.29 72.5 43.41 97.8L239.1 458.1l.9-355.5z" />
  </svg>
);

export default SvgHeartHalf;
