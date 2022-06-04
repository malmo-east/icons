import * as React from "react";
import { SVGProps } from "react";

const SvgGripDotsVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M32 96c0-17.67 14.33-32 32-32s32 14.33 32 32c0 17.7-14.33 32-32 32s-32-14.3-32-32zm0 160c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zm64 160c0 17.7-14.33 32-32 32s-32-14.3-32-32 14.33-32 32-32 32 14.3 32 32zm64-320c0-17.67 14.3-32 32-32s32 14.33 32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32zm64 160c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-64 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

export default SvgGripDotsVertical;
