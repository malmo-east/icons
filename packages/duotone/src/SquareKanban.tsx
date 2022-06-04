import * as React from "react";
import { SVGProps } from "react";

const SvgSquareKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-kanban_svg__fa-primary"
      d="M288 160c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zm-192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zm128 96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32z"
    />
    <path
      d="M64 480c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64zm96-192V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32zm128 64c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v192zm-32-128v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareKanban;
