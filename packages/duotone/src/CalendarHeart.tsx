import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-heart_svg__fa-primary"
      d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm52.7 412.7L120 352c-22.09-22.1-22.09-57.9 0-80 22.1-22.1 57.9-22.1 80 0l24 24 24-24c22.1-22.1 57.9-22.1 80 0s22.1 57.9 0 80l-92.7 92.7c-6.2 6.2-16.4 6.2-22.6 0z"
    />
    <path
      d="M448 464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192h448v272zm-212.7-19.3L328 352c22.1-22.1 22.1-57.9 0-80s-57.9-22.1-80 0l-24 24-24-24c-22.1-22.1-57.9-22.1-80 0-22.09 22.1-22.09 57.9 0 80l92.7 92.7c6.2 6.2 16.4 6.2 22.6 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarHeart;
