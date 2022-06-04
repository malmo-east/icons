import * as React from "react";
import { SVGProps } from "react";

const SvgTaco = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 280c-13.31 0-24 10.69-24 23.1s10.7 24 24 24 24-9.8 24-23.1-10.7-24-24-24zm-64.9 64c-13.31 0-24 10.69-24 23.1 0 13.31 10.69 23.1 24 23.1s24.9-8.9 24.9-23.1c0-12.4-10.7-23.1-24.9-23.1zm368.4 63.7c-2.75-21.12-7.615-42.03-14.61-62.15 2.75-7.125 4.125-14.62 4.125-22.25 0-9.5.625-18.25 3.25-27.62 5.375-18.5 12.63-43.5 3-69.62-13-35.63-47.88-48.75-59.88-58.13-5.25-16.38-6.375-55.12-35.13-78.62-27.13-21.1-56.13-15.12-81.75-15.37-13.88-11.12-36.72-41.88-73.09-41.88-37.63 0-64.66 32.88-75.91 41.88-16.75.125-52.63-8.375-81.75 15.37C70.75 113 69.1 151.8 64.37 168c-12.5 9.5-46.88 22.62-59.75 58-9.496 26-2.246 51.1 3.004 69.4 2.75 9.375 3.375 18.25 3.375 27.75 0 7.625 1.5 15.25 4.25 22.37-7 20.12-11.99 41-14.74 62.13-4.375 34.1 20.5 72.37 59.1 72.37h390.1C490.1 479.1 515.9 442.7 511.5 407.7zm-60 23.4h-391c-8.625 0-13.38-10.5-12.38-18.38 14.75-117.2 104.1-205.7 207.9-205.7s193.1 88.43 207.9 205.7c.98 8.88-4.02 18.38-12.42 18.38z" />
  </svg>
);

export default SvgTaco;