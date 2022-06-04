import * as React from "react";
import { SVGProps } from "react";

const SvgWandMagic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M14.06 395.4 395.4 14.06c18.8-18.746 49.2-18.746 67.9 0l34.6 34.58c18.7 18.74 18.7 49.14 0 67.86L116.5 497.9c-18.72 18.7-49.12 18.7-67.86 0l-34.58-34.6c-18.746-18.7-18.746-49.1 0-67.9zM354.2 192.3 463.1 82.58 429.4 48 319.7 157.7l34.5 34.6zm-68.5-.6L48 429.4l34.58 33.7L320.3 226.2l-34.6-34.5z" />
  </svg>
);

export default SvgWandMagic;
