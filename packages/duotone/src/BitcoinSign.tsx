import * as React from "react";
import { SVGProps } from "react";

const SvgBitcoinSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="bitcoin-sign_svg__fa-primary"
      d="M0 101.6C0 80.82 16.82 64 37.57 64H176c61.9 0 112 50.1 112 112 0 24.2-7.7 46.6-20.7 64.9 31.6 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112H41.74C18.69 448 0 429.3 0 406.3V101.6zM176 224c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96h112zM64 288v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48H64z"
    />
    <path
      d="M48 32C48 14.33 62.33 0 80 0s32 14.33 32 32v32H48V32zm64 416v32c0 17.7-14.33 32-32 32s-32-14.3-32-32v-32h64zm96 0v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32h64zM176 64h-32V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32c0 1.54-.1 3.06-.3 4.54C197.6 65.59 187 64 176 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBitcoinSign;
