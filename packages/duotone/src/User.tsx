import * as React from "react";
import { SVGProps } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user_svg__fa-primary"
      d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3c0-95.7-77.6-173.3-173.3-173.3z"
    />
    <path
      d="M352 128c0 70.69-57.3 128-128 128S96 198.7 96 128 153.31 0 224 0c70.7 0 128 57.31 128 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUser;
