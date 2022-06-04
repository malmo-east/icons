import * as React from "react";
import { SVGProps } from "react";

const SvgSkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 160H288v-32h144c8.9 0 16-7.1 16-16V80c0-8.87-7.1-16-16-16H288V16c0-8.875-7.1-16-16-16h-32c-8.9 0-16 7.125-16 16v48H80c-8.87 0-16 7.13-16 16v32c0 8.9 7.13 16 16 16h144v32H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h208v32H80c-8.87 0-16 7.1-16 16v32c0 8.9 7.13 16 16 16h144v32H112.1c-37.31 0-60.36 40.7-41.16 72.7L114 496.47c5.8 9.63 16.2 15.53 27.4 15.53h229.2c11.24 0 21.66-5.898 27.44-15.54l43.06-71.77c19.2-31.99-3.9-72.69-41.2-72.69H288v-32h144c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16H288v-32h208c8.9 0 16-7.1 16-16v-32c0-8.9-7.1-16-16-16zM200 464c-13.25 0-24-10.75-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm112-48c13.25 0 24 10.75 24 24s-10.75 24-24 24-24-10.7-24-24 10.7-24 24-24z" />
  </svg>
);

export default SvgSkeleton;
