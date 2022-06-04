import * as React from "react";
import { SVGProps } from "react";

const SvgIdCardClip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="id-card-clip_svg__fa-primary"
      d="M352 32c0-19.2-12.8-32-32-32h-64c-19.2 0-32 12.8-32 32v96h128V32zm-64 320c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm64 32H224c-26.51 0-48 21.49-48 48 0 8.8 7.2 16 16 16h192c8.836 0 16-7.164 16-16 0-26.5-21.5-48-48-48z"
    />
    <path
      d="M528 64H352v64h16c9.6 0 16 6.4 16 16s-6.4 16-16 16H208c-9.6 0-16-6.4-16-16s6.4-16 16-16h16V64H48C22.4 64 0 86.4 0 112v352c0 25.6 22.4 48 48 48h480c25.6 0 48-22.4 48-48V112c0-25.6-22.4-48-48-48zM288 224c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.66-64-64 28.7-64 64-64zm96 224H192c-8.836 0-16-7.164-16-16 0-26.5 21.5-48 48-48h128c26.51 0 48 21.49 48 48 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgIdCardClip;
