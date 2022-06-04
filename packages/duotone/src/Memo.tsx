import * as React from "react";
import { SVGProps } from "react";

const SvgMemo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="memo_svg__fa-primary"
      d="M208 320H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h128c8.838 0 16-7.164 16-16s-7.2-16-16-16zm96-96H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0-96H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
    />
    <path
      d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM208 352H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h128c8.838 0 16 7.164 16 16s-7.2 16-16 16zm96-96H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0-96H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMemo;
