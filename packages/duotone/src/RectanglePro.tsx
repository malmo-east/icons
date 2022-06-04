import * as React from "react";
import { SVGProps } from "react";

const SvgRectanglePro = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="rectangle-pro_svg__fa-primary"
      d="M80 184c0-13.3 10.75-24 24-24h56c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32v40c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24V184zm48 56h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v32zm112-56c0-13.3 10.7-24 24-24h56c35.3 0 64 28.7 64 64 0 21.9-11 41.2-27.7 52.7l24.1 38.6c7 11.2 2.7 26-7.7 33.1-11.2 7-26 2.7-33.1-7.7L306.7 288H288v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184zm48 56h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v32zm288 8v16c0 48.6-39.4 88-88 88s-88-39.4-88-88v-16c0-48.6 39.4-88 88-88s88 39.4 88 88zm-128 16c0 22.1 17.9 40 40 40s40-17.9 40-40v-16c0-22.1-17.9-40-40-40s-40 17.9-40 40v16z"
    />
    <path
      d="M160 240h-32v-32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm128-32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v-32zm160 40c0-22.1 17.9-40 40-40s40 17.9 40 40v16c0 22.1-17.9 40-40 40s-40-17.9-40-40v-16zM576 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h512zM104 160c-13.25 0-24 10.7-24 24v144c0 13.3 10.75 24 24 24 13.3 0 24-10.7 24-24v-40h32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-56zm136 168c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h18.7l32.9 52.7c7.1 10.4 21.9 14.7 33.1 7.7 10.4-7.1 14.7-21.9 7.7-33.1l-24.1-38.6C373 265.2 384 245.9 384 224c0-35.3-28.7-64-64-64h-56c-13.3 0-24 10.7-24 24v144zm248-168c-48.6 0-88 39.4-88 88v16c0 48.6 39.4 88 88 88s88-39.4 88-88v-16c0-48.6-39.4-88-88-88z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRectanglePro;