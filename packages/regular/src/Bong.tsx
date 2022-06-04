import * as React from "react";
import { SVGProps } from "react";

const SvgBong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m467.1 211.7-41.35-41.45c-9.353-9.375-24.54-9.384-33.9-.02-9.356 9.356-9.468 24.64-.112 33.99l3.746 3.747-39.37 39.38c-11.5-11.38-24.5-21.25-38.63-29.5V47.75h8.121c13.13 0 23.88-10.75 23.88-23.88 0-13.19-10.7-23.88-23.89-23.86L118.2.246C105 .26 94.35 10.95 94.35 24.13c0 13.19 10.69 23.88 23.88 23.88h8.121v169.9c-57.38 33.25-95.1 95.12-95.1 166.1 0 43.07 14.29 82.87 38.35 114.9 5.382 7.158 16.94 13.14 25.9 13.14h255.4c9.024 0 20.68-6.02 26.1-13.24 24.01-31.98 38.28-71.74 38.28-114.8 0-36.13-10.12-69.75-27.5-98.63l43.5-43.37 3.715 3.715c9.369 9.369 24.66 9.327 33.97-.094C477.3 236.2 477.3 221.1 467.1 211.7zm-316.7 47.7 24-13.88V48.02h96v197.5l24 13.88c24.75 14.38 44 35.75 56.5 60.63h-257c12.5-24.93 31.7-46.23 56.5-60.63z" />
  </svg>
);

export default SvgBong;