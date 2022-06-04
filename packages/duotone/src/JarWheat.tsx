import * as React from "react";
import { SVGProps } from "react";

const SvgJarWheat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="jar-wheat_svg__fa-primary"
      d="M248 0c13.3 0 24 10.75 24 24s-10.7 24-24 24H72c-13.25 0-24-10.75-24-24S58.75 0 72 0h176zm8 160c0 35.3-28.7 64-64 64h-64c-35.35 0-64-28.7-64-64h48c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h48zM128 320c-35.35 0-64-28.7-64-64h48c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h48c0 35.3-28.7 64-64 64h-64zm128 32c0 35.3-28.7 64-64 64h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-16c-35.35 0-64-28.7-64-64h48c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h48z"
    />
    <path
      d="M256 80c35.3 0 64 28.7 64 64v304c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V144c0-35.3 28.65-64 64-64h192zm-48 80c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7H64c0 35.3 28.65 64 64 64h64c35.3 0 64-28.7 64-64h-48zm-16 160c35.3 0 64-28.7 64-64h-48c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7H64c0 35.3 28.65 64 64 64h64zm16 32c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7H64c0 35.3 28.65 64 64 64h16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h16c35.3 0 64-28.7 64-64h-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgJarWheat;
