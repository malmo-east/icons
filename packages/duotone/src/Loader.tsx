import * as React from "react";
import { SVGProps } from "react";

const SvgLoader = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="loader_svg__fa-primary"
      d="M288 0c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.67 14.3-32 32-32zM32 256c0-17.7 14.33-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.67 0-32-14.3-32-32zm165.5-135.8c11.6 12.5 11.6 31.9 0 45.3-13.4 11.6-32.8 11.6-45.3 0l-46.1-45.3c-11.62-12.5-11.62-32.72 0-45.22 13.4-12.49 33.6-12.49 46.1 0l45.3 45.22z"
    />
    <path
      d="M423.8 74.97c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.73 0 45.23l-45.2 45.3c-12.5 11.6-32.8 11.6-45.3 0-12.5-13.4-12.5-32.8 0-45.3l45.3-45.23zM416 255.1c0-16.8 14.3-32 32-32h64c17.7 0 32 15.2 32 32 0 18.6-14.3 32-32 32h-64c-17.7 0-32-13.4-32-32zm-128.9 128c18.6 0 32.9 15.2 32.9 32v64c0 18.6-14.3 32-32.9 32-16.8 0-32-13.4-32-32v-64c0-16.8 15.2-32 32-32zm181.9 8.7c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-45.3-45.2c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l45.2 45.3zM106.1 437c-11.62-12.5-11.62-32.7 0-45.2l46.1-45.3c12.5-12.5 31.9-12.5 45.3 0 11.6 12.5 11.6 32.8 0 45.3L152.2 437c-12.5 12.5-32.7 12.5-46.1 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLoader;
