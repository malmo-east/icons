import * as React from "react";
import { SVGProps } from "react";

const SvgTilde = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 184v88.75C448 334.1 398.1 384 336.8 384c-38.34 0-74.66-20.28-94.75-52.97L165.1 206.1c-11.4-18.6-32-30.1-53.8-30.1-34.92 0-63.3 28.4-63.3 63.3V328c0 13.3-10.75 24-24 24S0 341.3 0 328v-88.7C0 177.9 49.91 128 111.3 128c38.34 0 74.66 20.28 94.75 52.97l76.88 124.9C294.3 324.5 314.9 336 336.8 336c34.8 0 63.2-28.4 63.2-63.2V184c0-13.2 10.8-24 24-24s24 10.8 24 24z" />
  </svg>
);

export default SvgTilde;