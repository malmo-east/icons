import * as React from "react";
import { SVGProps } from "react";

const SvgSendBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 0c35.3 0 64 28.65 64 64v64H224c-53.9 0-96 42.1-96 96v128H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224zM160 224c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V224zm48 0v224c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" />
  </svg>
);

export default SvgSendBackward;