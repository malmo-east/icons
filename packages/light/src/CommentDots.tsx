import * as React from "react";
import { SVGProps } from "react";

const SvgCommentDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.23.9 239.1c0 47.62 19.91 91.25 52.91 126.3-14.87 39.5-45.87 72.88-46.37 73.25-6.623 7-8.374 17.25-4.624 26C5.816 474.3 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 28.1 9 60.16 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zm0 384.9c-28.25 0-56.24-4.25-83.24-12.75a31.656 31.656 0 0 0-28.07 4.338c-22.1 16.25-58.54 35.29-102.7 39.66 11.1-15.12 29.75-40.5 40.74-69.63l.129-.34c4.283-11.27 1.79-23.1-6.43-32.82C47.51 313.1 32.06 277.6 32.06 240c0-97 100.5-176 223.1-176 123.5 0 223.1 79 223.1 176S379.5 416 256 416zm0-200c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24zm128 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24zm-256 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

export default SvgCommentDots;