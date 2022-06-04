import * as React from "react";
import { SVGProps } from "react";

const SvgBlockQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 144c-22.1 0-40 17.9-40 40v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-30.9 25.1-56 56-56h55.8c35.5 0 64.2 28.7 64.2 64.2 0 22.5-11.8 43.4-31.2 55l-44.9 27c-2.4 1.4-3.9 4-3.9 6.9v22c0 5.3-3.6 8-8 8s-8-2.7-8-8v-22c0-8.5 4.4-16.3 11.7-20.6l44.9-27c14.5-8.7 23.4-24.4 23.4-41.3 0-26.6-21.6-48.2-48.2-48.2H192zm16 224c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM96 112c0 8.8-7.16 16-16 16s-16-7.2-16-16 7.16-16 16-16 16 7.2 16 16zm256 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM96 400c0 8.8-7.16 16-16 16s-16-7.2-16-16 7.16-16 16-16 16 7.2 16 16zm256 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm32-368c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 16H64c-26.51 0-48 21.49-48 48v320c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48z" />
  </svg>
);

export default SvgBlockQuestion;
