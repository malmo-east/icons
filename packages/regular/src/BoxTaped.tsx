import * as React from "react";
import { SVGProps } from "react";

const SvgBoxTaped = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M442.5 163.6c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59zM288 160h100.4L357 89.5c-2.5-5.78-8.3-9.5-14.6-9.5h-81.1l26.7 80zM186.7 80h-81.1c-6.33 0-12.06 3.72-14.63 9.5L59.64 160h99.46l27.6-80zM160 208H48v208c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V208H288v48c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48z" />
  </svg>
);

export default SvgBoxTaped;