import * as React from "react";
import { SVGProps } from "react";

const SvgTape = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="tape_svg__fa-primary"
      d="M544 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H224C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 62.7-25.7 119.3-67.2 160H544zM224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S312.4 96 224 96z"
    />
    <path
      d="M64 256c0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160S64 344.4 64 256zm160 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTape;
