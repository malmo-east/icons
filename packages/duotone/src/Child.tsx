import * as React from "react";
import { SVGProps } from "react";

const SvgChild = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="child_svg__fa-primary"
      d="M415.1 110.8c-13.89-17.14-39.06-19.8-56.25-5.906L307.6 146.4c-47.16 38.19-120.1 38.19-167.3 0l-51.13-41.5C72.02 91 46.8 93.67 32.92 110.8c-13.9 17.2-11.26 42.4 5.91 56.3l51.19 41.47c11.73 9.496 24.63 17.16 37.98 23.92L127.1 480c0 17.62 14.38 32 32 32h15.1c17.63 0 32-14.38 32-32V368h32v112c0 17.62 14.38 32 32 32h15.1c17.63 0 32-14.38 32-32V232.5c13.35-6.756 26.25-14.42 37.97-23.91l51.2-41.47C426.3 153.2 428.1 128 415.1 110.8z"
    />
    <path
      d="M224 144c39.75 0 72-32.25 72-72S263.8 0 224 0s-72.9 32.25-72.9 72 33.1 72 72.9 72z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChild;
