import * as React from "react";
import { SVGProps } from "react";

const SvgMessageSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="message-slash_svg__fa-primary"
      d="M601.2 506.9 9.188 42.9C-1.234 34.74-3.056 19.64 5.115 9.201c8.188-10.41 23.23-12.29 33.7-4.073l591.1 463.1c10.42 8.156 12.24 23.26 4.073 33.7C626.7 513.2 611.6 515.1 601.2 506.9z"
    />
    <path
      d="M63.1 351.1c0 35.25 28.75 63.1 63.1 63.1h95.1v83.99c0 9.75 11.25 15.45 19.12 9.7l124.9-93.69 39.37-.012L63.1 146.9v204.2zM511.1.004h-384c-23.51 0-43.94 12.89-55.07 31.86l475.4 372.6c16.66-11.57 27.63-30.78 27.63-52.52V63.1C575.1 28.75 547.2.004 511.1.004z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMessageSlash;
