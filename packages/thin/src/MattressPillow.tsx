import * as React from "react";
import { SVGProps } from "react";

const SvgMattressPillow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M176 128c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V176c0-26.5 21.49-48 48-48h64zm0 16h-64c-17.67 0-32 14.3-32 32v160c0 17.7 14.33 32 32 32h64c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32zm400-80c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h512zM256 80H64c-26.51 0-48 21.5-48 48v256c0 26.5 21.49 48 48 48h192V80zm16 0v352h304c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48H272z" />
  </svg>
);

export default SvgMattressPillow;
