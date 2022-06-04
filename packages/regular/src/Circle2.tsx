import * as React from "react";
import { SVGProps } from "react";

const SvgCircle2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm72-128h-81.8l63.06-57.19c17-16.69 26.38-38.91 26.38-62.56s-9.375-45.88-26.38-62.56c-34.8-34.19-91.45-34.19-126.3 0L172 164.5c-9.5 9.2-9.6 24.4-.3 33.9 9.312 9.469 24.48 9.656 33.94.313L216.6 187.9c16.27-15.94 42.78-15.94 59.02 0 7.734 7.594 12 17.66 12 28.31s-4.266 20.72-11.31 27.66l-108.4 98.31a23.982 23.982 0 0 0-6.266 26.41A23.926 23.926 0 0 0 184 384h144c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgCircle2;
