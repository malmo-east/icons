import * as React from "react";
import { SVGProps } from "react";

const SvgMug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 64H56c-6.37 0-12.5 2.5-17 7s-7 10.63-7 17v264c0 53 43 96 96 96h192c53 0 96-43 96-96v-64h48c61.8 0 112-50.2 112-112S525.8 64 464 64zm-64 288c0 44.11-35.89 80-80 80H128c-44.11 0-80-35.89-80-80V88c0-5.129 4.172-8 8-8h344v272zm64-80h-48V80h48c52.94 0 96 43.06 96 96s-43.1 96-96 96z" />
  </svg>
);

export default SvgMug;
