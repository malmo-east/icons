import * as React from "react";
import { SVGProps } from "react";

const SvgVacuum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="vacuum_svg__fa-primary"
      d="M368 352c-44.2 0-80 35.8-80 80 0 44.18 35.82 80 80 80s80-35.82 80-80c0-44.2-35.8-80-80-80zm0 96c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16s16 7.162 16 16c0 8.8-7.2 16-16 16zm272-320C639.924 57.34 582.66.1 512 0H301.6c-60 0-112.6 42.59-125.1 101.2L102.1 448H48c-26.51 0-48 21.5-48 48 0 8.8 7.164 16 16 16h160c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-8.4L239 114.6c6.4-29.44 32.5-50.49 62.6-50.6H512c35.35.14 63.88 28.91 63.74 64.26-.121 29.96-20.1 55.82-50.26 62.25a191.626 191.626 0 0 1 35.88 56c-.148-.371-.24-.767-.389-1.138C607.2 226.1 640 181.1 640 128z"
    />
    <path
      d="M576 320v128c0 35.35-28.65 64-64 64h-65.78c44.91-41.51 47.66-111.6 6.148-156.5C426.8 327.9 389 315.1 352 321.6V160c0-17.67 14.33-32 32-32 105.1 0 192 86 192 192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVacuum;