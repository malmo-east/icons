import * as React from "react";
import { SVGProps } from "react";

const SvgPaintbrush = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="paintbrush_svg__fa-primary"
      d="M320 368c-1.6 0-3.1-.9-4.7-.1.2.4.3.8.4 1.2l-94.6-80.3c1.5.1 3 .3 4.5.6-1.1-5.7-2.5-11.5-2.5-17.4v-8.9c0-29.3 15.1-57.8 39.3-75.9L499.1 9.605c18.6-13.958 44.5-12.57 61.6 3.295 17 15.86 20.1 41.64 7.5 61.17L406.5 324.1c-17.7 27.4-48 43.9-80.6 43.9H320zM208 512H63.85 208.3h-.3z"
    />
    <path
      d="M320 400c0 61.9-50.1 112-112 112H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4-.39-3.8-.59-7.7-.59-11.6 0-61.9 50.1-112 112-112 4.4 0 8.8.3 13.1.8l94.6 80.3c2.8 9.8 4.3 20.2 4.3 30.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPaintbrush;
