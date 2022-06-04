import * as React from "react";
import { SVGProps } from "react";

const SvgRampLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="ramp-loading_svg__fa-primary"
      d="M95.1 320H288l84.4 168.8c5.3 10.7-2.4 23.2-14.3 23.2H25.89c-11.9 0-19.632-12.5-14.31-23.2L95.1 320z"
    />
    <path
      d="M0 48C0 21.49 21.49 0 48 0h288c26.5 0 48 21.49 48 48v392.4l-64-128V64H64v248.4l-64 128V48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRampLoading;
