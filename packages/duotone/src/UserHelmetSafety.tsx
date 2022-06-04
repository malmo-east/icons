import * as React from "react";
import { SVGProps } from "react";

const SvgUserHelmetSafety = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user-helmet-safety_svg__fa-primary"
      d="M88 176h272c4.375 0 8-3.625 8-8v-32c0-4.375-3.625-8-8-8h-8c0-45-26.88-85.62-68.38-103.2L256 80V16c0-8.875-7.125-16-16-16h-32c-8.875 0-16 7.125-16 16v64l-27.6-55.25C122.9 42.38 96 83 96 128h-8c-4.375 0-8 3.625-8 8v31.1c0 5.3 3.63 8.9 8 8.9zm226.7 176H133.3C59.7 352 0 411.7 0 485.3c0 14.73 11.94 26.67 26.66 26.67H421.3c14.72 0 26.66-11.94 26.66-26.67C448 411.7 388.3 352 314.7 352z"
    />
    <path
      d="M352 192c0 70.69-57.31 128-128 128S96 262.7 96 192c0-5.48.945-10.7 1.613-16h252.8c.687 5.3 1.587 10.5 1.587 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserHelmetSafety;
