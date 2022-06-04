import * as React from "react";
import { SVGProps } from "react";

const SvgDiamondExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 319.1c-17.66 0-32 14.34-32 32s14.34 32 32 32 32-14.34 32-32-14.3-32-32-32zm-24-168v112c0 13.25 10.75 24 24 24s24-10.75 24-24v-112c0-13.25-10.75-24-24-24s-24 11.6-24 24zm265.7 71.5L289.5 13.5c-19.01-18.02-50.05-18.02-68.06 0L14.27 222.6c-19.04 17.98-19.04 49.03 0 67.01l208.2 208.1c18.02 19.04 49.05 19.04 67.07 0l208.2-208.1c19.06-18.01 19.06-49.01-.04-67.01zM256 463.4 48.64 256.1 254.84 48h.29c.415 0 .798.096 1.056.191.127.034.191.065.256.096l206.9 207.8L256 463.4z" />
  </svg>
);

export default SvgDiamondExclamation;