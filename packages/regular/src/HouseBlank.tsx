import * as React from "react";
import { SVGProps } from "react";

const SvgHouseBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M272.5 5.7c8.9-7.6 22.1-7.6 31 0l264 224c10.1 8.6 11.4 23.7 2.8 33.8-8.6 10.1-23.7 11.4-33.8 2.8L512 245.5V432c0 44.2-35.8 80-80 80H144c-44.18 0-80-35.8-80-80V245.5l-24.47 20.8c-10.11 8.6-25.25 7.3-33.83-2.8-8.576-10.1-7.334-25.2 2.773-33.8L272.5 5.7zM112 204.8V432c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V204.8L288 55.47 112 204.8z" />
  </svg>
);

export default SvgHouseBlank;