import * as React from "react";
import { SVGProps } from "react";

const SvgCircleEllipsisVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-ellipsis-vertical_svg__fa-primary"
      d="M256 320c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm0-96c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm0-32c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
    />
    <path
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm32-160c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-64-96c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm64-96c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleEllipsisVertical;
