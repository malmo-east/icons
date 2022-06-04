import * as React from "react";
import { SVGProps } from "react";

const SvgMobileScreenButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M304 0H80C53.5 0 32 21.5 32 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 464c0 17.64-14.36 32-32 32H80c-17.64 0-32-14.36-32-32v-96h288v96zm0-112H48V48c0-17.64 14.36-32 32-32h224c17.64 0 32 14.36 32 32v304zM192 464c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm0-48c8.822 0 16 7.176 16 16s-7.2 16-16 16-16-7.176-16-16 7.2-16 16-16z" />
  </svg>
);

export default SvgMobileScreenButton;
