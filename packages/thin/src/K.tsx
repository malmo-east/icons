import * as React from "react";
import { SVGProps } from "react";

const SvgK = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M318.4 467.2c2.656 3.531 1.906 8.562-1.625 11.19C315.3 479.5 313.7 480 311.1 480a7.989 7.989 0 0 1-6.406-3.219L124 233.2 16 337.9V472c0 4.406-3.594 8-7.1 8-5.306 0-8.9-3.6-8.9-8V40c0-4.41 3.594-8 7.1-8 4.406 0 7.1 3.594 7.1 8v275.6L304.6 34.2c3.219-3.062 8.281-2.969 11.31.188 3.062 3.156 3 8.219-.188 11.31L135.6 222l182.8 245.2z" />
  </svg>
);

export default SvgK;
