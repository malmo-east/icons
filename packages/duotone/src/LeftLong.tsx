import * as React from "react";
import { SVGProps } from "react";

const SvgLeftLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="left-long_svg__fa-primary"
      d="M145.7 130c-8.754-3.812-18.95-2.079-25.94 4.406L7.678 238.4c-10.24 9.5-10.24 25.69 0 35.19l112.1 104a24.049 24.049 0 0 0 25.94 4.407 23.992 23.992 0 0 0 14.42-22V151.1c-.038-8.6-5.738-17.3-14.438-21.1z"
    />
    <path
      d="M512 256c0 17.7-14.3 32-32 32H160.1v-64H480c17.7 0 32 14.3 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLeftLong;
