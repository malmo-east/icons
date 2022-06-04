import * as React from "react";
import { SVGProps } from "react";

const SvgToiletPortable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="toilet-portable_svg__fa-primary"
      d="M288 0c17.7 0 32 14.33 32 32v32H0V32C0 14.33 14.33 0 32 0h256zm-32 304c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64z"
    />
    <path
      d="M0 64h320v424c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.75 24-24 24S0 501.3 0 488V64zm256 176c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToiletPortable;
