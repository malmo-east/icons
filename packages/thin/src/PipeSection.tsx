import * as React from "react";
import { SVGProps } from "react";

const SvgPipeSection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 96c-17.66 0-32 14.34-32 32H64c0-17.66-14.34-32-32-32S0 110.3 0 128v256c0 17.66 14.34 32 32 32s32-14.34 32-32h512c0 17.66 14.34 32 32 32s32-14.34 32-32V128c0-17.7-14.3-32-32-32zM48 384c0 8.832-7.168 16-16 16s-16-7.2-16-16V128c0-8.832 7.168-16 16-16s16 7.2 16 16v256zm528-16H64V144h512v224zm48 16c0 8.832-7.168 16-16 16s-16-7.168-16-16V128c0-8.832 7.168-16 16-16s16 7.168 16 16v256z" />
  </svg>
);

export default SvgPipeSection;
