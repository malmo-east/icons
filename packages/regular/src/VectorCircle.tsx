import * as React from "react";
import { SVGProps } from "react";

const SvgVectorCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 32c0-17.67 14.3-32 32-32h64c17.7 0 32 14.33 32 32v17.64C387.8 70.65 441.4 124.2 462.4 192H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-17.6c-21 67.8-74.6 121.4-142.4 142.4V480c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-17.6c-67.8-21-121.35-74.6-142.36-142.4H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h17.64C70.65 124.2 124.2 70.65 192 49.64V32zm88 56V40h-48v48h48zM100.5 192.3C116 194.5 128 207.9 128 224v64c0 16.1-12 29.5-27.5 31.7 17 41.6 50.2 74.8 91.8 91.8 2.2-16.4 15.6-27.5 31.7-27.5h64c16.1 0 29.5 11.1 31.7 27.5 41.6-17 74.8-50.2 91.8-91.8-16.4-2.2-27.5-15.6-27.5-31.7v-64c0-16.1 11.1-29.5 27.5-31.7-17-41.6-50.2-74.8-91.8-91.8C317.5 116 304.1 128 288 128h-64c-16.1 0-29.5-12-31.7-27.5-41.6 17-74.8 50.2-91.8 91.8zM424 232v48h48v-48h-48zM232 424v48h48v-48h-48zM40 232v48h48v-48H40z" />
  </svg>
);

export default SvgVectorCircle;