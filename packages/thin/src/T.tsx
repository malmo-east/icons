import * as React from "react";
import { SVGProps } from "react";

const SvgT = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 40c0 4.406-3.578 8-8 8H200v424c0 4.406-3.578 8.006-8 8.006s-8-3.606-8-8.006V48H8c-4.422 0-8-3.59-8-8s3.578-8 8-8h368c4.4 0 8 3.59 8 8z" />
  </svg>
);

export default SvgT;
