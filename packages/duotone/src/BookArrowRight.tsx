import * as React from "react";
import { SVGProps } from "react";

const SvgBookArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="book-arrow-right_svg__fa-primary"
      d="M64.44 421.4C66.1 437.1 81.78 448 97.72 448h318.3c17.68 0 31.98 14.3 31.98 31.1 0 18.6-14.3 32.9-32 32.9H96c-53.02 0-96-42.98-96-96V96C0 42.98 42.98 0 96 0h304c26.5 0 48 21.49 48 48v136H280c-13.2 0-24 10.8-24 24s10.75 24 24 24h168v104c0 26.51-21.49 48-48 48H96c-19.43 0-34.82 17.3-31.56 37.4z"
    />
    <path
      d="M64 416c0 17.67 14.33 32 32 32h320v-64H96c-17.67 0-32 14.3-32 32zm568.1-225-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L558.1 184H280c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C514.3 275.7 512 281.8 512 288s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookArrowRight;
