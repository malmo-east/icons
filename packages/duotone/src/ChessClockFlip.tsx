import * as React from "react";
import { SVGProps } from "react";

const SvgChessClockFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="chess-clock-flip_svg__fa-primary"
      d="M576 128H64c-35.35 0-64 28.7-64 64v224c0 35.35 28.65 64 64 64h512c35.35 0 64-28.65 64-64V192c0-35.3-28.7-64-64-64zM176.5 416c-.1 0 .1 0 0 0-61.87 0-112.1-50.13-112.1-112s50.13-112 112-112c61.8.1 112 50.2 112 112.1 0 61.8-50.3 111.9-111.9 111.9zm288 0c-.1 0 .1 0 0 0-61.87 0-112.1-50.13-112.1-112s50.13-112 112-112c61.88.125 112 50.25 112 112.1 0 61.8-50.3 111.9-111.9 111.9z"
    />
    <path
      d="M464 224c-8.8 0-16 7.2-16 16v64c0 8.844 7.156 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-242.7 18.8a15.933 15.933 0 0 0-11.31 4.688l-45.25 45.25A15.71 15.71 0 0 0 160 304c0 9.1 7.5 16 16 16 4.094 0 8.188-1.562 11.31-4.688l45.25-45.25a15.948 15.948 0 0 0 4.688-11.31C237.3 249.6 229.8 242.8 221.3 242.8zM520 32H408c-13.2 0-24 10.75-24 24s10.75 24 24 24h31.83l-.03 48h48l.084-48H520c13.3 0 24-10.75 24-24s-10.7-24-24-24zM239.1 96h-128c-8.75 0-16 7.125-16 16l.87 16h160l.004-16c-.874-8.9-7.174-16-16.874-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessClockFlip;