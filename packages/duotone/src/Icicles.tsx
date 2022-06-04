import * as React from "react";
import { SVGProps } from "react";

const SvgIcicles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="icicles_svg__fa-primary"
      d="M337.1 0c21.03 0 36.34 19.94 30.92 40.26l-27.25 102.1-.211-.576-45.52 171.9c-.008.039.007-.04 0 0l.661.516c-2.375 7.625-12.98 7.625-15.36 0L246.3 180.9l-46.49 196.9c-1.875 8.375-13.64 8.375-15.51 0l-45.2-187.3-35.5 124c-2.375 7.125-12.64 7.199-15.14.074L1.357 41.24C-4.768 20.75 10.61 0 31.98 0H337.1z"
    />
    <path
      d="m511.4 37.87-87.54 467.6c-1.625 8.625-14.04 8.635-15.67.01L341.6 142.3l27.25-102.1C374.3 19.94 359 0 337.1 0h142c20.9 0 36.1 18.25 32.3 37.87z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgIcicles;
