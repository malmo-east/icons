import * as React from "react";
import { SVGProps } from "react";

const SvgWaveTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m635.4 262.2-151.1 208c-5.4 6.1-12.6 9.8-21.2 9.8-7.703-.031-14.98-3.75-19.48-9.969L175.9 96.88 43.38 278.2c-7.859 10.69-22.87 13-33.53 5.219C-.857 275.6-3.201 260.5 4.627 249.8l151.1-208C161.1 35.66 168.3 32 176 32c7.703.031 14.98 3.75 19.48 9.969l268.7 373.2 132.5-181.3c7.812-10.75 22.84-13.03 33.53-5.219 10.69 7.75 12.99 22.85 5.19 33.55z" />
  </svg>
);

export default SvgWaveTriangle;