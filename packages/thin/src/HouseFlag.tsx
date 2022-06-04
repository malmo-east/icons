import * as React from "react";
import { SVGProps } from "react";

const SvgHouseFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M456 0c4.4 0 8 3.582 8 8v24h160c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16H464v320h-16V8c0-4.418 3.6-8 8-8zm8 176h160V48H464v128zm-48-18.9L272 50 80 194v254c0 26.5 21.5 48 48 48h64V344c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v152h64v16H128c-35.34 0-64-28.7-64-64V206l-43.2 32.4c-3.53 2.7-8.55 1.9-11.198-1.6-2.65-3.5-1.934-8.5 1.598-11.2l256-192c2.8-2.13 5.9-2.13 9.6 0L416 137.1v20zM328 336H216c-4.4 0-8 3.6-8 8v152h128V344c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgHouseFlag;
