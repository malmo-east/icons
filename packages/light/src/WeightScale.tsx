import * as React from "react";
import { SVGProps } from "react";

const SvgWeightScale = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 64h-64.75C353.1 25.38 308.1 0 256 0s-98.9 25.38-127.2 64H64C28.75 64 0 92.75 0 128v320c0 35.25 28.75 64 64 64h384c35.25 0 64-28.75 64-64V128c0-35.25-28.7-64-64-64zM256 32c70.75 0 128 57.25 128 128s-57.25 128-128 128-128-57.2-128-128S185.2 32 256 32zm224 416c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V128c0-17.62 14.38-32 32-32h45.5C101 115.6 96 137.2 96 160c0 88.25 71.75 160 160 160s160-71.75 160-160c0-22.75-5-44.38-13.5-64H448c17.62 0 32 14.38 32 32v320zM256 256c26.5 0 48-21.5 48-48 0-13.88-6-26.38-15.5-35.12l30.25-70.63c3.375-8-.375-17.5-8.5-21-8-3.375-17.5.375-21 8.5L259 160.2c-35.4-2.2-51 28.4-51 47.8 0 26.5 21.5 48 48 48zm0-64c8.875 0 16 7.125 16 16s-7.1 16-16 16-16-7.1-16-16 7.1-16 16-16z" />
  </svg>
);

export default SvgWeightScale;
