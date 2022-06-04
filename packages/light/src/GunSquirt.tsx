import * as React from "react";
import { SVGProps } from "react";

const SvgGunSquirt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 112h-18.26C518.6 84.45 493.8 64 464 64H128V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v16c-53.02 0-96 42.1-96 96 0 47.94 35.24 87.33 81.16 94.5L33.25 439.2c-5.84 20.4 9.51 40.8 30.77 40.8h103.8c14.29 0 26.84-9.469 30.77-23.21L227.1 352H288v16c0 8.836 7.164 16 16 16s16-7.164 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-52.2l17.4-64H464c29.79 0 54.6-20.45 61.74-48H544c17.67 0 32-14.33 32-32v-32c0-17.7-14.3-32-32-32zM167.9 448l-103.68-.8L113.8 256H220l-52.1 192zM544 176h-43.03l-6.211 23.98C491.1 214.1 478.4 224 464 224H96c-35.29 0-64-28.7-64-64s28.71-64 64-64h368c14.45 0 27.1 9.879 30.76 24.02L500.1 144H544v32zm-96-32H96c-8.84 0-16 7.2-16 16s7.16 16 16 16h352c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgGunSquirt;
