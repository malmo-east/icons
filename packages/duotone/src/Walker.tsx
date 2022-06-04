import * as React from "react";
import { SVGProps } from "react";

const SvgWalker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="walker_svg__fa-primary"
      d="M24.24 511C7.093 506.8-3.331 489.4.955 472.2L100.8 72.72C111.5 29.98 149.9 0 193.1 0H320c53 0 96 42.98 96 96v296.6c-9.4-5.5-20.3-8.6-32-8.6s-22.6 3.1-32 8.6V224H128.1L63.04 487.8c-4.28 17.1-21.66 27.5-38.8 23.2zM193.1 64c-13.8 0-26.6 9.99-30.2 24.24L144.1 160H352V96c0-17.67-14.3-32-32-32H193.1z"
    />
    <path
      d="M448 448c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWalker;
