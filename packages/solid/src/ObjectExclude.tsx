import * as React from "react";
import { SVGProps } from "react";

const SvgObjectExclude = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.35 0-64-28.7-64-64V64zm320 128H192v128h128V192z" />
  </svg>
);

export default SvgObjectExclude;
