import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsisVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M64 384c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32zm0-160c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32zm0-96c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32s32 14.33 32 32c0 17.7-14.33 32-32 32z" />
  </svg>
);

export default SvgEllipsisVertical;
