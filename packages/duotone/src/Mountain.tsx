import * as React from "react";
import { SVGProps } from "react";

const SvgMountain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="mountain_svg__fa-primary"
      d="M503.2 393.8c11.11 17.4 11.75 39.41 1.668 57.45C494.9 468.1 476.1 480 455.7 480H56.31c-20.39 0-39.24-11.03-49.17-28.77a55.886 55.886 0 0 1 1.666-57.45l128.1-200.6L208 288l48-64h138.8l108.4 169.8z"
    />
    <path
      d="m208 288-71.1-94.8 95.06-148.9c10.42-16.33 37.73-16.33 48.15 0L394.8 224H256l-48 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMountain;
