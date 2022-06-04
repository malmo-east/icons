import * as React from "react";
import { SVGProps } from "react";

const SvgWrenchSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 179.4c0 69.16-36.54 132-96.04 166.3V496c0 8.844-7.158 16-16.01 16s-16.01-7.156-16.01-16V336.2c0-6 3.375-11.5 8.721-14.25 53.87-27.5 87.32-82.13 87.32-142.5 0-57.84-30.73-109.8-80.03-138v139.9a16.06 16.06 0 0 1-6.408 12.82l-64.03 48c-2.813 2.03-6.113 3.13-9.513 3.13-3.352-.016-6.699-1.055-9.523-3.164l-64.03-48C114.4 191.1 112 186.3 112 181.3V41.36C62.74 69.62 32.01 121.6 32.01 179.4c0 60.41 33.45 115 87.32 142.5 5.346 2.75 8.721 8.25 8.721 14.25V496c0 8.844-7.158 16-16.01 16s-16.01-7.156-16.01-16V345.7C36.54 311.4 0 248.6 0 179.4 0 100.19 47.96 30.2 122.2 1.1c4.971-1.875 10.47-1.312 14.85 1.688 4.35 2.95 7.05 7.922 7.05 13.202v157.3L192 209.3l47.94-35.95V15.99c0-5.281 2.627-10.25 7.004-13.22 4.377-3 9.879-3.562 14.85-1.688C336 30.18 384 100.2 384 179.4z" />
  </svg>
);

export default SvgWrenchSimple;