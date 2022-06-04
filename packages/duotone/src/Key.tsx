import * as React from "react";
import { SVGProps } from "react";

const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="key_svg__fa-primary"
      d="M160 176C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176c-18.7 0-36.8-2.9-53.7-8.3l-114-114c-5.4-16.9-8.3-35-8.3-53.7zm216-80c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"
    />
    <path
      d="m168.3 229.7 114 114-34.2 32.4c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24v-80c0-6.4 2.529-12.5 7.029-17L168.3 229.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgKey;