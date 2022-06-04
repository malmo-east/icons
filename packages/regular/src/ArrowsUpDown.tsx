import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M127.1 511.1a24.016 24.016 0 0 1-17.62-7.719l-96-104a23.881 23.881 0 0 1-6.375-16.28c0-6.469 2.594-12.91 7.719-17.62 9.75-9 24.94-8.406 33.91 1.344l54.38 58.91V85.37L49.62 144.3c-8.97 9.7-24.15 10.3-33.9 1.3-5.13-4.7-7.722-11.1-7.722-18.5 0-5.812 2.094-11.66 6.375-16.28l96-104c4.531-4.906 10.94-7.719 17.62-7.719s13.09 2.812 17.62 7.719l96 104c9.031 9.781 8.375 24.97-1.344 33.91-9.75 9-24.94 8.406-33.91-1.344l-54.38-58.91v341.3l54.38-58.91c8.969-9.75 24.16-10.34 33.91-1.344 9.719 8.969 10.38 24.12 1.344 33.91l-96 104C141.1 509.2 134.7 511.1 127.1 511.1z" />
  </svg>
);

export default SvgArrowsUpDown;
