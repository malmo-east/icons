import * as React from "react";
import { SVGProps } from "react";

const SvgT = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 56c0 13.25-10.75 24-24 24H216v376c0 13.25-10.75 24.01-24 24.01S168 469.3 168 456V80H24C10.75 80 0 69.25 0 56s10.75-24 24-24h336c13.3 0 24 10.75 24 24z" />
  </svg>
);

export default SvgT;
