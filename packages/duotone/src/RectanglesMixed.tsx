import * as React from "react";
import { SVGProps } from "react";

const SvgRectanglesMixed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="rectangles-mixed_svg__fa-primary"
      d="M0 80c0-26.51 21.49-48 48-48h224c26.5 0 48 21.49 48 48v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80z"
    />
    <path
      d="M528 32c26.5 0 48 21.49 48 48v256c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h96zM288 304c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48v-80c0-26.5 21.49-48 48-48h176z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRectanglesMixed;
