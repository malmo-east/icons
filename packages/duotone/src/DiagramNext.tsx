import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramNext = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="diagram-next_svg__fa-primary"
      d="M280 224v64h46.1c21.3 0 32 25.9 16.9 40.1L272.1 399c-8.5 9.4-23.7 9.4-33.1 0l-70.9-70.9c-14.2-14.2-3.5-40.1 17.8-40.1H232v-64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H280z"
    />
    <path
      d="M384.1 343.6c16.9-16 20.5-37.2 14.9-55.6h49c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h48.1c-4.7 18.4-2 39.6 14.9 55.6l89.4 88.5c21.9 22.7 57.3 22.7 79.2 0l88.5-88.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiagramNext;
