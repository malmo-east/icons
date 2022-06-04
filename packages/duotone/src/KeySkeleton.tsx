import * as React from "react";
import { SVGProps } from "react";

const SvgKeySkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="key-skeleton_svg__fa-primary"
      d="M160 144C160 64.47 224.5 0 304 0s144 64.47 144 144c0 79.5-64.5 144-144 144s-144-64.5-144-144zm144 80c44.2 0 80-35.8 80-80 0-44.18-35.8-80-80-80s-80 35.82-80 80c0 44.2 35.8 80 80 80z"
    />
    <path
      d="m227.3 265.9-86 86.1 41.3 41.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L96 397.3 77.25 416l41.35 41.4c12.5 12.5 12.5 32.7 0 45.2s-32.73 12.5-45.23 0l-63.998-64c-12.496-12.5-12.496-32.7 0-45.2L182.1 220.7c11.5 18.2 27 33.7 45.2 45.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgKeySkeleton;
