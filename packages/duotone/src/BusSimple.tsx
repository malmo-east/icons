import * as React from "react";
import { SVGProps } from "react";

const SvgBusSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="bus-simple_svg__fa-primary"
      d="M224 0c124.8 0 224 35.2 224 80v336c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V80C0 35.2 99.19 0 224 0zM64 256c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.67 0-32 14.3-32 32v128zm16 144c17.67 0 32-14.3 32-32s-14.33-32-32-32-32 14.3-32 32 14.33 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="M64 128c0-17.7 14.33-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V128zM32 448h96v32c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32v-32zm384 32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32h96v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBusSimple;
