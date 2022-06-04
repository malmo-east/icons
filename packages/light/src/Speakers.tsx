import * as React from "react";
import { SVGProps } from "react";

const SvgSpeakers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M464 192c35.38 0 64-28.62 64-64s-28.62-64-64-64-64 28.62-64 64 28.6 64 64 64zm0-96c17.62 0 32 14.38 32 32s-14.38 32-32 32-32-14.38-32-32 14.4-32 32-32zm0 216c-13.22 0-24 10.78-24 24s10.78 24 24 24 24-10.78 24-24-10.8-24-24-24zM576 0H352c-35.3 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.67-14.33 32-32 32H352c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h224c17.67 0 32 14.33 32 32v384zM464 224c-61.9 0-112 50.1-112 112s50.13 112 112 112 112-50.13 112-112-50.1-112-112-112zm0 192c-44.13 0-80-35.88-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm-312-80c0 13.22 10.78 24 24 24s24-10.78 24-24-10.8-24-24-24-24 10.8-24 24zm88-208c0-35.38-28.62-64-64-64s-64 28.62-64 64 28.62 64 64 64 64-28.6 64-64zm-96 0c0-17.62 14.38-32 32-32s32 14.38 32 32-14.38 32-32 32-32-14.4-32-32zM256 16c0-8.838-7.2-16-16-16H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h176c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h176c8.8 0 16-7.16 16-16zm-13.6 248.9c4.906-7.344 2.906-17.28-4.438-22.17C219.6 230.5 198.1 224 175.9 224c-61.75 0-112 50.25-112 112s50.3 112 112 112c22.16 0 43.63-6.453 62-18.69 7.344-4.891 9.344-14.83 4.438-22.17-4.906-7.406-14.84-9.359-22.19-4.453C207.1 411.4 191.8 416 176 416c-44.1 0-80-35.9-80-80s35.9-80 80-80c15.81 0 31.09 4.609 44.19 13.31 7.41 4.89 17.31 2.99 22.21-4.41z" />
  </svg>
);

export default SvgSpeakers;
