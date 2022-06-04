import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightToArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 256c0-132.5-107.5-240-240-240-4.4 0-8-3.58-8-8 0-4.418 3.6-8 8-8 141.4 0 256 114.6 256 256S397.4 512 256 512c-4.4 0-8-3.6-8-8s3.6-8 8-8c132.5 0 240-107.5 240-240zm-146.8-6.1c.9 1.5 2.8 3.7 2.8 6.1 0 2.4-1.9 4.6-2.8 6.1l-152 128c-3.4 2-8.5 2.4-11.3-.9-2.9-3.4-2.4-8.5.9-11.3L322.1 264H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h314.1L186.8 134.1c-3.3-2.8-3.8-7.9-.9-11.3 2.8-3.3 7.9-3.8 11.3-.9l152 128z" />
  </svg>
);

export default SvgArrowRightToArc;
