import * as React from "react";
import { SVGProps } from "react";

const SvgMessageText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.838 11.03 15.55 19.12 9.7L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm32 352c0 17.6-14.4 32-32 32H303.9a32.004 32.004 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM320 128H192c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v112c0 8.8 7.2 16 16 16s16-7.156 16-16V160h48c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgMessageText;
