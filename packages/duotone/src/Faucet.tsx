import * as React from "react";
import { SVGProps } from "react";

const SvgFaucet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="faucet_svg__fa-primary"
      d="M384 112v28.8c0 12.8-9.6 19.2-19.2 19.2L224 144 83.2 160c-9.6 0-19.2-6.4-19.2-16v-32c0-9.6 9.6-16 19.2-16L224 112l140.8-16c9.6 0 19.2 6.4 19.2 16z"
    />
    <path
      d="M352 256h-38.54c-16-12.8-35.06-22.4-57.46-28.8v-48l-32-3.2-32 3.2v48c-22.4 6.4-41.5 16-57.5 28.8H16c-9.6 0-16 6.4-16 16v96c0 9.6 6.4 16 16 16h92.78c18.32 38.4 64.02 64 115.22 64s96.02-25.6 115.2-64H352c19.2 0 32 12.71 32 31.91 0 19.19 12.8 32.09 32 32.09h64c19.2 0 32-12.74 32-31.94C512 326.5 441.6 256 352 256zm-96-147.2V80c0-9.6-6.4-16-16-16h-32c-9.6 0-16 6.4-16 16v28.8l32 3.2 32-3.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFaucet;
