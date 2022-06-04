import * as React from "react";
import { SVGProps } from "react";

const SvgTarp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 288H448c-17.7 0-32 14.3-32 32v128H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v160zM96 192c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm352 256V320h128L448 448z" />
  </svg>
);

export default SvgTarp;
