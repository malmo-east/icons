import * as React from "react";
import { SVGProps } from "react";

const SvgMelonSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="melon-slice_svg__fa-primary"
      d="M425.8 9.375c-12.5-12.5-32.75-12.5-45.25 0L357.9 32l22.62 22.62C424 98.16 448 156 448 217.6c0 61.55-23.97 119.4-67.5 162.9C336.1 424 279.1 448 217.6 448c-61.53 0-119.4-23.97-162.9-67.48L32 357.9 9.38 380.52C3.375 386.5 0 394.7 0 403.1s3.375 16.62 9.375 22.62C65 481.4 138.9 512 217.6 512c78.66 0 152.6-30.62 208.2-86.23C481.4 370.2 512 296.2 512 217.6c0-78.7-30.6-152.62-86.2-208.225z"
    />
    <path
      d="M448 217.6c0 61.55-23.97 119.4-67.5 162.9C336.1 424 279.1 448 217.6 448c-61.53 0-119.4-23.97-162.9-67.48L32 357.9l44.96-44.96C93.24 317.4 110.3 320 128 320c106 0 192-85.96 192-192 0-17.7-2.592-34.77-7.076-51.05L357.9 32l22.62 22.62C424 98.16 448 156 448 217.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMelonSlice;