import * as React from "react";
import { SVGProps } from "react";

const SvgRankingStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M406.1 61.65c9.3 1.44 13.3 12.94 6.5 19.76l-38 36.69 9 52c.5 9.4-8.3 16.6-16.9 12.3l-46.5-24.5-46.9 24.8c-8.6 4.3-18.3-2.9-16.9-12.2l9-52.1-38-36.99c-6.8-6.82-2.8-18.32 6.5-19.76l52.3-7.54 23.6-47.778c4.3-8.621 16.5-8.262 20.4 0l23.6 47.778 52.3 7.54zM224 304c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V304zm48 160h96V304h-96v160zM0 368c0-26.5 21.49-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-96zm48 96h96v-96H48v96zm544-112c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h96zm0 48h-96v64h96v-64z" />
  </svg>
);

export default SvgRankingStar;
