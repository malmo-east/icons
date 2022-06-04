import * as React from "react";
import { SVGProps } from "react";

const SvgBroccoli = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448.6 154.3c2.2-7.1 3.4-14.5 3.4-21.9 0-40.91-34.09-74.17-76-74.17a76.738 76.738 0 0 0-23.09 3.547C336.3 24.61 298.8 0 256 0s-80.3 24.61-96.9 61.73c-7.4-2.34-15.2-3.54-23.1-3.54-41.91 0-76 33.27-76 74.17 0 7.484 1.156 14.86 3.438 21.92C25.28 170.4 0 206.1 0 248.7c0 56.36 46.64 102.2 104.3 103.1C185.9 454.1 162.1 512 192 512c8.148 0 16.01-6.535 16.01-15.1 0-7.568-16.31-75.65-63.87-144h50.39c49.97 69 41.67 89.8 61.47 89.8 19.8 0 11.48-20.85 61.47-90.72h50.37c-47.35 68.04-63.85 136.6-63.85 144C303.1 505.6 311.9 512 320 512c29.29 0 6.226-56.19 87.68-160.2C465.3 350.9 512 305.1 512 248.7c0-42.6-25.3-78.3-63.4-94.4zM256 390.6c-7.9-14.8-15.6-27.6-22.8-38.6h45.51c-7.11 11-14.81 23.8-22.71 38.6zM405.1 320h-2.029a15.392 15.392 0 0 0-7.714 0H105.1C65.19 320 32 288 32 248.7c0-33.2 23.53-61.6 57.19-69.2 7.145-1.602 12.5-7.94 12.5-15.57 0-10.02-9.686-13.35-9.686-31.57 0-23.25 19.75-42.17 44-42.17 18.96 0 22.9 9.373 32.47 9.373 7.591 0 13.93-5.231 15.59-12.28C191.8 54.73 221.4 32 256 32s64.16 22.73 71.94 55.28c1.692 7.147 8.135 12.3 15.6 12.3 9.549 0 13.43-9.391 32.47-9.391 24.25 0 44 18.92 44 42.17 0 18.19-9.686 21.56-9.686 31.57 0 7.62 5.342 13.97 12.5 15.57C456.5 187.1 480 215.5 480 248.7c0 39.3-33.2 71.3-74.9 71.3z" />
  </svg>
);

export default SvgBroccoli;
