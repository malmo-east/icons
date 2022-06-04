import * as React from "react";
import { SVGProps } from "react";

const SvgFaucetDrip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 480c0 17.62 14.38 32 32 32s32-14.38 32-32-32-64-32-64-32 46.4-32 64zm-48-320h-44.88c-18.62-23.1-44.72-39.8-75.12-45.6V83.62S366.6 96 368 96c8.8 0 16-7.5 16-16.88V48.89c0-9.375-7.242-16.86-15.99-16.86-1.375 0 6.117-.775-120 13.35V16c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v29.38C73.88 31.25 81.37 32.03 79.99 32.03 71.24 32.03 64 39.51 64 48.89v30.23C64 88.5 71.25 96 80 96c1.375 0 120-12.38 120-12.38v30.75c-30.4 5.83-56.5 22.53-75.1 45.63H23.1C10.75 160 0 170.7 0 183.1S10.75 208 23.1 208h127.7c12.7-29.1 41.5-48 73.2-48s60.5 18.88 73.25 48H368c53.02 0 96 42.98 96 96v32h-64v-32c0-17.6-14.4-32-32-32h-70.75c-12.75 29.1-41.45 48-73.25 48s-60.5-18.9-73.2-48H23.1C10.75 272 0 282.7 0 295.1S10.75 320 23.1 320H124c24.2 29 59.8 48 100 48s75.75-19 99.13-48H352v16c0 26.51 21.49 48 48 48h64c26.51 0 48-21.49 48-48v-32c0-79.5-64.5-144-144-144z" />
  </svg>
);

export default SvgFaucetDrip;