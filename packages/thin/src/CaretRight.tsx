import * as React from "react";
import { SVGProps } from "react";

const SvgCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m248.5 238.6-144-136C99.94 98.26 94.01 96 87.1 96 74.84 96 64 106.7 64 120v272c0 13.3 10.82 24 23.1 24 6.012 0 11.94-2.26 16.48-6.553l144-136C253.3 268.9 256 262.6 256 255.1s-2.7-12-7.5-16.5zm-11 23.2-144 136c-1.5 1.4-3.45 2.2-6.4 2.2-3.51 0-7.1-3.6-7.1-8V120c0-4.412 3.588-8 7.996-8 2.055 0 4.008.775 5.498 2.184l143.1 135.1C239.1 251.7 240 253.8 240 256s-.9 4.3-2.5 5.8z" />
  </svg>
);

export default SvgCaretRight;
