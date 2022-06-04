import * as React from "react";
import { SVGProps } from "react";

const SvgK = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M314.3 429.8c10.06 14.53 6.438 34.47-8.094 44.53a31.899 31.899 0 0 1-18.19 5.688c-10.16 0-20.12-4.812-26.34-13.78L128.1 273.3 64 338.9V448c0 17.67-14.31 32-32 32S0 465.67 0 448V64c0-17.66 14.31-31.99 32-31.99s32 14.33 32 32v183.3l201.1-205.7c12.31-12.61 32.63-12.86 45.25-.5 12.62 12.34 12.88 32.61.5 45.25l-137.2 140.3L314.3 429.8z" />
  </svg>
);

export default SvgK;
