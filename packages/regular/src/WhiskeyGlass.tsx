import * as React from "react";
import { SVGProps } from "react";

const SvgWhiskeyGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M479.1 32H32.04C12.55 32-2.324 49.25.3 68.51L56.29 425.1c4.5 31.5 31.49 54.9 63.51 54.9h272.9c31.74 0 58.86-23.38 63.36-54.89l55.61-356.6C514.3 49.25 499.5 32 479.1 32zm-86.4 400H119.8c-8.121 0-14.84-5.752-16.07-14.34L90.88 336h330.5l-12.84 82.32C407.5 426.1 400.6 432 392.7 432zm36.2-144H83.35L50.69 80h410.6L428.9 288z" />
  </svg>
);

export default SvgWhiskeyGlass;
