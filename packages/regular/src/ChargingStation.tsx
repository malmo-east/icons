import * as React from "react";
import { SVGProps } from "react";

const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M199.6 176H240c6.7 0 12.8 4.2 15 10.6 2.3 6.3.4 12.5-4.8 17.7l-96 80c-5.6 3.8-13.7 4.9-19.6.6-5.9-4.3-8.2-12-5.5-18.8l23.3-58.1H112c-6.7 0-12.75-4.2-15.04-10.6-2.3-6.3-.38-13.4 4.84-17.7l96-79.99c5.6-4.69 13.7-4.96 19.6-.65 5.9 4.34 8.2 12.04 5.5 18.84L199.6 176zM32 464V64C32 28.65 60.65 0 96 0h160c35.3 0 64 28.65 64 64v192h8c48.6 0 88 39.4 88 88v28c0 15.5 12.5 28 28 28s28-12.5 28-28V268.3c-32.5-10.2-56-40.5-56-76.3v-40c0-13.3 10.7-24 24-24h8V80c0-8.84 7.2-16 16-16s16 7.16 16 16v48h32V80c0-8.84 7.2-16 16-16s16 7.16 16 16v48h8c13.3 0 24 10.7 24 24v40c0 35.8-23.5 66.1-56 76.3V372c0 41.1-34.9 76-76 76-42 0-76-34.9-76-76v-28c0-22.1-17.9-40-40-40h-8v160h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8zM80 64v400h192V64c0-8.84-7.2-16-16-16H96c-8.84 0-16 7.16-16 16zm416 160c17.7 0 32-14.3 32-32v-16h-64v16c0 17.7 14.3 32 32 32z" />
  </svg>
);

export default SvgChargingStation;