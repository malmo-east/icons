import * as React from "react";
import { SVGProps } from "react";

const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="megaphone_svg__fa-primary"
      d="M576 64v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32s32 14.33 32 32zM160 384c0-11.9 1.9-21.7 5.3-31.5l46 13.9c-2.1 5.5-3.3 11.4-3.3 17.6 0 26.5 21.5 48 48 48 22.1 0 42.2-16.2 46.9-37.8l46 14C338.2 449.5 300.7 480 256 480c-53.9 0-96-43-96-96z"
    />
    <path
      d="M63.96 190.3 480 64v384L63.96 321.7C63.07 338.6 49.1 352 32 352c-17.67 0-32-14.3-32-32V192c0-17.7 14.33-32 32-32 17.1 0 31.07 13.4 31.96 30.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMegaphone;
