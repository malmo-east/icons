import * as React from "react";
import { SVGProps } from "react";

const SvgChalkboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="chalkboard_svg__fa-primary"
      d="M480 96v320h-64v-48c0-8.838-7.164-16-16-16H240c-8.8 0-16 7.2-16 16v48H96V96h384z"
    />
    <path
      d="M560 416h-16V72c0-22-18.9-40-40-40H72c-22.9 0-40 18-40 40v344H16c-8.836 0-16 7.2-16 16v32c0 8.8 7.164 16 16 16h544c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16zm-464 0V96h384v320H96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChalkboard;
