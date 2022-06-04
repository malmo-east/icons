import * as React from "react";
import { SVGProps } from "react";

const SvgSensor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M200 128c-13.2 0-24 10.8-24 24v112c0 13.2 10.8 24 24 24s24-10.8 24-24V152c0-13.2-10.7-24-24-24zm-80 0c-13.2 0-24 10.8-24 24v112c0 13.2 10.8 24 24 24s24-10.8 24-24V152c0-13.2-10.8-24-24-24zm264-96H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.38-28.6-64-64-64zm16 384c0 8.875-7.125 16-16 16H64c-8.875 0-16-7.125-16-16V96c0-8.875 7.125-16 16-16h320c8.875 0 16 7.125 16 16v320z" />
  </svg>
);

export default SvgSensor;