import * as React from "react";
import { SVGProps } from "react";

const SvgEyeDropper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M191 160.1c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0l8 8L338.2 29.82C357.3 10.73 383.2 0 410.2 0 466.4 0 512 45.59 512 101.8c0 27-10.7 52.9-29.8 72L376.1 279l8 8c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-160-160zm273-58.3c0-29.7-24.1-53.8-53.8-53.8-14.3 0-28 5.67-38.1 15.76L266.9 168.1l76.1 77 105.2-105.2c10.1-10.1 15.8-23.8 15.8-38.1zM53.09 328.1 183.4 198.6l34 34L87.03 362.9a24.01 24.01 0 0 0-7.03 17V432h52.1c6.4 0 12.5-2.5 17-7.9l130.3-129.5 34 34L183 458.9a71.983 71.983 0 0 1-50.9 21.1H79.27l-41.96 27.1c-9.52 7.2-22.19 6-30.28-3-8.09-7.2-9.345-19.9-2.999-29.4L32 432.7v-52.8c0-19.1 7.59-37.4 21.09-51.8z" />
  </svg>
);

export default SvgEyeDropper;