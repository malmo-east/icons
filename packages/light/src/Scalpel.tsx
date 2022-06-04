import * as React from "react";
import { SVGProps } from "react";

const SvgScalpel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 320c-8.844 0-15.1 7.156-15.1 16 0 105.3-129.9 133.6-198.6 141.2l129.9-129.9c6.25-6.25 6.25-16.38 0-22.62-6.25-6.25-16.37-6.25-22.62 0l-159.1 160a15.986 15.986 0 0 0-3.469 17.44C3.691 508.1 9.535 512 16 512c94.08 0 271.1-36.78 271.1-176 .9-8.8-6.3-16-15.1-16zM511.4 65.22c-2.625-21.28-13.66-39.85-31.09-52.25C468.1 4.221 453.7 0 439.1 0c-22.07 0-44.44 9.725-60.1 28.1l-196.8 221c-6 7.1-7.4 16.8-3.5 25.2S190.8 288 200 288h127.8c11.37 0 22.19-5 29.69-13.72l136.3-150.3C507.6 107.8 514 86.41 511.4 65.22zm-41.2 37.18L333.3 252.5c-1.4 2.6-3.4 3.5-5.4 3.5H218.1L402.5 48.9c9.9-10.6 23.3-16.9 36.6-16.9 8.353 0 16.16 2.424 22.63 7.045 10.16 7.232 16.35 17.64 17.89 30.11 1.58 12.295-2.12 24.685-9.42 33.245z" />
  </svg>
);

export default SvgScalpel;