import * as React from "react";
import { SVGProps } from "react";

const SvgToiletsPortable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="toilets-portable_svg__fa-primary"
      d="M224 0c17.7 0 32 14.33 32 32v32H0V32C0 14.33 14.33 0 32 0h192zm320 0c17.7 0 32 14.33 32 32v32H320V32c0-17.67 14.3-32 32-32h192zM192 224c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm336 80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64z"
    />
    <path
      d="M256 64v424c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.75 24-24 24S0 501.3 0 488V64h256zm-80 176v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zM576 64v424c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H368v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V64h256zm-80 176v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToiletsPortable;
