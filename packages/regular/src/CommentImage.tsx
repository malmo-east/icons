import * as React from "react";
import { SVGProps } from "react";

const SvgCommentImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.7 32 .027 125.1.027 240c0 47.63 19.91 91.25 52.91 126.3-14.87 39.5-45.87 72.88-46.37 73.25-6.623 7-8.373 17.25-4.623 26C5.816 474.3 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 28 9.05 60.2 14.25 92.9 14.25 141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29 7.373-12.12 14.37-25.75 19.87-40.25l10.62-28-20.62-21.88C69.81 314.1 48.06 282.3 48.06 240c0-88.25 93.24-160 207.1-160 114.7 0 207.1 71.75 207.1 160S370.8 400 256 400zm-80-208c17.62 0 32-14.38 32-32s-14.38-32-32-32-32 14.38-32 32 14.4 32 32 32zm135.1-24.9c-2.1-4.4-7.1-7.1-12.4-7.1s-10.35 2.672-13.31 7.125L231.8 247.4l-12.2-16.8c-3-4.2-7.8-6.6-12.9-6.6s-9.9 2.4-13 6.6l-46.67 64a15.997 15.997 0 0 0-1.334 16.68C148.5 316.6 153.1 320 160 320h224c5.9 0 11.32-3.246 14.11-8.449a16.01 16.01 0 0 0-.795-16.43L311.1 167.1z" />
  </svg>
);

export default SvgCommentImage;
