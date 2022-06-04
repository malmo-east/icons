import * as React from "react";
import { SVGProps } from "react";

const SvgListUl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 64c17.67 0 32 14.33 32 32 0 17.7-14.33 32-32 32s-32-14.3-32-32c0-17.67 14.33-32 32-32zm424 8c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24 0-13.25 10.7-24 24-24h304zm0 160c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h304zm0 160c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h304zM64 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm0 96c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32z" />
  </svg>
);

export default SvgListUl;
