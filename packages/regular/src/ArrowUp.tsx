import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m6.625 215.5 168-176C179.2 34.7 185.4 32.02 192 32.02s12.84 2.688 17.38 7.438l168 176c9.125 9.594 8.781 24.78-.813 33.94-9.5 9.156-24.75 8.812-33.94-.813L216 115.9V456c0 13.25-10.75 23.1-23.1 23.1S168 469.3 168 456V115.9L41.4 248.6c-9.18 9.6-24.43 9.9-33.962.8-9.594-9.2-9.938-24.4-.813-33.9z" />
  </svg>
);

export default SvgArrowUp;