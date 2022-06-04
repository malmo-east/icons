import * as React from "react";
import { SVGProps } from "react";

const SvgSuitcaseRolling = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="suitcase-rolling_svg__fa-primary"
      d="M368 128H80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zm-32 256H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.801 0 16 7.199 16 16 0 8.8-7.2 16-16 16zm0-128H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
    />
    <path
      d="M176.1 48h96v80h47.97l.012-80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48L128 128h48.03V48zM96 496c0 8.9 7.1 16 16 16h32c8.9 0 16-7.1 16-16l.1-16H96.05L96 496zm192 0c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16l.05-16h-63.99l-.06 16zm48-144H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.801 0 16-7.201 16-16 0-8.8-7.2-16-16-16zm-224-96h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSuitcaseRolling;
