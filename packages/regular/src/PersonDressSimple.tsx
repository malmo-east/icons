import * as React from "react";
import { SVGProps } from "react";

const SvgPersonDressSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m249.5 343.2-39.08-136.8C202.6 178.9 177.5 160 148.9 160h-41.8c-28.6 0-53.71 18.9-61.56 46.4L6.46 343.2C.61 363.7 15.96 384 37.22 384H64v104c0 13.25 10.75 24 24 24s24-10.75 24-24V384h32v104c0 13.25 10.75 24 24 24s24-10.75 24-24V384h26.78c21.22 0 36.62-20.3 30.72-40.8zM58.43 336l33.26-116.4c1.96-6.9 8.24-11.6 15.41-11.6h41.85c7.144 0 13.42 4.736 15.38 11.6L197.6 336H58.43zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0 63.1 28.62 63.1 64s29.52 64 64.9 64z" />
  </svg>
);

export default SvgPersonDressSimple;