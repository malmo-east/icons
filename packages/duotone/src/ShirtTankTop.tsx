import * as React from "react";
import { SVGProps } from "react";

const SvgShirtTankTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="shirt-tank-top_svg__fa-primary"
      d="M384 256v208c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.5-48-48V256c31.16-41.54 48-92.07 48-144V16c0-8.838 7.16-16 16-16h32c8.836 0 16 7.162 16 16v112c0 44.18 35.82 80 80 80s80-35.82 80-80V16c0-8.838 7.2-16 16-16h32c8.836 0 16 7.162 16 16v96c0 51.9 16.8 102.5 48 144z"
    />
    <path
      d="M272 96v32c0 44.18-35.82 80-80 80s-80-35.8-80-80V96h160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShirtTankTop;
