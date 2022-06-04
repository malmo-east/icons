import * as React from "react";
import { SVGProps } from "react";

const SvgLocationDot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="location-dot_svg__fa-primary"
      d="M240 192c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z"
    />
    <path
      d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLocationDot;
