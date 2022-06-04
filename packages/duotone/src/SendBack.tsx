import * as React from "react";
import { SVGProps } from "react";

const SvgSendBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="send-back_svg__fa-primary"
      d="M160 352v-64h32c53 0 96-43 96-96V96h128c35.3 0 64 28.7 64 64v64h-32c-53.9 0-96 42.1-96 96v96H224c-35.3 0-64-28.7-64-64z"
    />
    <path
      d="M0 64C0 28.65 28.65 0 64 0h128c35.3 0 64 28.65 64 64v128c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm64 128h128V64H64v128zm320 128c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64V320zm64 128h128V320H448v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSendBack;
