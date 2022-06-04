import * as React from "react";
import { SVGProps } from "react";

const SvgToiletPortable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M264 216c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-13.3 0-24-10.7-24-24v-64c0-13.3 10.7-24 24-24h16zm40 288c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40H32v40c0 4.4-3.58 8-8 8s-8-3.6-8-8V56C16 25.07 41.07 0 72 0h176c30.9 0 56 25.07 56 56v448zM32 96h256V56c0-22.09-17.9-40-40-40H72c-22.09 0-40 17.91-40 40v40zm256 352V112H32v336h256z" />
  </svg>
);

export default SvgToiletPortable;
