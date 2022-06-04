import * as React from "react";
import { SVGProps } from "react";

const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="newspaper_svg__fa-primary"
      d="M0 128v304c0 26.5 21.49 48 48 48s48-21.5 48-48V96H32c-17.67 0-32 14.3-32 32zm272 160h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm64 32h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16zm-64 64h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm160 0h-96c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z"
    />
    <path
      d="M480 32H128c-17.7 0-32 14.33-32 32v368c0 26.5-21.49 48-48 48h400c35.35 0 64-28.65 64-64V64c0-17.67-14.3-32-32-32zM272 416h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.836 0 16 7.162 16 16 0 8.8-7.2 16-16 16zm0-96h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16zm160 96h-96c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16 0 8.8-7.2 16-16 16zm0-96h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16zm16-112c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNewspaper;