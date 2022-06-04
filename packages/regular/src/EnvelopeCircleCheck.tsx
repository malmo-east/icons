import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M48 128v22.1l172.5 141.6c20.6 17 50.4 17 71 0l50.9-41.8c-13.4 23.9-21.4 51.3-22.3 80.5-38.3 29.9-92.4 29.4-131-1.6L48 212.2V384c0 8.8 7.16 16 16 16h267.1c7.7 17.5 17.3 33.7 29.1 48H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v32.7c-5.3-.5-10.6-.7-16-.7-19.9 0-37.4 3-54.6 8.6l22.6-18.5V128c0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16zm592 208c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-99.3-43.3L480 353.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

export default SvgEnvelopeCircleCheck;