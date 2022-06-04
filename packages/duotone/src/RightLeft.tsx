import * as React from "react";
import { SVGProps } from "react";

const SvgRightLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="right-left_svg__fa-primary"
      d="m504.3 110.4-112-104a24.038 24.038 0 0 0-25.93-4.408 23.997 23.997 0 0 0-14.41 22L351.9 96H32c-17.69 0-32 14.3-32 31.1S14.31 160 32 160h319.9l.08 72c0 9.547 5.651 18.19 14.41 22a24.037 24.037 0 0 0 25.93-4.406l112-104c10.28-9.494 10.28-25.694-.02-35.194z"
    />
    <path
      d="M512 383.1c0 18.6-14.3 32.9-32 32.9H160.1l-.1 72c0 9.547-5.652 18.19-14.41 22a24.037 24.037 0 0 1-25.93-4.406l-112-104c-10.24-9.5-10.24-25.69 0-35.19l112-104a24.03 24.03 0 0 1 25.93-4.406 23.983 23.983 0 0 1 14.41 22l.1 72.002H480c17.7 0 32 14.3 32 31.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRightLeft;
