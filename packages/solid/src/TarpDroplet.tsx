import * as React from "react";
import { SVGProps } from "react";

const SvgTarpDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 100c0-24.05 33.7-70.07 52.2-93.51 6.1-7.716 17.5-7.716 23.6 0C318.3 29.93 352 75.95 352 100c0 33.1-28.7 60-64 60s-64-26.9-64-60zM64 128h133.5c13.1 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64H512c35.3 0 64 28.7 64 64v160H448c-17.7 0-32 14.3-32 32v128H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64zm32 128c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm352 256V384h128L448 512z" />
  </svg>
);

export default SvgTarpDroplet;