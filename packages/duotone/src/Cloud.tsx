import * as React from "react";
import { SVGProps } from "react";

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      d="M96.2 200.1c-.13-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160 59.3 0 111 32.25 138.7 80.2C409.9 101.1 428.3 96 448 96c53 0 96 42.1 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144C64.47 480 0 415.5 0 336c0-62.8 40.17-116.2 96.2-135.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCloud;
