import * as React from "react";
import { SVGProps } from "react";

const SvgPeace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="peace_svg__fa-primary"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.13-192-192S150.13 64 256 64s192 86.13 192 192-86.1 192-192 192z"
    />
    <path
      d="m288 240.6 135.7 108.6c-10.51 18.83-24.16 35.62-40.14 49.88L288 322.6v122.5c-10.4 1.8-21.1 2.9-32 2.9s-21.57-1.129-32-2.891v-122.5l-95.59 76.47c-15.98-14.27-29.64-31.05-40.14-49.88L224 240.6V66.89c10.4-1.76 21.1-2.89 32-2.89s21.57 1.129 32 2.891V240.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeace;
