import * as React from "react";
import { SVGProps } from "react";

const SvgObjectExclude = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="object-exclude_svg__fa-primary"
      d="M288 0c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224zm-64 160c-35.3 0-64 28.7-64 64v128h128c35.3 0 64-28.7 64-64V160H224z"
    />
    <path
      d="M352 160v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h128zm-48 48h-96v96h96v-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgObjectExclude;
