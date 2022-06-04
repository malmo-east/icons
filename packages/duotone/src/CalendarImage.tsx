import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-image_svg__fa-primary"
      d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zM99.81 422.2l47.39-61.5c6.4-8.4 19.1-8.3 25.4.2L184 376l58.3-84.2c6.5-9.4 20.5-9.1 26.6.5l83.5 131.1c6.7 10.7-.9 24.6-13.5 24.6H112.5c-13.28 0-20.78-15.2-12.69-25.8z"
    />
    <path
      d="M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192zm147.2 168.7-47.39 61.5c-8.09 10.6-.59 25.8 12.69 25.8h226.4c12.6 0 20.2-13.9 13.5-24.6l-83.5-131.1c-6.1-9.6-20.1-9.9-26.6-.5L184 376l-11.4-15.1c-6.3-8.5-19-8.6-25.4-.2zM128 320c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarImage;
