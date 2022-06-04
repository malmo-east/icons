import * as React from "react";
import { SVGProps } from "react";

const SvgPager = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M296 304h-72v48h72c13.3 0 24-10.7 24-24s-10.7-24-24-24zM96 327.1c0 14.2 10.7 24.9 23.1 24.9H192v-48h-72.9c-12.4 0-23.1 10.7-23.1 23.1zM392 160H120c-13.2 0-24 10.8-24 24v48c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zm56-96H64C28.62 64 0 92.62 0 128v256c0 35.38 28.62 64 64 64h384c35.38 0 64-28.62 64-64V128c0-35.38-28.6-64-64-64zm16 320c0 8.875-7.125 16-16 16H64c-8.875 0-16-7.125-16-16V128c0-8.875 7.125-16 16-16h384c8.875 0 16 7.125 16 16v256z" />
  </svg>
);

export default SvgPager;