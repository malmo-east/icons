import * as React from "react";
import { SVGProps } from "react";

const SvgBoxTaped = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="box-taped_svg__fa-primary"
      d="M160 256c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96h160v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160h160v96z"
    />
    <path
      d="M50.73 58.53A48 48 0 0 1 93.67 32H192l-32 128H0L50.73 58.53zM288 160v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96h128zM256 32h98.3c18.2 0 34.8 10.27 43 26.53L448 160H288L256 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxTaped;
