import * as React from "react";
import { SVGProps } from "react";

const SvgArrowPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-pointer_svg__fa-primary"
      d="M318.4 304.5a23.998 23.998 0 0 1-22.45 15.52H143.9L42.28 439.5A23.96 23.96 0 0 1 24 447.953c-2.781 0-5.578-.484-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91 8.63-3.85 18.71-2.34 25.75 3.88l271.1 240c8.43 6.61 10.13 17.11 7.43 26.51z"
    />
    <path
      d="M236.1 414.8c9.495 19.94 1.031 43.81-18.91 53.31-19.95 9.504-43.82 1.035-53.32-18.91l-46.57-97.9 26.6-32.2h47.09l45.11 95.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowPointer;
