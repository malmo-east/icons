import * as React from "react";
import { SVGProps } from "react";

const SvgBridgeLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bridge-lock_svg__fa-primary"
      d="M448 320v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm48 0h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32v48z"
    />
    <path
      d="M576 32c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h-8c-61.9 0-112 50.1-112 112v24.6c-9.9 5.7-18.2 14.1-23.8 24.1-17.6-20-43.4-32.7-72.2-32.7-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96V160h72V96H64c-17.67 0-32-14.33-32-32s14.33-32 32-32h512zm-88 64h-80v64h80V96zm-208 0v64h80V96h-80zm-48 0h-80v64h80V96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBridgeLock;
