import * as React from "react";
import { SVGProps } from "react";

const SvgHeat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 152.2v-25.1C64 110.3 49.67 96 32 96S0 110.3 0 127.1v24.25C0 206.1 19.49 258.4 55.78 298.2 81.74 326.68 96.13 363.89 96 402.4v45.63c0 17.67 14.33 31.1 32 31.1s31.1-14.33 31.1-32v-45.61c0-53.9-19.51-106.2-55.84-146C78.2 227.9 63.87 190.8 64 152.2zm327.7 103.6c-25.63-28.39-39.69-65.32-39.69-103.6v-24.25C352 110.3 337.7 96 320 96c-17.7 0-32 14.3-32 31.1v24.25c0 53.86 19.49 106.1 55.77 145.9C369.7 326.7 384.1 363.9 384 402.4v45.63c0 17.67 14.3 31.97 31.1 31.97 18.6 0 32.9-14.3 32.9-32v-45.63c0-54.07-20.1-106.47-56.3-146.57zM208 152.2V63.1c0-16.77-14.3-31.1-32-31.1s-32 14.33-31.1 31.1v88.25c0 53.86 19.49 106.1 55.77 145.9 25.96 28.48 40.35 65.69 40.22 104.2v45.63C239.1 465.7 254.3 480 272 480s31.1-14.33 31.1-32v-45.61c0-53.9-19.51-106.2-55.84-146C222.2 227.9 207.9 190.8 208 152.2z" />
  </svg>
);

export default SvgHeat;
