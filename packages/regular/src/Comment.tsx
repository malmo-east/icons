import * as React from "react";
import { SVGProps } from "react";

const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .027 125.1.027 240c0 47.63 19.91 91.25 52.91 126.2-14.88 39.5-45.87 72.88-46.37 73.25-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25 28 9.05 60.2 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zm.1 368c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29 7.375-12.12 14.37-25.75 19.88-40.25l10.62-28-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
  </svg>
);

export default SvgComment;
