import * as React from "react";
import { SVGProps } from "react";

const SvgBridgeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bridge-circle-check_svg__fa-primary"
      d="M352 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm211.3-20.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L480 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72z"
    />
    <path
      d="M32 64c0-17.67 14.33-32 32-32h512c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h72v72.2c-30.4-25.1-69.5-40.2-112-40.2-69.1 0-128.9 39.8-157.7 97.7-5.9-1.1-12-1.7-18.3-1.7-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96V160h72V96H64c-17.67 0-32-14.33-32-32zm376 96h80V96h-80v64zm-48 0V96h-80v64h80zm-208 0h80V96h-80v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBridgeCircleCheck;
