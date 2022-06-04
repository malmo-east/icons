import * as React from "react";
import { SVGProps } from "react";

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="trash_svg__fa-primary"
      d="M284.2 0c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31C140.6 6.848 151.7 0 163.8 0h120.4z"
    />
    <path
      d="M32 96h384l-21.4 370.8c-1.5 25.4-22.5 45.2-47.9 45.2H101.3c-25.43 0-46.44-19.8-47.91-45.2L32 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrash;
