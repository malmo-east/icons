import * as React from "react";
import { SVGProps } from "react";

const SvgCakeSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="cake-slice_svg__fa-primary"
      d="M512 256v192c0 8.5-3.4 16.6-9.4 22.6S488.5 480 480 480h-32V288c0-8.5-3.4-16.6-9.4-22.6S424.5 256 416 256H0L278.8 39.04c5.9-4.8 13.4-7.29 21.1-7.04 57.3 3.11 111.2 28.07 150.7 69.7C490 143.4 512 198.6 512 256z"
    />
    <path
      d="M0 384h448v96H64c-16.97 0-33.25-6.7-45.25-18.7C6.743 449.3 0 432.1 0 416v-32zm438.6-118.6c6 6 9.4 14.1 9.4 22.6v64H0v-96h416c8.5 0 16.6 3.4 22.6 9.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCakeSlice;
