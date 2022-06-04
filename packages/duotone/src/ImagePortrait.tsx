import * as React from "react";
import { SVGProps } from "react";

const SvgImagePortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="image-portrait_svg__fa-primary"
      d="M224 288h-64c-44.18 0-80 35.82-80 80 0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80zm-32-32c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64z"
    />
    <path
      d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zM192 128c35.35 0 64 28.65 64 64s-28.65 64-64 64-64-28.7-64-64 28.7-64 64-64zm96 256H96c-8.836 0-16-7.164-16-16 0-44.2 35.8-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgImagePortrait;
