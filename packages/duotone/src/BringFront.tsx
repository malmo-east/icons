import * as React from "react";
import { SVGProps } from "react";

const SvgBringFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bring-front_svg__fa-primary"
      d="M160 160c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V160z"
    />
    <path
      d="M64 192h64v64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h128c35.3 0 64 28.65 64 64H64v128zm512 256V320h-64v-64h64c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64h192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBringFront;
