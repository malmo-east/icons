import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-exclamation_svg__fa-primary"
      d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32zm160 400c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-8-80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-13.3 10.7-24 24-24s24 10.7 24 24v96z"
    />
    <path
      d="M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192zm224 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm24-144c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarExclamation;
