import * as React from "react";
import { SVGProps } from "react";

const SvgSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M152 96c4.4 0 8 3.58 8 8 0 4.4-3.6 8-8 8H72c-4.42 0-8-3.6-8-8 0-4.42 3.58-8 8-8h80zm-88 72c0-4.4 3.58-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.42 0-8-3.6-8-8zm88 56c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.42 0-8-3.6-8-8s3.58-8 8-8h80zM448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 16H224v416h224c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48zM16 96v320c0 26.5 21.49 48 48 48h144V48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgSidebar;
