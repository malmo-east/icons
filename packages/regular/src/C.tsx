import * as React from "react";
import { SVGProps } from "react";

const SvgC = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M220.8 480C82.7 480 .1 363.9.1 256.9.096 149.4 82.89 32 220.8 32c0 0-.016 0 0 0C315.75 32 384 94.45 384 114.57c0 9.143-7.111 24.02-24 24.02C335.8 138.6 312 80 220.8 80c-108 0-172.76 91.1-172.76 176 0 83.45 64.67 176 172.8 176 91.1 0 115.1-58.58 139.2-58.58 9.122 0 24.01 7.079 24.01 24.01C384 417.2 316.3 480 220.8 480z" />
  </svg>
);

export default SvgC;