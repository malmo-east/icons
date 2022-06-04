import * as React from "react";
import { SVGProps } from "react";

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M394.7 112.2c3.5-2.4 7.2-4.5 11-6.4 12.8-6.28 27.1-9.8 42.3-9.8 53 0 96 42.1 96 96 0 6.6-.7 12.1-1.9 19.2-1.1 5.3-2.6 10.4-4.5 15.4 5.3 1 10.5 2.4 15.5 4.1 50.5 17.2 86.9 65 86.9 121.3 0 70.7-57.3 128-128 128H144C64.47 480 0 415.5 0 336c0-62.8 40.17-116.2 96.2-135.9-.13-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160 53.6 0 100.1 26.31 130 66.71 3.1 4.29 6 8.79 8.7 13.49zm128.9 122c-2.3-4.1-3.5-9-.9-13.4 3.4-8.9 5.3-18.6 5.3-28.8 0-44.2-35.8-80-80-80-16.5 0-31.7 4.1-44.4 13.5a16.2 16.2 0 0 1-12.5 2.2c-4.4-1-8.1-4.6-10.3-7.5C355.9 76.99 309.3 48 256 48c-79.5 0-144 64.5-144 144 0 2.5.1 4.9.2 7.3.3 7.1-4 13.6-10.7 15.9C51.68 232.7 16 280.2 16 336c0 70.7 57.31 128 128 128h368c61.9 0 112-50.1 112-112 0-54.2-38.5-99.4-89.6-109.8-4.6-.9-8.6-3.8-10.8-8z" />
  </svg>
);

export default SvgCloud;
