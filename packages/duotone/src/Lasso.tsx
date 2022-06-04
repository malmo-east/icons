import * as React from "react";
import { SVGProps } from "react";

const SvgLasso = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      d="M576 176c0 97.2-128.9 176-288 176-14.9 0-29.6-.7-43.9-2.9 7.7 16.2 11.9 33.3 11.9 51.1 0 61.7-50.1 111.8-111.8 111.8H56c-13.25 0-24-10.7-24-24s10.75-24 24-24h88.2c35.2 0 63.8-28.6 63.8-63.8 0-24.9-14.5-47.5-37.1-58l-44.3-20.4C50.2 290.1 0 236.6 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176zM288 304c132.5 0 240-57.3 240-128S420.5 48 288 48 48 105.3 48 176s107.5 128 240 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLasso;