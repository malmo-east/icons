import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 232c-13.25 0-24 10.75-24 24 0 57.34-46.66 104-104 104H145.9l63.03-63.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-104 104c-9.375 9.375-9.375 24.56 0 33.94l104 104C179.7 509.7 185.8 512 192 512s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L145.9 408H360c83.81 0 152-68.19 152-152 0-13.3-10.7-24-24-24zm-336-80h214.1l-63.03 63.03c-9.375 9.375-9.375 24.56 0 33.94C307.7 253.7 313.8 256 320 256s12.28-2.344 16.97-7.031l104-104c9.375-9.375 9.375-24.56 0-33.94l-104-104c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L366.1 104H152C68.19 104 0 172.2 0 255.1 0 269.2 10.75 280 24 280s24-10.7 24-24c0-57.3 46.66-104 104-104z" />
  </svg>
);

export default SvgArrowsRepeat;