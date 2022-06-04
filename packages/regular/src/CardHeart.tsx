import * as React from "react";
import { SVGProps } from "react";

const SvgCardHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m182.1 347.8-84.73-85.6c-24.47-24.8-23.16-65.9 4.33-89.1 23.6-20.1 59.9-16.2 81.8 5.6l8.7 9 8.3-9c21.8-21.8 57.7-25.7 82.1-5.6 27.1 23.2 28.5 64.3 4 89.1l-84.4 85.6c-5.6 5.6-14.8 5.6-20.1 0zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm48 0v384c0 8.8 7.16 16 16 16h256c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgCardHeart;