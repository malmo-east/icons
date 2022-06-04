import * as React from "react";
import { SVGProps } from "react";

const SvgBridge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="bridge_svg__fa-primary"
      d="M0 160h576v128c-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96V160z"
    />
    <path
      d="M0 64c0-17.67 14.33-32 32-32h512c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h-48V96h-80v64h-48V96h-80v64h-48V96h-80v64H72V96H32C14.33 96 0 81.67 0 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBridge;
