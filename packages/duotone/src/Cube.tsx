import * as React from "react";
import { SVGProps } from "react";

const SvgCube = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="cube_svg__fa-primary"
      d="M234.5 5.709a63.853 63.853 0 0 1 43 0l192 68.571c24.6 9.1 42.5 33.22 42.5 60.32v242.8c0 27.1-17.9 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43 0L42.47 437.7C17 428.6 0 404.5 0 377.4V134.6c0-27.1 17-51.22 42.47-60.32L234.5 5.709zM256 65.98 82.34 128 256 190l173.7-62L256 65.98zM224 434.6v-188L64 189.4v188l160 57.2zm64 0 160-57.2v-188l-160 57.2v188z"
    />
    <path
      d="M224 246.6v188L64 377.4v-188l160 57.2zm224 130.8-160 57.2v-188l160-57.2v188z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCube;
