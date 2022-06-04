import * as React from "react";
import { SVGProps } from "react";

const SvgBridgeCircleExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bridge-circle-exclamation_svg__fa-primary"
      d="M640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144 48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm15.1-128c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80z"
    />
    <path
      d="M32 64c0-17.67 14.33-32 32-32h512c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h72v72.2c-30.4-25.1-69.5-40.2-112-40.2-69.1 0-128.9 39.8-157.7 97.7-5.9-1.1-12-1.7-18.3-1.7-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96V160h72V96H64c-17.67 0-32-14.33-32-32zm376 96h80V96h-80v64zm-48 0V96h-80v64h80zm-208 0h80V96h-80v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBridgeCircleExclamation;
