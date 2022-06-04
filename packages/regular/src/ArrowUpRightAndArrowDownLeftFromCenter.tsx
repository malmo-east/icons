import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRightAndArrowDownLeftFromCenter = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M497.2 1.852C494.2.641 491.1 0 488 0H344.9C330.8 0 320 10.75 320 24s10.75 24 24 24h86.06l-135 135c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0l135-135V168c0 13.3 10.8 24 24 24s24-10.8 24-24.9V24c0-3.133-.64-6.25-1.855-9.18A24.226 24.226 0 0 0 497.2 1.852zM14.83 510.1c2.93 1.3 6.05 1.9 9.17 1.9h143.1c14.1 0 24.9-10.7 24.9-24s-10.7-24-24-24H81.94l135-135c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L48 430.1V344c0-13.2-10.75-24-24-24S0 330.8 0 344v144c0 3.133.64 6.25 1.855 9.18C4.289 503 8.965 507.7 14.83 510.1z" />
  </svg>
);

export default SvgArrowUpRightAndArrowDownLeftFromCenter;