import * as React from "react";
import { SVGProps } from "react";

const SvgQuotes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 288c-35.35 0-64 28.65-64 64s28.65 64 64 64c11.72 0 22.55-3.379 32-8.877V416c0 35.3-28.7 64-64 64-8.844 0-16 7.156-16 16s7.2 16 16 16c52.94 0 96-43.06 96-96v-64c0-35.3-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32zM320 160c0-35.35-28.65-64-64-64-11.7 0-22.6 3.38-32 8.9V96c0-35.3 28.7-64 64-64 8.844 0 16-7.156 16-16s-7.2-16-16-16c-52.9 0-96 43.06-96 96v64c0 35.35 28.65 64 64 64s64-28.7 64-64zm-96 0c0-17.64 14.36-32 32-32s32 14.36 32 32-14.4 32-32 32-32-14.4-32-32zM96 96c-11.72 0-22.55 3.38-32 8.9V96c0-35.3 28.7-64 64-64 8.844 0 16-7.156 16-16s-7.2-16-16-16C75.06 0 32 43.06 32 96v64c0 35.35 28.65 64 64 64s64-28.65 64-64-28.7-64-64-64zm0 96c-17.64 0-32-14.4-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32zm224 96c-35.35 0-64 28.65-64 64s28.65 64 64 64c11.72 0 22.55-3.379 32-8.877V416c0 35.3-28.7 64-64 64-8.844 0-16 7.156-16 16s7.2 16 16 16c52.94 0 96-43.06 96-96v-64c0-35.3-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

export default SvgQuotes;