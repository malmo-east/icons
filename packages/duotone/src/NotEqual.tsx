import * as React from "react";
import { SVGProps } from "react";

const SvgNotEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="not-equal_svg__fa-primary"
      d="M122.6 465.7c-6.1 9.3-16.3 14.3-26.63 14.3-6.093 0-12.25-1.75-17.72-5.375-14.72-9.813-18.69-29.66-8.875-44.38l255.1-384c9.781-14.69 29.62-18.66 44.37-8.875 14.72 9.813 18.69 29.66 8.875 44.38L122.6 465.7z"
    />
    <path
      d="M400 304H230.4l-42.67 64H400c17.69 0 32-14.32 32-32.01S417.7 304 400 304zM48 208h169.5l42.67-64H48c-17.69 0-32 14.31-32 31.99S30.31 208 48 208zm384-32c0-17.69-14.31-31.99-32-31.99h-62.89l-42.67 64H400c17.7-.01 32-14.31 32-32.01zM16 336c0 17.69 14.31 32.01 32 32.01h62.87l42.67-64H48C30.31 304 16 318.3 16 336z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNotEqual;
