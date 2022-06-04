import * as React from "react";
import { SVGProps } from "react";

const SvgOilWell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M430.4 4.707C473-6.729 516.9 18.6 528.3 61.28l41.5 154.52c11.4 42.7-13.9 86.6-56.6 98l-15.5 4.1c-17 4.6-34.6-5.5-39.2-22.6l-27.2-101.7-336.2 86.9V464h45L198 294.3l55.7-14.4-24.6 72.1h85.8l-27.6-80.8 46.6-12.1 70 204.9H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h24V184c0-13.3 10.75-24 24-24s24 10.7 24 24v46.9l135.7-35.2 17.6-51.5c3.3-9.7 12.4-16.2 21.8-16.2 11.2 0 20.3 6.5 23.6 16.2l11 32.3 113.2-29.3-26.6-99.16c-4.6-17.07 5.5-34.62 22.6-39.192l15.5-4.141zm12.4 46.363 58 216.33c17-4.5 26.3-22.1 22.6-39.2L481.1 73.7c-3.7-17.07-21.2-27.2-38.3-22.63zM353.2 464l-21.9-64H212.7l-21.9 64h162.4z" />
  </svg>
);

export default SvgOilWell;