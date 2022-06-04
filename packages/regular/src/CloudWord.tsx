import * as React from "react";
import { SVGProps } from "react";

const SvgCloudWord = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M496 384H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-256-32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zm-112-48c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm368-16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zm16 191.8v.2H144C64.47 480 0 415.5 0 336c0-62.7 40.07-116.9 96-135.8v-.2c0-92.8 75.2-168 168-168 50.9 0 96.4 22.6 127.3 58.31C406.2 83.68 422.6 80 440 80c66.3 0 120 53.7 120 120 0 6.6-.5 13-1.5 19.3 48 21 81.5 69 81.5 124.7 0 72.4-56.6 131.6-128 135.8zM378.2 148.7l-23.3-27C332.8 96.08 300.3 80 264 80c-66.3 0-120 53.7-120 119.1v35l-32.9 11.3C74.64 258.7 48 294.3 48 336c0 53 42.98 96 96 96h362.6l2.6-.2c46.2-2.6 82.8-41 82.8-87.8 0-36-21.6-67.1-52.8-80.7l-34.1-14.9 6-36.7c.6-3.8.9-7.7.9-11.7 0-39.8-32.2-72-72-72-10.5 0-20.4 2.2-29.2 6.2l-32.6 14.5z" />
  </svg>
);

export default SvgCloudWord;