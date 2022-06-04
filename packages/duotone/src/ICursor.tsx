import * as React from "react";
import { SVGProps } from "react";

const SvgICursor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      className="i-cursor_svg__fa-primary"
      d="M256 480c0 17.69-14.33 31.1-32 31.1-38.41 0-72.52-17.35-96-44.23-23.48 26.88-57.59 44.23-96 44.23-17.67 0-32-14.31-32-31.1s14.33-32 32-32c35.3 0 64-28.72 64-64V128c0-35.28-28.7-64-64-64C14.33 64 0 49.69 0 32S14.33 0 32 0c38.41 0 72.52 17.35 96 44.23C151.48 17.35 185.59 0 224 0c17.67 0 32 14.31 32 32s-14.33 32-32 32c-35.3 0-64 28.72-64 64v256c0 35.28 28.7 64 64 64 17.7 0 32 14.3 32 32z"
    />
    <path
      d="M32 256c0 17.69 14.33 32 32 32h32v-64H64c-17.67 0-32 14.3-32 32zm160-32h-32v64h32c17.67 0 32-14.31 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgICursor;
