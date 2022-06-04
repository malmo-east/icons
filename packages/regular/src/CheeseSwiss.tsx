import * as React from "react";
import { SVGProps } from "react";

const SvgCheeseSwiss = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 319.9c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM299.9 32.01l-1.5-.01c-7.125.125-14.13 2.508-19.62 7.008L0 255.1v192C0 465.6 14.38 480 32 480h448c17.62 0 32-14.37 32-31.1V255.1c0-119-94.9-216.84-212.1-223.09zM196.5 163.8c8.1 18.1 26.6 29.2 46.4 28.1 19.88-1.25 36.88-14.5 42.88-33.38S285.5 119 269.1 106.6l33.63-26.12c87.75 7.625 155.6 79.38 159.6 167.4h-53.88c-8.5-14.88-24.25-24-41.38-24s-32.88 9.125-41.38 24H88.5l108-84.08zM464 432H48V295.9h278.6c8.5 14.88 24.25 24 41.38 24s32.88-9.125 41.38-24H464V432z" />
  </svg>
);

export default SvgCheeseSwiss;