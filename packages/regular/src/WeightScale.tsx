import * as React from "react";
import { SVGProps } from "react";

const SvgWeightScale = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 264c22.12 0 40-17.88 40-40 0-10.5-4.25-20-11-27.12l33.75-78.63c3.5-8.125-.375-17.5-8.5-21-8-3.5-17.5.25-21 8.5L255.8 184c-22 .3-39.8 18-39.8 40 0 22.1 17.9 40 40 40zM440 64h-48.23C359.5 24.91 310.7 0 256 0c-54.7 0-103.5 24.91-135.8 64H72C32.3 64 0 96.31 0 136v304c0 39.7 32.3 72 72 72h368c39.7 0 72-32.31 72-72V136c0-39.69-32.3-72-72-72zM256 48c70.58 0 128 57.42 128 128s-57.42 128-128 128-128-57.42-128-128S185.4 48 256 48zm208 392c0 13.22-10.77 24-24 24H72c-13.23 0-24-10.78-24-24V136c0-13.22 10.77-24 24-24h20.18C84.42 131.9 80 153.4 80 176c0 97.2 78.8 176 176 176s176-78.8 176-176c0-22.61-4.414-44.14-12.18-64H440c13.23 0 24 10.78 24 24v304z" />
  </svg>
);

export default SvgWeightScale;
