import * as React from "react";
import { SVGProps } from "react";

const SvgColon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M64 320c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64c0-35.3-28.65-64-64-64zm0 112c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm0-240c35.35 0 64-28.65 64-64S99.35 64 64 64 0 92.65 0 128c0 35.3 28.66 64 64 64zm0-112c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.54-48 48-48z" />
  </svg>
);

export default SvgColon;
