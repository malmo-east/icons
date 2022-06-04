import * as React from "react";
import { SVGProps } from "react";

const SvgHatChef = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hat-chef_svg__fa-primary"
      d="M448 320v160c0 17.6-14.4 32-32 32H96c-17.6 0-32-14.4-32-32V320h74.45L112.2 162.7c-1.4-9.6 4.4-17 13.1-18.5 8.562-1.594 16.98 4.336 18.45 13.09L170.9 320H240V160c0-8.844 7.156-16 16-16s16 7.156 16 16v160h69.12l27.12-162.7c1.469-8.75 9.984-14.68 18.45-13.09 8.719 1.438 14.55 9.742 13.09 18.46L373.6 320H448z"
    />
    <path
      d="M512 128c0 41.75-64 192-64 192h-74.45l26.22-157.3c1.469-8.719-4.367-17.02-13.09-18.46-8.469-1.594-16.98 4.336-18.45 13.09L341.1 320H272V160c0-8.844-7.156-16-16-16s-16 7.2-16 16v160h-69.1l-27.1-162.7c-1.469-8.75-9.891-14.68-18.45-13.09-8.75 1.49-14.55 8.89-13.15 18.49L138.4 320H64S0 169.7 0 128c-.125-36.5 20.38-69.88 53.13-86a95.3 95.3 0 0 1 100.6 9.75C177.1 20.5 213.1 0 256 0c41.1 0 78.88 20.5 102.3 51.75C374.9 39 395.1 32.13 416 32c53 0 96 43 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHatChef;