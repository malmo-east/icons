import * as React from "react";
import { SVGProps } from "react";

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="share_svg__fa-primary"
      d="m503.7 226.2-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1c11.1 10.44 11.1 27.64 0 37.24z"
    />
    <path
      d="M288 272.1c-155.1 2.2-221.94 40.7-176.6 185.7 5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3 0 170.1 127.4 137.9 288 136v136.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShare;
