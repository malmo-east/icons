import * as React from "react";
import { SVGProps } from "react";

const SvgCaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M168 96c-6.012 0-11.94 2.26-16.48 6.551l-144 136C2.721 243.1 0 249.4 0 255.1s2.721 12.91 7.52 17.45l144 136C156.1 413.7 161.1 416 168 416c13.2 0 24-10.7 24-24V120c0-13.3-10.8-24-24-24zm8 296c0 4.41-3.588 8-7.996 8a7.983 7.983 0 0 1-5.498-2.184l-143.1-136C16.91 260.3 16 258.2 16 256s.914-4.312 2.506-5.816l143.1-135.1C163.1 112.8 165.1 112 168 112c4.4 0 8 3.6 8 8v272z" />
  </svg>
);

export default SvgCaretLeft;
