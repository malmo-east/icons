import * as React from "react";
import { SVGProps } from "react";

const SvgGem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gem_svg__fa-primary"
      d="M512 224 267.7 474.9c-3.1 3.3-7.3 5.1-11.7 5.1s-8.636-1.828-11.67-5.062L0 224h512z"
    />
    <path
      d="M256 192 400 64H112l144 128zm-33.7 32L112 64 0 224h222.3zm289.7 0L400 64 289.7 224H512z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGem;
