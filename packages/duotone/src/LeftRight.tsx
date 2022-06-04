import * as React from "react";
import { SVGProps } from "react";

const SvgLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="left-right_svg__fa-primary"
      d="m256 304-96.3-.9V360c0 9.547-5.656 18.19-14.41 22s-18.94 2.078-25.92-4.406l-112-104c-9.781-9.094-9.781-26.09 0-35.19l112-104a24.014 24.014 0 0 1 25.92-4.406C154 133.8 159.7 142.5 159.7 152v55.1l96.3.9v96z"
    />
    <path
      d="M256 208h96.34v-56c0-9.547 5.656-18.19 14.41-22s18.94-2.078 25.92 4.406l112 104c9.781 9.094 9.781 26.09 0 35.19l-112 104c-6.984 6.484-17.17 8.219-25.92 4.406S352.3 369.5 352.3 360v-56H256v-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLeftRight;
