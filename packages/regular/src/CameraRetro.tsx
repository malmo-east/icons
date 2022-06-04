import * as React from "react";
import { SVGProps } from "react";

const SvgCameraRetro = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 416V128c0-35.35 28.65-64 64-64V48c0-8.84 7.16-16 16-16h64c8.8 0 16 7.16 16 16v16h32l50.5-25.24c8.9-4.45 18.7-6.76 28.6-6.76H448c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64zm64-304c-8.84 0-16 7.2-16 16v64h108.1c23.4-29.3 59.5-48 99.9-48 40.4 0 76.5 18.7 99.9 48H464V96c0-8.84-7.2-16-16-16H271.1c-2.5 0-4.9.58-8 1.69l-49.6 25.21c-6.7 3.4-14 5.1-21.5 5.1H64zM48 240v176c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V240h-84.9c3.5 10.2 4.9 20.1 4.9 32 0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11.9 1.4-21.8 4-32H48zm208-48c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z" />
  </svg>
);

export default SvgCameraRetro;
