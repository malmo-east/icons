import * as React from "react";
import { SVGProps } from "react";

const SvgWarehouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M323 51.12c-1.9-.78-4.1-.78-6.9 0L62.98 154.1C53.93 157.8 48 166.6 48 176.3V488c0 13.3-10.75 24-24 24S0 501.3 0 488V176.3c0-29.3 17.78-55.7 44.95-66.7L298.1 6.634c14.4-5.47 29.4-5.47 42.9 0L595 109.6c27.2 11 45 37.4 45 66.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V176.3c0-9.7-5.9-18.5-15-22.2L323 51.12zM120.3 512h-1.2c-12.4 0-24-10.7-24-24V232c0-22.1 18.8-40 40-40H504c22.1 0 40 17.9 40 40v256c0 13.3-10.7 24-24 24H120.3zm22.8-184v48H496v-48H143.1zM496 464v-40H143.1v40H496zM143.1 280H496v-40H143.1v40z" />
  </svg>
);

export default SvgWarehouse;