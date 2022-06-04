import * as React from "react";
import { SVGProps } from "react";

const SvgStairs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 48c0 8.84-7.2 16-16 16H448v112c0 8.8-7.2 16-16 16H304v144c0 8.844-7.156 16-16 16H160v112c0 8.8-7.2 16-16 16H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h112V336c0-8.8 7.2-16 16-16h128V176c0-8.8 7.2-16 16-16h128V48c0-8.84 7.2-16 16-16h128c8.8 0 16 7.16 16 16z" />
  </svg>
);

export default SvgStairs;
