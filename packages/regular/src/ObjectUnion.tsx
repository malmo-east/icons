import * as React from "react";
import { SVGProps } from "react";

const SvgObjectUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 352c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64zm144-48v144c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16H304V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16v224c0 8.8 7.16 16 16 16h144z" />
  </svg>
);

export default SvgObjectUnion;