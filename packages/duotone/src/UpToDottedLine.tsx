import * as React from "react";
import { SVGProps } from "react";

const SvgUpToDottedLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="up-to-dotted-line_svg__fa-primary"
      d="M224 128c6.6 0 12.9 2.7 17.4 7.5l136 144c6.6 7 8.4 17.2 4.6 26-3.8 8.8-12.4 14.5-22 14.5h-72v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V320H88a24 24 0 0 1-22.04-14.5c-3.79-8.8-1.99-19 4.59-26l136.05-144c4.5-4.8 10.8-7.5 17.4-7.5z"
    />
    <path
      d="M384 64c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-96 0c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-32 0c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zM96 64c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-32 0c0 17.67-14.33 32-32 32S0 81.67 0 64s14.33-32 32-32 32 14.33 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpToDottedLine;
