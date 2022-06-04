import * as React from "react";
import { SVGProps } from "react";

const SvgGripDotsVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      className="grip-dots-vertical_svg__fa-primary"
      d="M96 96c0 26.5-21.49 48-48 48S0 122.5 0 96c0-26.51 21.49-48 48-48s48 21.49 48 48zm0 160c0 26.5-21.49 48-48 48S0 282.5 0 256s21.49-48 48-48 48 21.5 48 48zM0 416c0-26.5 21.49-48 48-48s48 21.5 48 48-21.49 48-48 48-48-21.5-48-48z"
    />
    <path
      d="M256 96c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.51 21.5-48 48-48s48 21.49 48 48zm0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-96 160c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGripDotsVertical;
