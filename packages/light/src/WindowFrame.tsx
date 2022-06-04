import * as React from "react";
import { SVGProps } from "react";

const SvgWindowFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 480h-16V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v416H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h480c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm-256 0H64V288h176v192zm0-224H64V64c0-17.67 14.33-32 32-32h144v224zm208 224H272V288h176v192zm0-224H272V32h144c17.67 0 32 14.33 32 32v192z" />
  </svg>
);

export default SvgWindowFrame;
