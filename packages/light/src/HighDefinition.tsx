import * as React from "react";
import { SVGProps } from "react";

const SvgHighDefinition = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v320zM256 160c-8.8 0-16 7.2-16 16v64h-96v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.156 16-16v-64h96v64c0 8.8 7.2 16 16 16s16-7.156 16-16V176c0-8.8-7.2-16-16-16zm128 0h-48c-8.8 0-16 7.2-16 16v160c0 8.844 7.156 16 16 16h48c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 160h-32V192h32c35.28 0 64 28.7 64 64s-28.7 64-64 64z" />
  </svg>
);

export default SvgHighDefinition;
