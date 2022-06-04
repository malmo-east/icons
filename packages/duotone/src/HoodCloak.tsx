import * as React from "react";
import { SVGProps } from "react";

const SvgHoodCloak = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="hood-cloak_svg__fa-primary"
      d="M575.1 479.1c-.25 16.5-13.49 32-32.36 32l-126.54.9-.06-192c0-70.75-57.25-128-128-128-70.62 0-128 57.25-128 128l.066 192h-127.9c-18.87 0-32.11-15.5-32.36-32-.125-6.5 1.86-13.27 6.36-19.15 57.62-77 57.65-140.9 57.65-140.9v-64c0-146.5 127.1-256 223.6-256h149.1c17.5 0 26.25 21.12 13.87 33.5l-39.77 39.75c54.75 59.75 101.2 98.75 101.2 182.8v64s0 63.85 57.62 140.9c4.524 5.8 6.524 12.6 5.524 18.2z"
    />
    <path
      d="M288.2 192c-70.62 0-128 57.25-128 128l.066 192h255.1l-.06-192C416.2 249.2 358.9 192 288.2 192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHoodCloak;
