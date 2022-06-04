import * as React from "react";
import { SVGProps } from "react";

const SvgPeopleDress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="people-dress_svg__fa-primary"
      d="M253.9 173.1c-17.6-28.2-48.1-45.1-81.4-45.1h-25c-33.3 0-63.75 16.9-81.44 45.1L4.873 271c-9.375 15-4.813 34.8 10.157 44.1 15.03 9.375 34.75 4.812 44.1-10.19l32.62-52.19L47.1 384h40v96c0 17.67 14.33 32 31.1 32s32-14.33 32-32v-96h16v96c0 17.67 14.32 32 31.1 32s32-14.33 32-32v-96h41.8l-42.9-131.3 32.63 52.22C266.9 314.7 277.4 320 288 320c5.781 0 11.66-1.562 16.94-4.859 14.97-9.375 19.53-29.11 10.16-44.09L253.9 173.1zM635.1 271l-61.19-97.95C556.3 144.9 525.8 128 492.5 128h-25.06c-33.28 0-63.72 16.86-81.41 45.13l-61.19 97.92c-9.375 14.98-4.812 34.72 10.16 44.09 15.03 9.375 34.75 4.812 44.09-10.19l32.62-52.19L368 384h40v96c0 17.67 14.33 32 32 32s32-14.3 32-32v-96h16v96c0 17.67 14.33 32 32 32s31.1-14.33 31.1-32v-96h40l-43.76-131.3 32.63 52.22C586.9 314.7 597.4 320 608 320c5.781 0 11.66-1.562 16.94-4.859C639.9 305.8 644.5 286 635.1 271z"
    />
    <path
      d="M159.1 0c-26.5 0-48 21.5-48 48s22.4 48 48 48 48-21.5 48-48-20.6-48-48-48zM480 0c-26.5 0-47.1 21.5-47.1 48s20.6 48 47.1 48 48-21.5 48-48-21.5-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeopleDress;
