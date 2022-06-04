import * as React from "react";
import { SVGProps } from "react";

const SvgSquareParking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-parking_svg__fa-primary"
      d="M192 352c0 17.7-14.3 32-32 32s-32-14.3-32-32V168c0-22.1 17.9-40 40-40h72c53 0 96 42.1 96 96 0 53-43 96-96 96h-48v32zm0-160v64h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48z"
    />
    <path
      d="M192 256v-64h48c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48zM384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm-48 192c0-53.9-43-96-96-96h-72c-22.1 0-40 17.9-40 40v184c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h48c53 0 96-43 96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareParking;
