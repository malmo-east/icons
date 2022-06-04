import * as React from "react";
import { SVGProps } from "react";

const SvgScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 304h-48V112c0-44.11-35.9-80-80-80H80C35.89 32 0 67.89 0 112v48c0 26.51 21.49 48 48 48h32v-48H48v-48c0-17.62 14.38-32 32-32s32 14.38 32 32v288c0 44.1 35.9 80 80 80h266.6c64.7 0 117.4-52.7 117.4-117.4V352c0-26.5-21.5-48-48-48zm-304 32v64c0 17.62-14.38 32-32 32s-32-14.38-32-32V112c0-11.39-2.473-22.18-6.781-32H400c17.6 0 32 14.4 32 32v192H256c-17.7 0-32 14.3-32 32zm304 26.6c0 38.3-31.1 69.4-69.4 69.4H265.2c4.3-9.8 6.8-20.6 6.8-32v-48h256v10.6z" />
  </svg>
);

export default SvgScroll;