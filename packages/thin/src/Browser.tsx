import * as React from "react";
import { SVGProps } from "react";

const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm128 48h368V96c0-26.51-21.5-48-48-48H128v96zm-16-96H64c-26.51 0-48 21.49-48 48v48h96V48zM16 160v256c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V160H16z" />
  </svg>
);

export default SvgBrowser;
