import * as React from "react";
import { SVGProps } from "react";

const SvgCoinBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 208C0 128.5 114.6 64 256 64s256 64.5 256 144v112c0 70.7-114.6 128-256 128S0 390.7 0 320V208zm413.5 59.1c39.4-21.3 50.5-44.4 50.5-59.1 0-14.7-11.1-37.8-50.5-60-37.9-21.3-93.5-36-157.5-36-64.9 0-119.6 14.7-157.49 36C59.11 170.2 48 193.3 48 208c0 14.7 11.11 37.8 50.51 59.1C136.4 289.3 191.1 304 256 304c64 0 119.6-14.7 157.5-36.9zM256 352c-13.6 0-27-.6-40-1.7v48a471.705 471.705 0 0 0 80 0v-48c-13.9 1.1-26.4 1.7-40 1.7zm-136 25.7c18.7 7 40.3 12.7 64 16.6v-48.1c-22.8-3.7-44.3-10.1-64-16.2v47.7zm-32-61c-14.96-7.4-28.4-15.7-40-25.6v28c0 7.7 6.21 25.1 40 44v-46.4zm240 29.5v48.1c23.7-3.9 45.3-9.6 64-16.6V330c-19.7 6.1-41.2 12.5-64 16.2zm136-55.1c-11.6 9.9-25.9 18.2-40 25.6v46.4c33.8-18.9 40-36.3 40-43.1v-28.9z" />
  </svg>
);

export default SvgCoinBlank;
