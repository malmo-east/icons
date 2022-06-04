import * as React from "react";
import { SVGProps } from "react";

const SvgVanShuttle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="van-shuttle_svg__fa-primary"
      d="M465.1 32c18 0 36.8 8.34 49 22.78l110 131.72c10.6 10.6 15.9 26.1 15.9 41.2V336c0 26.5-21.5 48-48 48h-1.1c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.9 96h-98.2c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H48c-26.51 0-48-21.5-48-48V104c0-39.76 32.24-72 72-72h393.1zM64 192h96V96H72c-4.42 0-8 3.58-8 8v88zm481.1 0-80-96H384v96h161.1zM320 192V96h-96v96h96z"
    />
    <path
      d="M80 400c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm320 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVanShuttle;
