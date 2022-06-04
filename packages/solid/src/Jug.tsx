import * as React from "react";
import { SVGProps } from "react";

const SvgJug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M447.1 167.1c.125-30.25-18.75-57.27-47.13-67.64-28.38-10.37-60.12-1.82-79.5 21.31l-10.37-12.89c-2-3.78-4-7.28-4.9-11.88H142.7c-.8 4.6-2.8 9-6.6 12.8l-76.93 96.16C41.93 227.5 31.1 255.8 31.1 284.9V448c0 35.38 28.75 64 64 64h256c35.38 0 64-28.63 64-64V284.9a126.465 126.465 0 0 0-11.13-51c27.13-11.5 43.13-37.3 43.13-66.8zm-96 216c0 17.62-14.38 32-32 32h-192c-17.62 0-32-14.38-32-32v-64c0-17.62 14.38-32 32-32h192c17.62 0 32 14.38 32 32v64zm26.3-191.4-24.13-30.13c2.875-10.12 11.75-17.63 22.75-17.63 12.88 0 23.5 10.25 23.88 23.25.3 12.91-9.7 22.91-22.5 24.51zM151.1 64h144c6.375 0 12.5-2.5 17-7s7-10.62 7-17V24c0-6.375-2.5-12.5-7-17s-10.62-7-17-7h-144c-6.375 0-12.5 2.5-17 7s-7 10.62-7 17v16c0 6.375 2.5 12.5 7 17s11.5 7 17 7z" />
  </svg>
);

export default SvgJug;