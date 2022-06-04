import * as React from "react";
import { SVGProps } from "react";

const SvgSkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="skeleton_svg__fa-primary"
      d="M288 16v336h-64V16c0-8.875 7.1-16 16-16h32c8.9 0 16 7.125 16 16z"
    />
    <path
      d="M224 160H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h208v-64zm208 96H288v64h144c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zM80 128h144V64H80c-8.87 0-16 7.13-16 16v32c0 8.9 7.13 16 16 16zm368-16V80c0-8.87-7.1-16-16-16H288v64h144c8.9 0 16-7.1 16-16zM64 272v32c0 8.9 7.13 16 16 16h144v-64H80c-8.87 0-16 7.1-16 16zm335.9 80H112.1c-37.31 0-60.36 40.7-41.16 72.7L114 496.47c5.8 9.63 16.2 15.53 27.4 15.53h229.2c11.24 0 21.66-5.898 27.44-15.54l43.06-71.77c19.2-31.99-3.9-72.69-41.2-72.69zM200 464c-13.25 0-24-10.75-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm112 0c-13.25 0-24-10.75-24-24s10.7-24 24-24 24 10.75 24 24-10.7 24-24 24zm184-304H288v64h208c8.9 0 16-7.1 16-16v-32c0-8.9-7.1-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSkeleton;