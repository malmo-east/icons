import * as React from "react";
import { SVGProps } from "react";

const SvgChartArea = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 400c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32s32 14.33 32 32v336zm64-80v-84c0-7.7 2.8-15.2 7.9-21.9l79.4-89.9c13-14.8 36.1-14.5 47.8.6l40.1 47c9 10.9 25.4 11.6 35.4 1.6l21-21c13.1-13.1 34.8-12.3 46.9 1.8l65.8 76.8c5 5.8 7.7 13.2 7.7 20.8V320c0 17.7-14.3 32-32 32H159.1c-16.8 0-32-14.3-32-32h.9z" />
  </svg>
);

export default SvgChartArea;
