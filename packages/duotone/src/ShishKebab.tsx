import * as React from "react";
import { SVGProps } from "react";

const SvgShishKebab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shish-kebab_svg__fa-primary"
      d="M364.6 277.2 234.7 147.4c-11.87-12-31.37-12-43.25 0l-42.35 42.2c-11.87 12-11.87 31.38 0 43.38l129 129.92c12 11.88 31.37 11.88 43.25 0l42.37-42.38c12.78-11.92 12.78-31.42.88-43.32zm-238.1-21.6c-11.87-12-31.25-12-43.25 0L41 297.85c-11.1 12-11.1 31.38 0 43.25L170.9 471c11.87 12 31.25 12 43.25 0l42.25-42.25c12-12 12-31.38 0-43.38L126.5 255.6z"
    />
    <path
      d="m174.6 303.7 33.95 33.92 22.65-22.52-34-34-22.6 22.6zM7.054 470.1c-9.396 9.375-9.403 24.61-.017 33.99 9.381 9.383 24.6 9.388 33.98.005l81.91-81.9-33.94-33.94L7.054 470.1zM511.2 84.12c-3.875-29.75-21.13-55.75-47.5-71.25-30.37-17.62-67.1-17.13-97.87 1.375-42.62 26.75-58.12 79.75-35.87 124.6 1.5 2.875 2.25 7.125 0 9.5l-47.12 47.12 33.94 33.94 47.14-47.19c16.62-16.75 20.29-42.13 9.042-64.63-9.625-19.5-5.999-48.25 19.62-63.37 14.12-8.5 31.62-8.583 45.87-.583 14.25 8 23.21 20.96 25.21 36.46a49.523 49.523 0 0 1-5.978 30.09c-3.75 6.375-3.354 14.29 1.896 19.54l12.25 12.29c6.75 6.75 18.12 6.126 23.5-1.75C508.6 130.9 514.2 107.4 511.2 84.12z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShishKebab;