import * as React from "react";
import { SVGProps } from "react";

const SvgWineGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M248 464h-63.99V348.5C256.6 336 310.3 269.8 303.4 192.6L287.5 14.5C286.8 6.25 279.9 0 271.8 0H48.23C40.1 0 33.22 6.25 32.47 14.5L16.6 192.6C9.72 269.8 63.35 336 135.1 348.5V464H72c-13.25 0-24 10.75-24 24s10.75 24 24 24h176c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-5.7-416 7.1 80H70.58l7.14-80H242.3zM64.38 197.1l1.86-21.1h187.5l1.867 21.18C260.6 253.7 217.8 304 160 304c-57.9 0-100.62-50.4-95.62-106.9z" />
  </svg>
);

export default SvgWineGlass;
