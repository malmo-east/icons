import * as React from "react";
import { SVGProps } from "react";

const SvgMobileNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="mobile-notch_svg__fa-primary"
      d="M288 64h-32v16c0 8.84-7.2 16-16 16h-96c-8.8 0-16-7.16-16-16V64H96c-8.82 0-16 7.18-16 16v352c0 8.8 7.18 16 16 16h192c8.822 0 16-7.178 16-16V80c0-8.82-7.2-16-16-16zm-48 352h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.838 0 16 7.162 16 16 0 8.8-7.2 16-16 16z"
    />
    <path
      d="M288 0H96C51.82 0 16 35.82 16 80v352c0 44.2 35.82 80 80 80h192c44.18 0 80-35.82 80-80V80c0-44.18-35.8-80-80-80zm16 432c0 8.822-7.178 16-16 16H96c-8.822 0-16-7.178-16-16V80c0-8.82 7.18-16 16-16h32v16c0 8.84 7.2 16 16 16h96c8.8 0 16-7.16 16-16V64h32c8.822 0 16 7.178 16 16v352z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMobileNotch;
