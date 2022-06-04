import * as React from "react";
import { SVGProps } from "react";

const SvgMp3Player = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 240c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 128c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h256c8.836 0 16 7.162 16 16v384zM272 80H112c-17.67 0-32 14.33-32 32v48c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32v-48c0-17.67-14.3-32-32-32z" />
  </svg>
);

export default SvgMp3Player;
