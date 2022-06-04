import * as React from "react";
import { SVGProps } from "react";

const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 96c35.3 0 64 28.7 64 64v72h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72v72c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h32zm0 48h-32c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zM24 232h200v48H24c-13.25 0-24-10.7-24-24s10.75-24 24-24z" />
  </svg>
);

export default SvgSlider;