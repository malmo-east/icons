import * as React from "react";
import { SVGProps } from "react";

const SvgAppleWhole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="apple-whole_svg__fa-primary"
      d="M320 0v32c0 44.18-35.82 80-80 80h-32V80c0-44.18 35.82-80 80-80h32z"
    />
    <path
      d="M336 128c-32 0-80.02 16.03-112 32.03-32.01-16-79.1-32.02-111.1-32.03C32 128 .413 210.5.003 288c-.531 99.97 63.99 224 159.1 224 32 0 48-16 64-16s32 16 64 16c96 0 160.4-122.8 159.1-224C447.7 211.6 416 128 336 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAppleWhole;
