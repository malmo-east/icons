import * as React from "react";
import { SVGProps } from "react";

const SvgTextHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="text-height_svg__fa-primary"
      d="m521.4 361.4-9.4 9.4V141.3l9.375 9.375C527.6 156.9 535.8 160 544 160s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-64-64c-12.5-12.5-32.75-12.5-45.25 0l-64 64c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L448 141.3v229.5l-9.375-9.375c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l64 64C463.6 476.9 471.8 480 480 480s16.38-3.118 22.62-9.368l64-64c12.5-12.5 12.5-32.75 0-45.25s-32.72-12.482-45.22.018z"
    />
    <path
      d="M288 32.01H32c-17.67 0-32 14.31-32 32v64c0 17.69 14.33 32 32 32s32-14.31 32-32v-32h64v320H96c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32s-14.33-32-32-32h-32v-320h64v32c0 17.69 14.33 32 32 32s32-14.31 32-32v-64c0-17.68-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTextHeight;
