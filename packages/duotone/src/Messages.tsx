import * as React from "react";
import { SVGProps } from "react";

const SvgMessages = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="messages_svg__fa-primary"
      d="M640 191.1v191.1c0 35.25-28.75 63.1-64 63.1h-32v54.24c0 7.998-9.125 12.62-15.5 7.873l-82.75-62.12L319.1 447.1c-34.4 0-63.1-27.9-63.1-64v-31.98l96-.002c52.88 0 96-43.12 96-95.99V128h128c35.3 0 64 28.7 64 63.1z"
    />
    <path
      d="M352 0H64C28.75 0 0 28.75 0 63.1V256c0 35.2 28.75 64 64 64l32 .01v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9c35.25.125 64-28.68 64-63.92V63.1C416 28.75 387.3 0 352 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMessages;
