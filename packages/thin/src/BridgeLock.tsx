import * as React from "react";
import { SVGProps } from "react";

const SvgBridgeLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M600 32c4.4 0 8 3.58 8 8s-3.6 8-8 8h-80v96h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h80V48H40c-4.42 0-8-3.58-8-8s3.58-8 8-8h560zm-96 16H392v96h112V48zm-240 0v96h112V48H264zm-16 0H136v96h112V48zm72 224c-39.8 0-72 32.2-72 72v96c0 22.1-17.9 40-40 40h-32c-22.1 0-40-17.9-40-40v-96c0-39.8-32.2-72-72-72H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h24c48.6 0 88 39.4 88 88v96c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-96c0-48.6 39.4-88 88-88 36.1 0 67.1 21.8 80.7 52.9a63.7 63.7 0 0 0-11.1 16.8c-8.1-30.9-36.2-53.7-69.6-53.7zm208-80c35.3 0 64 28.7 64 64v64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16v-64c0-35.3 28.7-64 64-64zm0 16c-26.5 0-48 21.5-48 48v64h96v-64c0-26.5-21.5-48-48-48zm-96 144v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H448c-8.8 0-16 7.2-16 16z" />
  </svg>
);

export default SvgBridgeLock;