import * as React from "react";
import { SVGProps } from "react";

const SvgScalpelLineDashed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="scalpel-line-dashed_svg__fa-primary"
      d="M495.2 114.4c26.36-30.88 21.24-78.5-12.49-102.5-29.23-20.88-70.21-13-93.44 14.25L155.9 293.5c-8.994 10.5-1.498 26.5 12.12 26.5h131.9c9.369 0 18.24-4.125 24.36-11.25L495.2 114.4zM304 480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16zm128 0h-64c-8.836 0-16 7.164-16 16s7.164 16 16 16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16zm128 0h-64c-8.836 0-16 7.164-16 16s7.164 16 16 16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16z"
    />
    <path
      d="M288 320v8c0 38.38-15.72 76.63-47.81 102.4-.256.125-.383.25-.639.5C174.1 482.9 88.97 512.1 0 512l179.1-192H288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScalpelLineDashed;
