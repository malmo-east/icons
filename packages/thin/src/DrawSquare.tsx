import * as React from "react";
import { SVGProps } from "react";

const SvgDrawSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M95.34 440c-3.81 22.7-23.56 40-47.34 40-26.51 0-48-21.5-48-48 0-23.8 17.3-43.5 40-47.3V127.3C17.3 123.5 0 103.8 0 80c0-26.51 21.49-48 48-48 23.78 0 43.53 17.3 47.34 40H352.7c3.8-22.7 23.5-40 47.3-40 26.5 0 48 21.49 48 48 0 23.8-17.3 43.5-40 47.3v257.4c22.7 3.8 40 23.5 40 47.3 0 26.5-21.5 48-48 48-23.8 0-43.5-17.3-47.3-40H95.34zM48 112c17.67 0 32-14.33 32-32S65.67 48 48 48 16 62.33 16 80s14.33 32 32 32zm8 272.7c20.1 3.3 35.96 19.2 39.34 39.3H352.7c3.3-20.1 19.2-36 39.3-39.3V127.3c-20.1-4.2-36-19.2-39.3-39.3H95.34C91.96 108.1 76.1 123.1 56 127.3v257.4zM48 400c-17.67 0-32 14.3-32 32s14.33 32 32 32 32-14.3 32-32-14.33-32-32-32zm352 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0-352c-17.7 0-32 14.33-32 32s14.3 32 32 32 32-14.33 32-32-14.3-32-32-32z" />
  </svg>
);

export default SvgDrawSquare;