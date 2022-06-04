import * as React from "react";
import { SVGProps } from "react";

const SvgTurnUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M318 145.6a23.995 23.995 0 0 1-22 14.41l-80-.91v328c0 13.25-10.75 24-24 24H24c-13.25 0-24-10.75-24-24s10.75-24 24-24h144v-304H88c-9.547 0-18.19-5.656-22-14.41s-2.08-17.99 4.41-24.99l104-112c9.498-10.23 25.69-10.23 35.19 0l104 112c6.5 7 8.2 17.1 4.4 25.9z" />
  </svg>
);

export default SvgTurnUp;