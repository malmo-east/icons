import * as React from "react";
import { SVGProps } from "react";

const SvgCartXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 0c11.5 0 21.4 8.19 23.6 19.51l42 220.49h316l43.1-160H472c-13.3 0-24-10.75-24-24s10.7-24 24-24h80c7.5 0 14.5 3.47 19 9.4 4.6 5.93 6.1 13.63 4.2 20.84l-56 207.96c-2.8 10.5-12.3 17.8-23.2 17.8H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM257.8 65.77c9.3-9.37 24.5-9.37 33.9 0L320 94.06l28.3-28.29c9.4-9.37 24.6-9.37 33.9 0 9.4 9.38 9.4 24.57 0 33.95L353.9 128l28.3 28.3c9.4 9.4 9.4 24.6 0 33.9-9.3 9.4-24.5 9.4-33.9 0L320 161.9l-28.3 28.3c-9.4 9.4-24.6 9.4-33.9 0-9.4-9.3-9.4-24.5 0-33.9l28.3-28.3-28.3-28.28c-9.4-9.38-9.4-24.57 0-33.95z" />
  </svg>
);

export default SvgCartXmark;
