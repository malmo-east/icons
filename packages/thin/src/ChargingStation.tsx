import * as React from "react";
import { SVGProps } from "react";

const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M196.8 105.6c3.5 2.7 4.3 7.7 1.6 11.2L136 200h96c3 0 5.8 1.7 7.2 4.4 1.3 2.7 1 6-.8 8.4l-72 96c-2.7 3.5-7.7 4.3-11.2 1.6-3.5-2.7-4.3-7.7-1.6-11.2L216 216h-96c-3.9 0-5.8-1.7-7.2-4.4-1.3-2.7-1-6 .8-8.4l72-96c2.7-3.5 7.7-4.3 11.2-1.6zM32 496V64C32 28.65 60.65 0 96 0h160c35.3 0 64 28.65 64 64v208h8c39.8 0 72 32.2 72 72v44c0 24.3 19.7 44 44 44s44-19.7 44-44V255.6c-40.4-4-72-38.1-72-79.6v-24c0-13.3 10.7-24 24-24h8V72c0-4.42 3.6-8 8-8s8 3.58 8 8v56h64V72c0-4.42 3.6-8 8-8s8 3.58 8 8v56h8c13.3 0 24 10.7 24 24v24c0 41.5-31.6 75.6-72 79.6V388c0 33.1-26.9 60-60 60s-60-26.9-60-60v-44c0-30.9-25.1-56-56-56h-8v208h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24zM48 64v352h256V64c0-26.51-21.5-48-48-48H96c-26.51 0-48 21.49-48 48zm0 368v64h256v-64H48zm392-288c-4.4 0-8 3.6-8 8v24c0 35.3 28.7 64 64 64s64-28.7 64-64v-24c0-4.4-3.6-8-8-8H440z" />
  </svg>
);

export default SvgChargingStation;