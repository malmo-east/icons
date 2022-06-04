import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 128c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm16 0v28.2l204.8 165.2c20.6 16.5 49.8 16.5 70.4 0L496 156.2V128c0-26.5-21.5-48-48-48H63.1c-25.61 0-48 21.5-48 48h.9zm0 48.7V384c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V176.7L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7z" />
  </svg>
);

export default SvgEnvelope;
