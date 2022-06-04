import * as React from "react";
import { SVGProps } from "react";

const SvgCanFood = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="can-food_svg__fa-primary"
      d="M367.4 68.27C361.3 101.6 285.2 128 192 128S22.66 101.6 16.59 68.27c-.26 1.61-.59 3.23-.59 4.87v365.7C16 479.3 94.8 512 192 512s176-32.75 176-73.14V73.14c0-1.64-.3-3.26-.6-4.87zM304 427.5c-20.3 9.6-57.4 20.5-112 20.5s-91.73-10.88-112-20.5V293.7c10 3.285 20.7 6.211 32.16 8.672C113 258.1 148.4 224 192 224s78.95 34.96 79.84 78.38c11.46-2.48 21.26-6.28 32.16-8.68v133.8z"
    />
    <path
      d="M192 0C94.8 0 16 28.65 16 64s78.8 64 176 64 176-28.65 176-64S289.2 0 192 0zm0 224c-44.2 0-80 35.8-80 80 0 44.18 35.82 80 80 80s80-35.82 80-80c0-44.2-35.8-80-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCanFood;
