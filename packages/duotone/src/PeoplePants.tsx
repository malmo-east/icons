import * as React from "react";
import { SVGProps } from "react";

const SvgPeoplePants = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="people-pants_svg__fa-primary"
      d="M244.6 158.1c-11.8-18.8-32.1-30.1-54.3-30.1h-60.5c-22.3 0-42.58 11.3-54.33 30.1L4.873 271c-9.375 15-4.813 34.8 10.157 44.1 15 9.375 34.75 4.812 44.1-10.19L88 258.8 87.1 480c0 17.67 14.33 32 31.1 32s33.8-14.3 33.8-32V336h16v144c0 17.67 14.32 32 31.1 32s32.9-14.3 32.9-32V258.8l28.88 46.2c6.02 9.7 16.52 15 27.12 15 5.781 0 11.66-1.562 16.94-4.859 14.97-9.375 19.53-29.11 10.16-44.09L244.6 158.1zM635.1 271l-70.56-112.1C552.8 139.3 532.5 128 510.3 128h-60.5c-22.22 0-42.53 11.25-54.28 30.09l-70.6 112.1c-9.375 14.98-4.812 34.72 10.16 44.09 15 9.375 34.75 4.812 44.09-10.19L408 258.8l-.9 221.2c0 17.67 14.33 32 31.1 32s32-14.33 32-32l1.8-144h16l-.9 144c0 17.67 14.32 32 31.1 32s32-14.33 32-32l1.8-221.2 28.88 46.2c6.02 9.7 16.52 15 27.12 15 5.781 0 11.66-1.562 16.94-4.859C639.9 305.8 644.5 286 635.1 271z"
    />
    <path
      d="M159.1 0C132.6 0 112 21.5 112 48s21.5 48 47.1 48 47.1-21.5 47.1-48-19.7-48-47.1-48zm320 0c-26.5 0-48 21.5-48 48s22.4 48 48 48 47.1-21.5 47.1-48-19.7-48-47.1-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeoplePants;
