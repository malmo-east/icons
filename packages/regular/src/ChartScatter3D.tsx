import * as React from "react";
import { SVGProps } from "react";

const SvgChartScatter3D = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32S0 81.67 0 64zm280 212.8 191.4 160.8c10.2 8.5 11.5 23.7 3 33.8-8.5 10.2-23.7 11.5-33.8 3L255.1 319.3 71.44 474.4c-10.15 8.5-25.29 7.2-33.82-3-8.52-10.1-7.21-25.3 2.94-33.8L231.1 276.8V56c0-13.25 11.6-24 24-24 14.2 0 24.9 10.75 24.9 24v220.8zM352 64c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm64 192c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm32-96c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-288 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-96 96c0 17.7-14.33 32-32 32S0 273.7 0 256s14.33-32 32-32 32 14.3 32 32zm160 192c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

export default SvgChartScatter3D;