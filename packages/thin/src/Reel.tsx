import * as React from "react";
import { SVGProps } from "react";

const SvgReel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 200H64a8 8 0 0 0 0 16h376c4.4 0 8-3.6 8-8s-3.6-8-8-8zM32 64h32v40a8 8 0 0 0 0 16h320c4.418 0 8-3.582 8-8s-3.6-8-8-8V64h32c17.67 0 32-14.33 32-32S433.67 0 416 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32zm336 40H80V64h288v40zM32 16h384c8.822 0 16 7.178 16 16s-7.2 16-16 16H32c-8.82 0-16-7.18-16-16s7.18-16 16-16zm384 432h-32v-40a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16v40H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32zM80 408h288v40H80v-40zm336 88H32c-8.822 0-16-7.178-16-16s7.178-16 16-16h384c8.822 0 16 7.178 16 16s-7.2 16-16 16zm-32-344H64c-4.42 0-8 3.6-8 8s3.58 8 8 8h320c4.418 0 8-3.582 8-8s-3.6-8-8-8zm0 192H64a8 8 0 0 0 0 16h320c4.418 0 8-3.582 8-8s-3.6-8-8-8zm0-96H64c-4.42 0-8 3.6-8 8s3.58 8 8 8h320c4.418 0 8-3.582 8-8s-3.6-8-8-8zm0 48H64a8 8 0 0 0 0 16h320c4.418 0 8-3.582 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgReel;