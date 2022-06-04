import * as React from "react";
import { SVGProps } from "react";

const SvgBahtSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="baht-sign_svg__fa-primary"
      d="M0 101.6C0 80.82 16.82 64 37.57 64H176c61.9 0 112 50.1 112 112 0 24.2-7.7 46.6-20.7 64.9 31.6 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112H41.74C18.69 448 0 429.3 0 406.3V101.6zM176 224c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96h112zM64 288v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48H64z"
    />
    <path
      d="M176 32v32h-64V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm0 256v96h-64v-96h64zm0-160v96h-64v-96h64zm-64 320h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBahtSign;