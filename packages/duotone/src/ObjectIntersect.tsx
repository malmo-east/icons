import * as React from "react";
import { SVGProps } from "react";

const SvgObjectIntersect = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="object-intersect_svg__fa-primary"
      d="M160 224c0-35.3 28.7-64 64-64h128v128c0 35.3-28.7 64-64 64H160V224z"
    />
    <path
      d="M64 352c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64zm0-64h96v64h64v96h224V224h-96v-64h-64V64H64v224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgObjectIntersect;
