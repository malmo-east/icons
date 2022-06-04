import * as React from "react";
import { SVGProps } from "react";

const SvgLasso = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 176c0 97.2-128.9 176-288 176-30.4 0-59.6-2.9-87.1-8.2 19.5 18.1 31.1 43.8 31.1 71.2 0 53.6-43.4 97-97 97H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h95c44.7 0 81-36.3 81-81 0-30.7-17.3-58.7-44.8-72.4l-30.7-15.4C56.36 296.5 0 240.3 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176zM288 336c150.2 0 272-71.6 272-160 0-88.37-121.8-160-272-160S16 87.63 16 176c0 88.4 121.8 160 272 160z" />
  </svg>
);

export default SvgLasso;
