import * as React from "react";
import { SVGProps } from "react";

const SvgChartScatter3D = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32S0 81.67 0 64zm288 209 180.5 150.4c13.6 11.3 15.4 31.5 4.1 45.1-11.3 13.6-31.5 15.4-45.1 4.1L255.1 329.7 84.49 472.6c-13.58 11.3-33.76 9.5-45.07-4.1-11.32-13.6-9.48-33.8 4.09-45.1L223.1 273V64c0-17.67 15.2-32 32-32 18.6 0 32.9 14.33 32.9 32v209zm64-209c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm64 192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm32-96c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-288 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-96 96c0 17.7-14.33 32-32 32S0 273.7 0 256s14.33-32 32-32 32 14.3 32 32zm160 192c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

export default SvgChartScatter3D;
