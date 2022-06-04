import * as React from "react";
import { SVGProps } from "react";

const SvgChartBullet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 32c13.3 0 24 10.75 24 24v8h176c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h192v-8c0-13.25 10.7-24 24-24zM160 176h80v-64h-80v64zm128-64v64h176v-64H288zm-176 0H48v64h64v-64zm248 144c13.3 0 24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h288v-8c0-13.3 10.7-24 24-24zM224 400h112v-64H224v64zm160-64v64h80v-64h-80zm-208 0H48v64h128v-64z" />
  </svg>
);

export default SvgChartBullet;