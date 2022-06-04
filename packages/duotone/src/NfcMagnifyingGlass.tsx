import * as React from "react";
import { SVGProps } from "react";

const SvgNfcMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="nfc-magnifying-glass_svg__fa-primary"
      d="m630.6 457.4-72.73-72.73C569.1 365.6 576 343.7 576 320c0-70.69-57.31-128-128-128s-128 57.31-128 128 57.31 128 128 128c23.7 0 45.61-6.879 64.65-18.1l72.73 72.73C591.6 508.9 599.8 512 608 512s16.38-3.125 22.62-9.375C643.1 490.1 643.1 469.9 630.6 457.4zM448 384c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.7 64-64 64z"
    />
    <path
      d="M384 173.5V128c0-17.64-14.36-32-32-32H224c-8.8 0-16 7.2-16 16v98.94c-18.6 6.66-32 24.16-32 45.06 0 26.51 21.49 48 48 48s48-21.5 48-48c0-20.87-13.4-38.45-32-45.06V128h112v64.72C313.4 221.9 288 267.8 288 320c0 22.79 4.92 44.38 13.51 64H96V128h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-17.64 0-32 14.4-32 32v256c0 17.64 14.36 32 32 32h224.7c21.51 28.47 52.17 49.38 87.77 58.49C400.9 477.7 392.8 480 384 480H64c-35.35 0-64-28.65-64-64V96c0-35.35 28.65-64 64-64h320c35.35 0 64 28.65 64 64v64c-22.8 0-44.4 4.9-64 13.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNfcMagnifyingGlass;
