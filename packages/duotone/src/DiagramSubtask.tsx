import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramSubtask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="diagram-subtask_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 256c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h160z"
    />
    <path
      d="M96 320v-96h64v96c0 17.7 14.3 32 32 32h32v64h-32c-53.9 0-96-43-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiagramSubtask;
