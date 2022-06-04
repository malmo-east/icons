import * as React from "react";
import { SVGProps } from "react";

const SvgExplosion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M539.1.645c3.7 1.564 5.7 5.575 4.6 9.415L450.9 358.2l91.9-14.1c3.3-.5 6.6 1.1 8.2 4.1 1.7 3 1.2 6.7-1.1 9.2l-80 88c-3 3.3-8 3.5-11.3.5-3.2-3-3.5-8-.5-11.3l64.8-71.3-81.7 12.6c-2.7.4-5.4-.5-7.2-2.6-1.8-2-2.4-4.8-1.7-7.4L514 59.44 342.8 340.2c-1.7 2.7-5.7 4.2-8 3.7-3.2-.5-6.7-2.9-6.6-6L288 170.3l-40.2 167.6c-.7 2.8-3.7 5-5.6 5.8-2.8.8-5.8 0-7.9-2L120.2 227.5l39.5 138.3c.7 2.6.1 5.4-1.6 7.4-1.8 2.1-4.5 3.1-7.2 2.7l-98.25-13.1 65.25 71.8c3 3.3 2.8 8.3-.5 11.3s-8.3 2.8-11.3-.5l-80.02-88a8.006 8.006 0 0 1-1.17-9.1c1.56-3 4.82-4.7 8.15-4.2l107.04 14.4-43.79-156.3c-1-3.5.49-8.1 3.63-9.1 3.16-1.8 7.16-1.3 9.76 1.2l125.9 125.9 44.6-186.1c.9-3.6 4.1-6.1 7.8-6.1s6.9 2.5 7.8 6.1l43.5 181.2L529.2 3.836c2-3.395 6.3-4.754 9.9-3.19zM296 88c0 4.42-3.6 8-8 8s-8-3.58-8-8V8.002c0-4.419 3.6-8 8-8s8 3.581 8 8V88zM192.3 496c4.1-49.3 45.4-88 95.7-88 50.3 0 91.6 38.7 95.7 88H568c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h184.3zm16.1 0h159.2c-4-40.4-38.1-72-79.6-72-41.5 0-75.6 31.6-79.6 72z" />
  </svg>
);

export default SvgExplosion;