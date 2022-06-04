import * as React from "react";
import { SVGProps } from "react";

const SvgSterlingSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M80 256h168c4.4 0 8 3.6 8 8s-3.6 8-8 8H79.83a389.047 389.047 0 0 1-57.22 192H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8 0-1.7.52-3.2 1.408-4.5C40.12 409.4 61.7 341.6 63.83 272H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h56V143.2C64 81.81 113.8 32 175.2 32c12 0 23.9 1.93 35.2 5.71l80.1 26.7c4.2 1.4 5.6 5.93 5.1 10.12-1.4 4.19-5.9 6.46-10.1 5.06l-80.1-26.7c-9.7-3.24-19.9-4.89-30.2-4.89-52.6 0-96.1 42.64-96.1 95.2L80 256z" />
  </svg>
);

export default SvgSterlingSign;
