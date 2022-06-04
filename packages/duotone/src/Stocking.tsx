import * as React from "react";
import { SVGProps } from "react";

const SvgStocking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="stocking_svg__fa-primary"
      d="m260 449.8-60.97 40.67A127.41 127.41 0 0 1 128.2 512c-41.37 0-81.89-20-106.6-57-39.25-58.75-23.24-138.3 35.5-177.5l39.01-26-.1-155.5h255.1l-.098 161.6C346.6 256.9 341.4 256 336 256c-61.85 0-111.1 50.14-111.1 112-.9 32.4 12.2 61.4 35.1 81.8z"
    />
    <path
      d="M351.1 0H96.01c-17.6 0-32 14.4-32 32v32c0 17.6 14.41 32 32 32h255.1C369.6 96 384 81.6 384 64V32c0-17.6-14.4-32-32.9-32zM224 368c0 32.42 13.99 61.38 36 81.83L280.8 436c44.5-29.75 71.14-79.5 71.14-133.1l-.06-45.28C346.6 256.9 341.4 256 336 256c-61.9 0-112 50.1-112 112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStocking;
