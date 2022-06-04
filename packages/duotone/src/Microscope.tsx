import * as React from "react";
import { SVGProps } from "react";

const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="microscope_svg__fa-primary"
      d="M160 320h12v16c0 8.875 7.125 16 16 16h40c8.875 0 16-7.125 16-16v-16h12c17.62 0 32-14.38 32-32V64c0-17.62-14.38-32-32-32h-96c-17.6 0-32 14.38-32 32v224c0 17.6 14.4 32 32 32zm304 128h-1.25C493.3 414 512 369.3 512 320c0-105.9-86.13-192-192-192v64c70.63 0 128 57.38 128 128s-57.38 128-128 128H48c-26.5 0-48 21.5-48 48 0 8.9 7.125 16 16 16h480c8.875 0 16-7.125 16-16 0-26.5-21.5-48-48-48z"
    />
    <path
      d="M312 384H104c-4.37 0-8 3.6-8 8v16c0 4.4 3.63 8 8 8h208c4.375 0 8-3.625 8-8v-16c0-4.4-3.6-8-8-8zM256 16c0-8.836-7.2-16-16-16h-64c-8.8 0-16 7.164-16 16v16h96V16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMicroscope;
