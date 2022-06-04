import * as React from "react";
import { SVGProps } from "react";

const SvgWrenchSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 172.4c0 71.01-38.7 132.8-96 166V504c0 4.418-3.582 8-8 8s-8-3.6-8-8V338.5c0-5.852 3.271-11.1 8.328-14.05C334.4 292.9 368 234.7 368 172.4c0-66.13-36.64-126.1-95.62-156.4L272 159.1c0 4.242-1.686 8.312-4.686 11.31l-64 64.01C200.2 238.4 196.1 239.1 192 239.1s-8.2-.7-11.3-3.8l-64-64.01c-3-2.99-4.7-7.09-4.7-12.19l-.4-143.05C52.64 46.4 16 106.3 16 172.4c0 62.24 33.58 120.4 87.67 151.9 5.03 3.1 8.33 8.3 8.33 14.2V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V338.5c-57.3-33.22-96-94.99-96-166C0 64.85 90.06 0 111.8 0c8.5 0 16.2 6.73 16.2 16.1V160l64 64 64-64V16.1C256 6.73 263.7 0 272.2 0 293.9 0 384 64.85 384 172.4z" />
  </svg>
);

export default SvgWrenchSimple;
