import * as React from "react";
import { SVGProps } from "react";

const SvgFlashlight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="flashlight_svg__fa-primary"
      d="M607.1 96h-32v320h32c17.62 0 32-14.38 32-32V128c0-17.6-13.5-32-32-32zm-320 128h-32c-17.62 0-32 14.38-32 32s14.38 32 32 32h32c17.62 0 32-14.38 32-32s-13.5-32-32-32z"
    />
    <path
      d="m400.1 149.2-17 10.8h-352c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h352l16.12 10.75C443.2 391.5 511.1 416 575.1 416V96c-64 0-131.9 24.5-175 53.2zM287.1 288h-32c-17.62 0-32-14.38-32-32s14.38-32 32-32h32c17.62 0 32 14.38 32 32s-13.5 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlashlight;
