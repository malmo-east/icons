import * as React from "react";
import { SVGProps } from "react";

const SvgDoorOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 288c13.25 0 24-14.37 24-31.1S237.3 224 224 224s-24 14.4-24 32 10.8 32 24 32zM288 0c-2.5 0-5.1.382-7.7 1.007l-192 49.75C73.1 54.51 64 67.76 64 82.88V464H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h264c17.67 0 32-14.33 32-32V33.13C320 14.38 305.3 0 288 0zm-16 464H112V94.13l160-41.38V464zm280 0h-40V128c0-35.35-28.65-64-64-64l-96 .006V112h96c8.836 0 16 7.162 16 16v352c0 17.67 14.33 32 32 32h56c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24z" />
  </svg>
);

export default SvgDoorOpen;