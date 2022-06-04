import * as React from "react";
import { SVGProps } from "react";

const SvgChestnut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chestnut_svg__fa-primary"
      d="M448 352c0 11.11-1.859 21.71-4.523 31.99H4.523C1.859 373.7 0 363.1 0 352 0 216.8 80.44 151.7 145.1 99.43c25.3-20.56 49.3-39.99 66.4-61.41 3.3-4.01 7.9-6.02 12.5-6.02s9.246 2.006 12.45 6.02c17.12 21.42 41.12 40.85 66.48 61.41C367.6 151.7 448 216.8 448 352z"
    />
    <path
      d="M4.523 384C18.8 439.1 68.43 480 128 480h192c59.57 0 109.2-40.89 123.5-96H4.523z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChestnut;
