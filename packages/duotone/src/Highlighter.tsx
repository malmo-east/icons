import * as React from "react";
import { SVGProps } from "react";

const SvgHighlighter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="highlighter_svg__fa-primary"
      d="M376.7 360.7 199.3 183.3 436.6 8.398C444 2.943 452.1 0 462.2 0c11.4 0 22.3 4.539 30.4 12.62l54.8 54.76c8.1 8.08 11.7 19.04 11.7 30.46 0 9.16-2 17.26-7.5 25.56L376.7 360.7zm-220 113.2-31 30.2c-4.5 5.4-10.6 7.9-17 7.9H40c-13.25 0-24-10.7-24-24v-4.7c0-7.2 2.53-12.5 7.03-17l63.03-63 70.64 70.6z"
    />
    <path
      d="M350.4 396.5c-9.1 12.3-24.3 19.5-38.7 19.5h-72.6l-24.5 25.4c-12.5 12.5-32.7 12.5-45.2 0l-50.8-50.8c-12.5-12.5-12.5-32.7 0-45.2l24.5-25.4v-71.7c0-15.3 8.1-29.6 20.4-38.7l35.8-26.3 177.4 177.4-26.3 35.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHighlighter;
