import * as React from "react";
import { SVGProps } from "react";

const SvgJetFighter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="jet-fighter_svg__fa-primary"
      d="M160 24c0-13.25 10.7-24 24-24h112c13.3 0 24 10.75 24 24s-10.7 24-24 24H184c-13.3 0-24-10.75-24-24zm340.4 168c7.7 0 15.3 1.4 22.5 4.1L625 234.4c9 3.4 15 12 15 21.6 0 9.6-6 18.2-15 21.6l-102.1 38.3c-7.2 2.7-14.8 4.1-22.5 4.1H160l-54.6 54.6c-6.03 6-14.17 9.4-22.65 9.4H48c-8.84 0-16-7.2-16-16v-80c-17.67 0-32-14.3-32-32s14.33-32 32-32v-80c0-8.8 7.16-16 16-16h34.75c8.48 0 16.62 3.4 22.65 9.4L160 192h340.4zM80 240c-8.84 0-16 7.2-16 16s7.16 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H80zm216 224c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h112z"
    />
    <path
      d="M192 192V48h88l104 144H192zm192 128L280 464h-88V320h192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgJetFighter;
