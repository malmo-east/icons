import * as React from "react";
import { SVGProps } from "react";

const SvgBridgeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M600 32c4.4 0 8 3.58 8 8s-3.6 8-8 8h-80v96h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h80V48H40c-4.42 0-8-3.58-8-8s3.58-8 8-8h560zm-96 16H392v96h112V48zm-240 0v96h112V48H264zm-16 0H136v96h112V48zM64 256c48.6 0 88 39.4 88 88v96c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-96c0-48.6 39.4-88 88-88 12.3 0 24 2.5 34.7 7.1-3.3 4.4-6.3 8-9.2 13.6-7.9-3.1-17.4-4.7-25.5-4.7-39.8 0-72 32.2-72 72v96c0 22.1-17.9 40-40 40h-32c-22.1 0-40-17.9-40-40v-96c0-39.8-32.2-72-72-72H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h24zm501.7 66.3c3.1 3.2 3.1 8.2 0 11.4l-80 80a8.15 8.15 0 0 1-11.4 0l-48-48a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l42.3 42.4 74.3-74.4c3.2-3.1 8.2-3.1 11.4 0zM352 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 128c70.7 0 128-57.3 128-128s-57.3-128-128-128-128 57.3-128 128 57.3 128 128 128z" />
  </svg>
);

export default SvgBridgeCircleCheck;
