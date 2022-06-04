import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyFromBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="money-from-bracket_svg__fa-primary"
      d="M96 64c-17.67 0-32 14.33-32 32v64c0 17.7-14.33 32-32 32S0 177.7 0 160V96C0 42.98 42.98 0 96 0h448c53 0 96 42.98 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.67-14.3-32-32-32H96z"
    />
    <path
      d="M448 512H192c-35.3 0-64-28.7-64-64V96h384v352c0 35.3-28.7 64-64 64zm-256-64h64c0-35.3-28.7-64-64-64v64zm256 0v-64c-35.3 0-64 28.7-64 64h64zM224 272c0 44.2 42.1 80 96 80 53 0 96-35.8 96-80s-43-80-96-80c-53.9 0-96 35.8-96 80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMoneyFromBracket;
