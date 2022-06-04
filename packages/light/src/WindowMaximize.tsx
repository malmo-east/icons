import * as React from "react";
import { SVGProps } from "react";

const SvgWindowMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v96h448V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm0 128v192c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V224H32z" />
  </svg>
);

export default SvgWindowMaximize;
