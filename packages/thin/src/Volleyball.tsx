import * as React from "react";
import { SVGProps } from "react";

const SvgVolleyball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm240 256c0 7.988-.434 15.88-1.199 23.66-32.32 8.461-62.8 11.33-90.32 10.36 5.43-37.38 12.9-153.8-73.44-261.8C426.7 59.78 496 149.9 496 256zm-334.8 98.3c37.7-54 82-81.8 94.6-89.1 15.76 9.23 76.22 41.11 159.6 41.11 23.84 0 49.78-3.273 76.82-9.812-7.727 45.14-28.04 85.93-57.28 118.8C290.9 446.3 188.9 376.4 161.2 354.3zM304 20.84c99.48 109.4 89.8 233.1 84.47 268.2-65.57-5.684-111.9-30.17-124.4-37.48.164-23.13-4.584-129.7-90.93-220.5C199 21.48 226.8 16 256 16c16.4 0 32.5 1.68 48 4.84zM157.2 37.52c23.41 23.71 41.09 48.63 53.99 72.89-35.15 14.01-139.7 65.78-190.1 194.7A239.996 239.996 0 0 1 16 256c0-97.1 58.07-180.73 141.2-218.48zM28.43 331.7c45.09-140.6 156.9-194 189.9-206.9 27.85 59.63 29.8 111.1 29.76 126.5-20.16 11.45-109.8 69.14-145.2 189.3-34.14-28.3-60.13-66-74.46-108.9zm88.37 119.4c8.752-32.09 20.98-60.29 35.5-83.52 25.98 20.44 102.1 71.8 210.7 71.8 16.67 0 34.38-1.812 52.55-4.609C373.1 472.7 317.3 496 256 496c-51.9 0-99.9-16.7-139.2-44.9z" />
  </svg>
);

export default SvgVolleyball;
