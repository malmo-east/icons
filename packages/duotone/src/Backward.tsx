import * as React from "react";
import { SVGProps } from "react";

const SvgBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="backward_svg__fa-primary"
      d="M255.1 96.03v319.9c0 27.37-31.88 41.74-52.51 24.62L11.44 280.6c-15.25-12.87-15.25-36.37 0-49.24l192-159.1c20.66-17.98 51.66-3.6 51.66 23.77z"
    />
    <path
      d="M459.5 71.41 288 214.31v83.45l171.5 142.9c20.6 17.04 52.5 2.64 52.5-25.56V96.03c0-27.37-31.9-41.75-52.5-24.62z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBackward;
