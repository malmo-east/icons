import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeDot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="envelope-dot_svg__fa-primary"
      d="M512 0c35.35 0 64 28.65 64 64s-28.65 64-64 64-64-28.65-64-64 28.7-64 64-64z"
    />
    <path
      d="m48.29 145.3 212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l193.7-150.6C457.5 158.2 416 116.1 416 64H80c-26.51 0-48 21.49-48 48 0 13 6.01 25.3 16.29 33.3zM335.2 335.7C321.7 346.1 305 352 288 352s-33.74-5.863-47.17-16.3L32 173.3V400c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V173.3L335.2 335.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEnvelopeDot;
