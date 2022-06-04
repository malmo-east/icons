import * as React from "react";
import { SVGProps } from "react";

const SvgTruckFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 80C0 35.82 35.82 0 80 0h352c44.2 0 80 35.82 80 80v288c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32v-48c-19.43-14.6-32-37.8-32-64V80zm129.9 72.2L112 224h288l-17.9-71.8c-3.6-15.1-16.4-24.2-31.1-24.2H160.1c-13.8 0-26.6 9.1-30.2 24.2zM96 288c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

export default SvgTruckFront;
