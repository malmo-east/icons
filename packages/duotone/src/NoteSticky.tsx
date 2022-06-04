import * as React from "react";
import { SVGProps } from "react";

const SvgNoteSticky = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="note-sticky_svg__fa-primary"
      d="M448 320v5.49c0 16.97-6.742 33.25-18.75 45.25l-90.51 90.51A63.79 63.79 0 0 1 293.5 480H288V352c0-17.67 14.33-32 32-32h128z"
    />
    <path
      d="M448 80v240h-64V96H64v320h224v64H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h352c26.5 0 48 21.49 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNoteSticky;
