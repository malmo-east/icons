import * as React from "react";
import { SVGProps } from "react";

const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 144c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm0 208c-9.5 0-18.8-.7-27.9-2.2l-28 26.3c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24V376c0-6.4 2.529-12.5 7.029-17L162.2 203.9c-1.4-9.1-2.2-18.4-2.2-27.9C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176zm0-48c70.7 0 128-57.3 128-128S406.7 48 336 48s-128 57.3-128 128c0 6.9.5 13.7 1.6 20.3l3.8 24.2L47.1 385.9V464h64v-64h64v-64h79l37.4-37.4 24.2 3.8c6.6 1.1 13.4 1.6 20.3 1.6z" />
  </svg>
);

export default SvgKey;