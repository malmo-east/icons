import * as React from "react";
import { SVGProps } from "react";

const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M220.3 445.6c11.9-5 19.7-16.7 19.7-29.6v-80h160c26.51 0 48-21.49 48-48v-64c0-26.51-21.49-48-48-48H240V96c0-12.94-7.797-24.61-19.75-29.56-11.95-4.96-25.75-2.22-34.85 6.94l-176 160C3.125 239.6 0 247.8 0 256s3.125 16.38 9.375 22.62l176 160c9.125 9.18 22.925 11.88 34.925 6.98zM54.63 256 192 134.6V224h208v64H192v89.37L54.63 256z" />
  </svg>
);

export default SvgLeft;