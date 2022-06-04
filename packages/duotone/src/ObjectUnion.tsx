import * as React from "react";
import { SVGProps } from "react";

const SvgObjectUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      className="object-union_svg__fa-primary"
      d="M288 0c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224z"
    />
  </svg>
);

export default SvgObjectUnion;
