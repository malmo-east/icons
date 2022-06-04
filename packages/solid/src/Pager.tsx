import * as React from "react";
import { SVGProps } from "react";

const SvgPager = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 64H64C28.63 64 0 92.63 0 128v256c0 35.38 28.62 64 64 64h384c35.38 0 64-28.62 64-64V128c0-35.37-28.6-64-64-64zM160 368H80c-8.87 0-16-7.1-16-16v-16c0-8.9 7.13-16 16-16h80v48zm128-16c0 8.875-7.125 16-16 16h-80v-48h80c8.875 0 16 7.125 16 16v16zm160-128c0 17.62-14.38 32-32 32H96c-17.62 0-32-14.4-32-32v-64c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32v64z" />
  </svg>
);

export default SvgPager;
