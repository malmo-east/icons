import * as React from "react";
import { SVGProps } from "react";

const SvgToiletPaperUnder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="toilet-paper-under_svg__fa-primary"
      d="M416 0c-53 0-96 86-96 192 0 84.04 27.07 155.3 64.68 181.3C394.5 380.1 405 384 416 384H128v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192C512 86 469 0 416 0zm0 256c-17.62 0-32-28.62-32-64s14.4-64 32-64 31.1 28.62 31.1 64-13.5 64-31.1 64zm-224.9-32c8.875 0 16.01-7.125 16.01-16s-6.31-16-16.01-16-16 7.1-16 16 8 16 16 16zm64 0c8.875 0 16-7.125 16-16s-7.125-16-16-16-16 7.1-16 16 8 16 16 16zm-112-16c0-8.875-7.128-16-16-16s-16 7.1-16 16 8 16 16 16 16-7.1 16-16zm-79.12-16c-8.875 0-16 7.125-16 16s7.125 16 16 16 15.1-7.125 15.1-16-6.22-16-15.1-16z"
    />
    <path
      d="M320 192C320 86.9 363 0 416 0H96C43 0 0 86 0 192s43 192 96 192h320c-53 0-96-86-96-192zM63.98 224c-8.875 0-16-7.125-16-16s7.125-16 16-16 15.1 7.125 15.1 16-6.22 16-15.1 16zm63.12 0c-8 0-16-7.1-16-16s8-16 16-16 16 7.125 16 16-6.3 16-16 16zm64 0c-8 0-16-7.1-16-16s8-16 16-16 16.01 7.125 16.01 16-6.31 16-16.01 16zm64 0c-8 0-16-7.1-16-16s8-16 16-16 16 7.125 16 16-6.3 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToiletPaperUnder;