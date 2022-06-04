import * as React from "react";
import { SVGProps } from "react";

const SvgAlignSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="align-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M399.7 288H512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-30.6l-81.7-64zM236.4 160H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H318.1l-81.7-64zM98.4 51.82C103.2 40.19 114.6 32 128 32h384c17.7 0 32 14.33 32 32s-14.3 32-32 32H154.8L98.4 51.82zM128 352c-17.7 0-32-14.3-32-32s14.3-32 32-32h115.7l81.2 64H128zm0-128c-17.7 0-32-14.3-32-32 0-6.1 1.71-11.8 4.7-16.7l61.8 48.7H128zm0 256c-17.7 0-32-14.3-32-32s14.3-32 32-32h278.2l81.2 64H128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAlignSlash;
