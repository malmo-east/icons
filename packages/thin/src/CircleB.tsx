import * as React from "react";
import { SVGProps } from "react";

const SvgCircleB = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M308.5 250.3c16.6-12.4 27.5-32 27.5-54.3 0-37.5-30.5-68-68-68H168c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h124c37.5 0 68-30.5 68-68 0-31.8-22-58.3-51.5-65.7zM176 144h92c28.7 0 52 23.3 52 52s-23.3 52-52 52h-92V144zm116 224H176V264h116c28.67 0 52 23.33 52 52s-23.3 52-52 52zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleB;
