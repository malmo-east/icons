import * as React from "react";
import { SVGProps } from "react";

const SvgKeyboardBrightness = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="keyboard-brightness_svg__fa-primary"
      d="M192 384c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32z"
    />
    <path
      d="M198.6 217.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-64.03-64c-12.49-12.5-12.49-32.7 0-45.2 12.53-12.5 32.73-12.5 45.23 0l64 64zM288 96c0-17.67 14.3-32 32-32s32 14.33 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V96zm217.4 57.4c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-64 64c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l64-64zM0 384c0-17.7 14.33-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm512 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgKeyboardBrightness;
