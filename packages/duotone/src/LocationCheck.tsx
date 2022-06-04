import * as React from "react";
import { SVGProps } from "react";

const SvgLocationCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="location-check_svg__fa-primary"
      d="M288.1 127c10.2 9.4 10.2 24.6 0 33.1l-112 112c-8.5 10.2-23.7 10.2-33.1 0l-55.97-56c-9.37-8.5-9.37-23.7 0-33.1 9.37-9.3 24.57-9.3 33.07 0l39.9 39.1 95-95.1c9.4-9.3 24.6-9.3 33.1 0z"
    />
    <path
      d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zm119.8-339.1c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-95 95.1-39.9-39.1c-8.5-9.3-23.7-9.3-33.07 0-9.37 9.4-9.37 24.6 0 33.1l55.97 56c9.4 10.2 24.6 10.2 33.1 0l112-112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLocationCheck;
