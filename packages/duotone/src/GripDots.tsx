import * as React from "react";
import { SVGProps } from "react";

const SvgGripDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="grip-dots_svg__fa-primary"
      d="M384 224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm-160 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM64 128c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48z"
    />
    <path
      d="M384 384c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm-160 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM64 288c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGripDots;
