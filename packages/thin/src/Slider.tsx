import * as React from "react";
import { SVGProps } from "react";

const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 96c35.3 0 64 28.7 64 64v88h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88v88c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h32zm0 16h-32c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48zM8 248h216v16H8c-4.418 0-8-3.6-8-8s3.582-8 8-8z" />
  </svg>
);

export default SvgSlider;
