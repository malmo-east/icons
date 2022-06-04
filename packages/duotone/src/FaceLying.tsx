import * as React from "react";
import { SVGProps } from "react";

const SvgFaceLying = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="face-lying_svg__fa-primary"
      d="M144.4 176c0-17.7 14.3-32 32-32 17.6 0 32 14.3 32 32s-14.4 32-32 32c-17.7 0-32-14.3-32-32zm160 0c0-17.7 14.3-32 32-32 17.6 0 32 14.3 32 32s-14.4 32-32 32c-17.7 0-32-14.3-32-32z"
    />
    <path
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0c133.3 0 242.8 101.8 254.9 231.9-9.2-5-19.7-7.9-30.9-7.9H288c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c4.8 0 9.5-.5 14-1.5C456.4 445.1 364 512 256 512zm-79.6-368c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zM188.8 393.6c11.7-15.6 30.3-25.6 50.3-25.6 10 0 18.7 1.9 26.5 5.3 8.1 3.6 17.5-.1 21.1-8.2 3.5-9-.2-17.6-8.3-22-11.8-4.3-24.8-7.1-39.3-7.1-30.5 0-58.4 15.1-75.9 38.4-5.3 7-3.9 17.1 3.2 22.4 7.1 5.3 17.1 3.9 22.4-3.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFaceLying;
