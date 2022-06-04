import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m109.2 153.9 112 96c.9 1.5 2.8 3.8 2.8 6.1s-1.9 4.6-2.8 6.1l-112 96c-3.3 2-8.4 2.5-11.27-.9-2.88-3.3-2.49-8.4.86-11.3l104.91-90.8-104.91-89c-3.35-2.9-3.74-8-.86-11.3 2.87-3.4 7.97-3.7 11.27-.9zM408 368c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8h208zm40-336c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 16H64c-26.51 0-48 21.49-48 48v320c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48z" />
  </svg>
);

export default SvgRectangleTerminal;
