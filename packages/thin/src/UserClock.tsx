import * as React from "react";
import { SVGProps } from "react";

const SvgUserClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm0-240c61.76 0 112 50.24 112 112s-50.2 112-112 112-112-50.2-112-112S162.2 16 224 16zm328 344h-48v-64c0-4.406-3.594-7.1-8-7.1s-8 2.7-8 7.1v72c0 4.406 3.594 8 8 8h56c4.406 0 8-3.594 8-7.1s-3.6-8.9-8-8.9zm-56-136c-79.63 0-144 64.38-144 144s64.38 144 144 144 144-64.38 144-144-64.4-144-144-144zm0 272c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128c0 70.6-57.4 128-128 128zm-120 0H41.44C27.41 496 16 485.2 16 472c0-83.8 71.41-152 159.2-152h97.69c15.34 0 30.5 2.062 44.97 6.156 4.406 1.25 8.688-1.281 9.875-5.5 1.219-4.25-1.25-8.688-5.5-9.875C306.3 306.3 289.7 304 272.8 304h-97.6C78.56 304 0 379.4 0 472c0 22.1 18.59 40 41.44 40H376c4.406 0 8-3.594 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgUserClock;
