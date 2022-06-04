import * as React from "react";
import { SVGProps } from "react";

const SvgSink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sink_svg__fa-primary"
      d="M352 112c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16V96c0-59.2-53.85-106-115.1-94.14-45.6 8.85-76.9 51.5-76.9 97.93v188.2h64v-192c0-17.64 14.36-32 32-32s32 14.36 32 32V112zm-224 96H48c-8.836 0-16 7.162-16 16v15.1c0 9.7 7.16 16.9 16 16.9h64v32h48v-48c0-17.7-14.3-32-32-32zm336 0h-80c-17.67 0-32 14.33-32 32v47.1l48 .9v-32h64c8.838 0 16-7.164 16-15.1v-15.1c0-10.6-7.2-17.8-16-17.8z"
    />
    <path
      d="M32 416c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-32H32v32zm464-128H16c-8.836 0-16 7.164-16 16v32c0 8.836 7.164 16 16 16h480c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSink;
