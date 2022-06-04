import * as React from "react";
import { SVGProps } from "react";

const SvgUpFromBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="up-from-bracket_svg__fa-primary"
      d="m241.4 7.197 136 144.103c6.6 7 8.4 17.2 4.6 26-3.8 8.8-12.4 14.5-22.9 14.5l-72 .1v128c0 17.7-13.4 32-32 32h-64c-16.8 0-32-14.3-32-32v-128l-72-.1c-8.68 0-17.35-5.7-21.15-14.5-3.78-8.8-1.98-19 4.59-26L206.5 7.197c9.1-9.601 25.9-9.601 34.9 0z"
    />
    <path
      d="M352 512H96c-53.02 0-96-43-96-96v-64c0-17.7 14.33-32 32-32s32 14.3 32 32v64c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpFromBracket;
