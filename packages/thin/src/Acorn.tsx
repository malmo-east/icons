import * as React from "react";
import { SVGProps } from "react";

const SvgAcorn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M.001 160zm447.099 0zM352 64.04l-120 .002c.016-1.192.658-28.52 28.8-49.63 3.531-2.657 4.25-7.673 1.609-11.2-2.656-3.532-7.672-4.267-11.2-1.61-34.8 26.11-35.2 60.96-35.2 62.43 0 .016 0-.015 0 0L96 64.04C43.01 64.04.01 107.02.9 160.01.005 177.6 14.38 192 32 192h16v35.64c0 82.61 48.53 191.5 129.7 230.8l42.77 20.78c1.13.48 2.33.78 3.53.78s2.391-.266 3.5-.797l42.75-20.78C351.5 419.2 400 310.3 400 227.6V192h16c17.62 0 31.1-14.37 31.1-31.98 0-53.02-43-95.98-95.1-95.98zm32 163.56c0 77.67-45.16 179.8-120.7 216.4L224 463.1l-39.28-19.09C109.2 407.5 64 305.3 64 227.6V192h320v35.6zm32-51.6H32c-8.818 0-15.1-7.189-15.1-16-.89-44.1 35-79.96 79.1-79.96h256c44.1 0 79.99 35.88 79.1 79.97 0 8.79-6.3 15.99-15.1 15.99z" />
  </svg>
);

export default SvgAcorn;