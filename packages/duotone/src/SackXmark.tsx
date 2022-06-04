import * as React from "react";
import { SVGProps } from "react";

const SvgSackXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sack-xmark_svg__fa-primary"
      d="M320 96c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h128zM175 400.1c-9.3-8.5-9.3-23.7 0-33.1l47.1-47-47.1-47.9c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0l47.9 47.1 47-47.1c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1L289.9 320l46.2 47c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-47-46.2-47.9 46.2c-8.5 10.2-23.7 10.2-33.1 0z"
    />
    <path
      d="M144.6 24.88C137.5 14.24 145.1 0 157.9 0h196.2c12.8 0 20.4 14.24 13.3 24.88L320 96H192l-47.4-71.12zM332.1 136.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53.02 0-96-43-96-96 0-165.1 122.3-243.3 179-279.6 4.9-3.1 9.2-5.9 13-8.4h128c3.8 2.5 8.1 5.3 12.1 8.4zm4 135.7c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-47 47.1-47.9-47.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1l47.1 47.9-47.1 47c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l47.9-46.2 47 46.2c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1l-46.2-47 46.2-47.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSackXmark;
