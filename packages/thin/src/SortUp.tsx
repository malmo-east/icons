import * as React from "react";
import { SVGProps } from "react";

const SvgSortUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12L179.6 40.08a27.534 27.534 0 0 0-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zm-8.05-36 132.3-136.6c2.19-2.21 4.19-3.4 8.09-3.4 3.09 0 6.006 1.215 8.027 3.232l132.5 136.1c4.932 4.932 3.385 10.48 2.49 12.64C302.2 202.1 299.3 208 292.3 208H27.66c-6.99 0-9.82-5.9-10.72-7.2-.89-2.1-2.44-7.7 2.67-12.8z" />
  </svg>
);

export default SvgSortUp;