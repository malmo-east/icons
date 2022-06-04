import * as React from "react";
import { SVGProps } from "react";

const SvgClipboardListCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="clipboard-list-check_svg__fa-primary"
      d="M256 64c0-35.35-28.65-64-64-64s-64 28.65-64 64c-35.35 0-64 28.65-64 64v16c0 8.8 7.16 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-35.35-28.7-64-64-64zm-64 24c-13.3 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.7 24-24 24zM96 376c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.7-24-24-24zm68.7-147.3L112 281.4l-20.69-20.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l32 32C103.8 318.4 107.9 320 112 320s8.188-1.562 11.31-4.688l64-64c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008z"
    />
    <path
      d="M336 64h-80c35.35 0 64 28.65 64 64v16c0 8.8-7.2 16-16 16H80c-8.84 0-16-7.2-16-16v-16c0-35.35 28.65-64 64-64H48C21.49 64 0 85.49 0 112v352c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zM96 424c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm16-104a15.933 15.933 0 0 1-11.31-4.688l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L112 281.4l52.69-52.69c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62l-64 64A16.12 16.12 0 0 1 112 320zm192 96H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.801 0 16 7.199 16 16 0 8.8-7.2 16-16 16zm0-96h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClipboardListCheck;
