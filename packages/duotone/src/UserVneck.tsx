import * as React from "react";
import { SVGProps } from "react";

const SvgUserVneck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user-vneck_svg__fa-primary"
      d="M140.2 306.3 224 431.1l83.8-124.8C387.4 319.5 448 388.7 448 471.1v8c0 18.6-14.3 32-32 32H32c-17.67 0-32-13.4-32-32v-8c0-82.4 60.64-151.6 140.2-164.8z"
    />
    <path
      d="M96 128C96 57.31 153.3 0 224 0s128 57.31 128 128c0 70.7-57.3 128-128 128S96 198.7 96 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserVneck;
