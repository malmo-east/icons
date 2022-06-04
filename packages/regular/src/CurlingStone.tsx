import * as React from "react";
import { SVGProps } from "react";

const SvgCurlingStone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 224c0-35.35-28.65-64-64-64H224v-40c0-22.06 17.9-40 40-40h128c13.3 0 24-10.75 24-24s-10.7-24-24-24H264c-48.5 0-88 39.47-88 88l-.9 40H160c-35.3 0-64.9 28.7-64.9 64-53.02 0-96 42.98-96 96v64c0 53.02 42.98 96 96 96h384c53.02 0 96-42.98 96-96v-64c.9-53.9-42.1-96-95.1-96zM96 272h384c26.47 0 48 21.53 48 48v8H48v-8c0-26.5 21.53-48 48-48zm384 160H96c-26.47 0-48-21.53-48-48v-8h480v8c0 26.5-21.5 48-48 48z" />
  </svg>
);

export default SvgCurlingStone;
