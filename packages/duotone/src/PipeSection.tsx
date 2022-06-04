import * as React from "react";
import { SVGProps } from "react";

const SvgPipeSection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="pipe-section_svg__fa-primary"
      d="M32 96c-17.66 0-32 14.3-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128c0-17.7-14.34-32-32-32zm576 0c-17.66 0-32 14.34-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128c0-17.7-14.3-32-32-32z"
    />
    <path
      d="M576 128v256H64V128h512z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPipeSection;
