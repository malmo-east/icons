import * as React from "react";
import { SVGProps } from "react";

const SvgDropletPercent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M186.6 51.36C182.969 38.59 171.52 32 160.03 32c-11.25 0-22.53 6.32-26.55 19.36C90.94 189.3 0 226.9 0 324.1 0 410.18 71.56 480 160 480s160-69.78 160-155.9c0-97.7-90.7-134.1-133.4-272.74zM160 448c-70.58 0-128-55.56-128-123.9 0-40.71 20.56-69.07 49.01-108.3 25.69-35.4 57.29-78.9 78.09-142.63 21.85 64.09 53.46 107.5 79.16 142.9C267.5 255 288 283.2 288 324.1c0 68.3-57.4 123.9-128 123.9zm-32-184c0-13.3-10.7-24-24-24s-24 10.7-24 24 10.69 23.1 24 23.1 24-9.8 24-23.1zm91.3-3.3c-6.25-6.25-16.38-6.25-22.62 0l-96 95.1c-6.25 6.25-6.25 16.37 0 22.62 3.12 3.98 7.22 4.68 11.32 4.68s8.188-1.562 11.31-4.688l96-95.1c6.29-6.212 6.29-16.412-.01-22.612zm-3.3 90.4c-13.31 0-24 10.69-24 23.1s10.69 23.1 24 23.1 24-10.69 24-23.1-10.7-23.1-24-23.1z" />
  </svg>
);

export default SvgDropletPercent;
