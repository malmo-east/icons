import * as React from "react";
import { SVGProps } from "react";

const SvgTrashCan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="trash-can_svg__fa-primary"
      d="M284.2 0c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31C140.6 6.848 151.7 0 163.8 0h120.4z"
    />
    <path
      d="M416 448c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V96h384v352zM144 176c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V176z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrashCan;
