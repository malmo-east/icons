import * as React from "react";
import { SVGProps } from "react";

const SvgBracketsSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M120 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V80h72c13.3 0 24-10.75 24-24s-10.7-24-24-24zm296 0h-88c-13.3 0-24 10.75-24 23.1S314.7 80 327.1 80H400v352h-72c-13.3 0-24 10.7-24 23.1s10.7 24.9 23.1 24.9H416c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32z" />
  </svg>
);

export default SvgBracketsSquare;