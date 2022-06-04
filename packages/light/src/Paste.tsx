import * as React from "react";
import { SVGProps } from "react";

const SvgPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m502.6 214.6-77.25-77.25C419.4 131.4 411.2 128 402.7 128H288c-35.3 0-64 28.7-64 64v256c0 35.34 28.65 64 64 64h160c35.35 0 64-28.66 64-64V237.3c0-8.5-3.4-16.7-9.4-22.7zM416 173.3l50.7 50.7H416v-50.7zM480 448c0 17.67-14.33 32-32 32H288c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h96l.01 64c0 17.67 14.33 32 32 32H480v192zM256.7 64.01c13.36.29 24.73 8.805 29.23 20.68C288.6 91.62 295.5 96 302.9 96c10.04 0 17.18-9.805 14.13-19.38C308.8 50.78 284.5 32 256 32c-11.1 0-19.5 11.26-14.5 22.98 1.6 5.89 8.8 8.89 15.2 9.03zM208 64h-2.9c1.7-5.03 2.9-10.36 2.9-16 0-26.47-21.5-48-48-48s-48 21.53-48 48c0 5.637 1.154 10.97 2.947 16H112c-8.8 0-16 7.16-16 16s7.2 16 16 16h96c8.8 0 16-7.16 16-16s-7.2-16-16-16zm-48 0c-8.8 0-16-7.16-16-16s7.2-16 16-16c8.838 0 16 7.164 16 16s-7.2 16-16 16zm17.2 352H64c-17.67 0-32-14.33-32-32V97.71C32 80.21 46.38 63.74 63.88 64c9.95.14 17.72-8.77 15.84-19.03-1.4-7.68-8.64-13.05-16.44-12.97C28.31 32.39 0 60.96 0 96v288c0 35.34 28.65 64 64 64h113.2c8.2 0 14.8-6.6 14.8-14.8v-2.406C192 422.6 185.4 416 177.2 416z" />
  </svg>
);

export default SvgPaste;