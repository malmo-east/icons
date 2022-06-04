import * as React from "react";
import { SVGProps } from "react";

const SvgBlanket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="blanket_svg__fa-primary"
      d="M448 432v32c0 8.75-7.25 16-16 16H128C57.25 480 0 422.75 0 352c0-70.58 57.42-128 128-128h240c43.17 0 78.24 34.44 79.72 77.26l-.098 11.12C443.4 354 405.1 384 363.3 384H128c-17.75 0-32-14.25-32-32s14.25-32 32-32h240c8.75 0 16-7.25 16-16s-7.2-16-16-16H128c-35.25 0-64 28.75-64 64s28.75 64 64 64h304c8.8 0 16 7.3 16 16z"
    />
    <path
      d="M448 128s-.092 133.7-.277 173.3C446.2 258.4 411.2 224 368 224H128C57.42 224 0 281.42 0 352V128c0-52.88 43.13-96 96-96h256c52.9 0 96 43.13 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBlanket;
