import * as React from "react";
import { SVGProps } from "react";

const SvgHouseChimney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M272.5 5.7c8.9-7.6 22.1-7.6 31 0L464 141.9V56c0-13.25 10.7-24.9 24-24.9s24 11.65 24 24.9v126.6l55.5 47.1c10.1 8.6 11.4 23.7 2.8 33.8-8.6 10.1-23.7 11.4-33.8 2.8L512 245.5V432c0 44.2-35.8 80-80 80H144c-44.18 0-80-35.8-80-80V245.5l-24.47 20.8c-10.11 8.6-25.25 7.3-33.83-2.8-8.576-10.1-7.334-25.2 2.773-33.8L272.5 5.7zM112 204.8V432c0 17.7 14.3 32 32 32h48V312c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v152h48c17.7 0 32-14.3 32-32V204.8L288 55.47 112 204.8zM240 320v144h96V320h-96z" />
  </svg>
);

export default SvgHouseChimney;
