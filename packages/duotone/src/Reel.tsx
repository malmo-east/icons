import * as React from "react";
import { SVGProps } from "react";

const SvgReel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="reel_svg__fa-primary"
      d="M32 64h384c17.67 0 32-14.33 32-32S433.67 0 416 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32zm384 384H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32z"
    />
    <path
      d="M384 144H64v32h320v-32zM64 448h320v-48H64v48zm368-240H64v32h368c8.8 0 16-7.2 16-16s-7.2-16-16-16zM384 64H64v48h320V64zM64 304h320v-32H64v32zm0 64h320v-32H64v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgReel;
