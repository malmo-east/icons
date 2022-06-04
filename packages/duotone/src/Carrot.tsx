import * as React from "react";
import { SVGProps } from "react";

const SvgCarrot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="carrot_svg__fa-primary"
      d="M512 152c-41.63 50.25-107.5 52.5-151.9 7.875l-8-8C307.5 107.5 309.7 41.75 359.1 0c39.75 32.88 49.75 81 30.25 121.8C430.1 102.3 479.1 112.3 512 152z"
    />
    <path
      d="M298.2 156.6c-52.7-25.7-114.5-10.5-151.1 32.8l55.27 55.31a15.94 15.94 0 0 1 0 22.58c-3.127 3-7.266 4.605-11.39 4.605s-8.068-1.605-11.19-4.605L130.3 217 2.2 479.8c-2.875 6-3 13.25 0 19.63 5.5 11.12 19 15.75 30 10.38l133.6-65.25-49.1-49.26c-6.377-6.125-6.377-16.38 0-22.5 6.25-6.25 16.37-6.25 22.5 0l56.98 56.98 102-49.89c24-11.63 44.5-31.26 57.13-57.13C385.5 261.1 359.9 186.8 298.2 156.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarrot;